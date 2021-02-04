const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

const {
  Coach
} = require("../../../models");

async function bcryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
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
  let theCoach = await Coach.create({
    name,
  password:hashedPassword,
  email,
  description,
  experienceLevel,
  phoneNumber,
  image,
  });
  delete theCoach.dataValues.password;
  

  return {
    message: `The user has been created successfuly`,
    data: theCoach,
  };
} 
async function verifyEmailService(email) {

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
  
   /*
  
    const token = await tokenGenerator({
      id: theUser.id,
      name: theUser.name,
      email: theUser.email,
    });
    return {
      message: "The email has been verified successfully",
      data: { user: theUser, token:token },
    };
    */
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

   
    return {
      message: `The user has been successfully logged in`,
      data: checkEmail,
    };
  }
  module.exports = {
    createCoachService,
    verifyEmailService,
    bcryptPassword,
    loginCoachService
  };