const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {
  Coach
} = require("../../../models");

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
async function tokenGenerator({
  id,
  name,
  email,
  accountType,
  isActiveAccount,
}) {
  const token = await jwt.sign(
    {
      id,
      name,
      email,
      accountType,
      isActiveAccount,
    },
    process.env.APP_SECRET,
    { expiresIn: "30d" }
  );
  return token;
}

async function createCoachService(
    name,
    password,
    email,
    description,
    experienceLevel,
    phoneNumber,
    image,
) {
    const hashedPassword = await bcryptPassword(password);
 

  const emailCheck = await Coach.findOne({
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

  let theCoach = await Coach.create({
    name,
  password:hashedPassword,
  email,
  description,
  experienceLevel,
  phoneNumber,
  image,
  uniqueString,
  });
  delete theCoach.dataValues.password;
  delete theCoach.dataValues.uniqueString;
  await sendMail(email,uniqueString);


  return {
    message: `The user has been created successfuly`,
    data: theCoach,
  };
} 
async function confirmCoachEmailService(email,theString){

    ///under development
    const theCoach = await Coach.findOne({
      where:{email:email}
    });
    if (!theCoach) {
      return {
        message: `The email ${email} is not exist`,
        status: 400,
      };
    }
   
    if(theCoach.uniqueString == theString){
      theCoach.update({isMailVerified:true});
    }
    else{
      return {
        message: `This code is wrong`,
        status: 400,
      };
    }
  
    return {
      message: "The email has been verified successfully",
      data: theCoach
    };
  }

  async function loginCoachService(email,password){
    const checkEmail =await Coach.findOne({where:{email:email}}) 
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
    token,
  };
  
  return {
    message: `The user has been successfully logged in`,
    data: data,
  };
  }
  module.exports = {
    createCoachService,
    confirmCoachEmailService,
    loginCoachService
  };