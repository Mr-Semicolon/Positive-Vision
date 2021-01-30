const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  User
} = require("../../../models");



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
}) {
  const token = await jwt.sign(
    {
      id,
 name,
  email,
    },
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
  });
  delete theUser.dataValues.password;
  delete theUser.dataValues.BOD;
 
  
  return {
    message: `The user has been created successfuly`,
    data: theUser,
  };
}

async function verifyEmailService(email) {

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

 

  const token = await tokenGenerator({
    id: theUser.id,
    name: theUser.name,
    email: theUser.email,
  });
  return {
    message: "The email has been verified successfully",
    data: { user: theUser, token:token },
  };
}



module.exports = {
  createUserService,
  verifyEmailService,
  bcryptPassword,
};
