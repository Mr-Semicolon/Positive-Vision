const {
    Course
  } = require("../../../models");


    async function createCourseService(
      name,
      description,
      hours,
      coachId,
      
      )
    {
      let theCourse=await Course.create({
          name,
          description,
          hours,
          coachId,
      });

      return{
          message: "The Course has been created successfully",
          data: theCourse,
      };
   }

   async function deleteCourseService(name){
       const checkName=await Course.findOne({where:{name :name}})
       if(!checkName){
           return{
               message:"The Course not exist",
               status: 404,
           };
       }
       await checkName.destroy();
   }

   async function editCourseService(name,reqBody)
   {
    const checkName=await Course.findOne({where:{name :name}})
    if(!checkName){
        return{
            message:"The Course not exist",
            status: 404,
        };
    }
    await checkName.update(reqBody);

   }
  module.exports = {
      createCourseService,
      deleteCourseService,
      editCourseService,
  };