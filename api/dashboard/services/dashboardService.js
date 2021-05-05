const {
    UserPersonality,
    User
  } = require("../../../models");



   async function getPersonalityService(email)
   {
    let returndataa= {}
    const returnedResult = await UserPersonality.findOne({
      where: {
        email: email,
      },
    });
    const userData = await User.findOne({
    where:{
      email:email,
    }
    });
    if (!returnedResult) {
        return { message: "this email not found", status: 400 };
      }
      returndataa['pesonality']=returnedResult;
      returndataa['userinfo']=userData;
    return{
        //message:"The Course has been updated successfully",
        data: returndataa,
    };
   }

  module.exports = {
      getPersonalityService,
  };