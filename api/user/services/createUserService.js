const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios")


const nodemailer = require("nodemailer");
const cheerio = require('cheerio');
const {pythonExcute} = require('../../../machine-learning/testModel')
const {
  User,
  UserPersonality,
  Coach,
  Appointment,
} = require("../../../models");



/**
 *
 * tokenGenerator function that generat the token
 * @param {string} id id of root user
 * @param {string} name
 * @param {string} email
 * @param {string} accountType
 * @param {boolean} isActiveAccount
 * @returns token to user to use it when use APIs require authenticated
 */



async function sendMail(email,theString){

  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user:process.env.GMAIL_EMAIL,
      pass:process.env.GMAIL_PASS
    }
  });
  var mailOptions;
  let sender = "Positive Vision Team";
  mailOptions={
    from:sender,
    to:email,
    subject:"Email confirmation",
    html: `Here it is your confirmation code ${theString}`,
  };
  Transport.sendMail(mailOptions,function(error,response){
    if(error){
      console.log(error);
    }
    else{
      console.log(response +"message sent");
    }
  });
}

async function randString(){
const len = 8;
let randStr =''
for(let i=0 ; i<len;i++){
  const ch=Math.floor((Math.random()*10)+1);
  randStr +=ch;
}
return randStr;
}
async function bcryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}
//
async function tokenGenerator( {
  id,
  name,
  email,
  accountType,
  isActiveAccount
}) {
  const token = await jwt.sign(
    
    {
      id,
      name,
      email,
      accountType,
      isActiveAccount
    }
    ,
    process.env.APP_SECRET,
    { expiresIn: "30d" }
  );
  return token;
}
// check if the user with mobile number or email or usernmae if exit retrun error
async function createUserService(
  name,
  password,
  BOD,
  gender,
  email,
  address,
  socialMedia,
  image,
  facebookOrTwitter,
) {
  
  const hashedPassword = await bcryptPassword(password);
 

  const emailCheck = await User.findOne({
    where:{
      email:email,
    }
  });
  if (emailCheck) {
    return {
      message: "The Mail already exists",
      status: 400,
    };
  }

  const uniqueString =await randString();
  let checkk ='';
 if(socialMedia){
  const { data } = await axios.get(socialMedia);
  const $ = cheerio.load(data);
  checkk = $('p').text();
  delete data.dataValues

 }
 console.log(checkk);
 const personality = await pythonExcute(checkk.toString());
 let donee = personality;
delete checkk.dataValues;
 /*personality.then(function(result) {
   donee=result;
 
});*/
if(donee){
let thePersonality = await UserPersonality.create({
  personality:donee,
  email:email,
})  
console.log(thePersonality);
}
  let theUser = await User.create({
    name,
  password:hashedPassword,
  BOD,
  gender,
  email,
  address,
  socialMedia,
  image,
  facebookOrTwitter,
  uniqueString,
  });
  delete theUser.dataValues.password;
  delete theUser.dataValues.BOD;
  delete theUser.dataValues.uniqueString;
  await sendMail(email,uniqueString);
  
  return {
    message: `The user has been created successfuly`,
    data: theUser,
  };
}

async function confirmEmailService(email,theString) {

  ///under development
  const theUser = await User.findOne({
    where:{email:email}
  });
  if (!theUser) {
    return {
      message: `The email ${email} is not exist`,
      status: 400,
    };
  }
  if(theUser.uniqueString == theString){
    theUser.update({isMailVerified:true});
  }
  else{
    return {
      message: `This code is wrong`,
      status: 400,
    };
  }
 
  return {
    message: "The email has been verified successfully",
    data: theUser
  };
}
async function loginUserService(email,password){
  const checkEmail =await User.findOne({where:{email:email}}) 
  if(!checkEmail){
    return {
      message: "The Mail not exist",
      status: 404,
    };
  }
 const checkPass = await bcrypt.compare(password,checkEmail.password);
 if(!checkPass){
  return {
    message: "wrong password",
    status: 400,
  };
 }
if(checkEmail.isMailVerified === false){
  return {
    message: "this account is not confirmed yet ",
    status: 400,
  };
}

 
  const token = await tokenGenerator({
    id: checkEmail.id,
    name: checkEmail.name,
    email: checkEmail.email,
    accountType: checkEmail.accountType,
    isActiveAccount: checkEmail.isActiveAccount,
  });
  const data = {
    authenticated: true,
     id: checkEmail.id,
    name: checkEmail.name,
    email: checkEmail.email,
    accountType: checkEmail.accountType,
    isActiveAccount: checkEmail.isActiveAccount,
    token :token,
  };
  
  return {
    message: `The user has been successfully logged in`,
    data: data,
  };
}


async function chooseCoach(userId,coachId) {
  const theUser = await User.findOne({
    where:{id:userId,}
  });
  const searchCoach = await  Coach.findOne({
    where:{
      id:coachId
    }
  });
  if(!searchCoach){
    return {
      message: "this coach not found",
      status: 400,
    };
  }
  if(theUser.coachId){
    return {
      message: "there is already coach assigned ",
      status: 201,
    };
  }
  theUser.update({coachId:coachId});
  return {
    message: `The user has selected coach successfully`
  };
}


async function getAllCoaches() {
  const theCoaches = await Coach.findAll();

  if(!theCoaches){
    return {
      message: "no coach found",
      status: 404,
    };
  }
 
  return {
    message: `The user has selected coach successfully`,
    data: theCoaches
  };
}


async function addAppoin(name,date,time,hours,userId) {
const theUser = await User.findOne({
  where :{
    id:userId
  }
});
if(!theUser){
  return {
    message: "no user found",
    status: 404,
  };
}

if(!theUser.coachId){
  return {
    message: "you cant add appointment and you haven't coach assigned",
    status: 201,
  };
}

const Appoi = await Appointment.create({
name,
date,
time,
hours,
isConfirm:false,
coachId:theUser.coachId,
userId,
});
return {
  message: `The Appointment has been created successfully`,
  data: Appoi,
};
}



async function deleteAppoin(appoiId) {
  let checkId=await Appointment.findOne({where:{id:appoiId}})
       if(!checkId){
           return{
               message:"The Appointment not exist",
               status: 404,
           };
       }
       await checkId.destroy();
       return{
        message: "The Appointment has been deleted successfully"
    };
}


async function getAllAppoin(userId) {
  let appointments=await Appointment.findAll({where:{userId:userId}})
       if(!appointments){
           return{
               message:"no appointment  exist",
               status: 404,
           };
       }
       return{
        message: "The Appointment has been listed successfully",
        data: appointments
    };
}

module.exports = {
  createUserService,
  confirmEmailService,
  loginUserService,
  chooseCoach,
  getAllCoaches,
  addAppoin,
  deleteAppoin,
  getAllAppoin,
  /*
    getAllAppoin
    showEnrolledCourses,  //table
    enrollCourse, //table
    rateBlogpost, //table zy el enroll
    showRatedBlogposts,
    
    */
};
