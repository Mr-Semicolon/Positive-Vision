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

   async function deleteCourseService(courseId){
       const checkId=await Course.findOne({where:{id:courseId}})
       if(!checkId){
           return{
               message:"The Course not exist",
               status: 404,
           };
       }
       await checkId.destroy();
       return{
        message: "The Course has been deleted successfully",
    };
   }

   async function editCourseService(courseId,reqBody)
   {
    const checkId=await Course.findOne({where:{id :courseId}})
    if(!checkId){
        return{
            message:"The Course not exist",
            status: 404,
        };
    }
    await checkId.update(reqBody);
    return{
        message: "The Course has been updated successfully",
        data: checkId,
    };

   }
  module.exports = {
      createCourseService,
      deleteCourseService,
      editCourseService,
  };