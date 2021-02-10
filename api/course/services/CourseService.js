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
       let checkId=await Course.findOne({where:{id:courseId}})
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
    let resultData = {};
    const returnedResult = await Course.findOne({
      where: {
        id: courseId,
      },
    });
    if (!returnedResult) {
      return { message: "this course not found", status: 400 };
    }
    returnedResult.update(reqBody);
    resultData["UpdatedCourse"] = returnedResult;
  
    return {
      message: `course update has been stablished successfully`,
      data: resultData,
    };

   }

   async function getCourseService(courseId)
   {
    let resultData = {};
    const returnedResult = await Course.findOne({
      where: {
        id: courseId,
      },
    });
    if (!returnedResult) {
        return { message: "this course not found", status: 400 };
      }
      
      resultData["gettingCourse"] = returnedResult;
    return{
        //message:"The Course has been updated successfully",
        data: resultData,
    };
   }

  module.exports = {
      createCourseService,
      deleteCourseService,
      editCourseService,
      getCourseService,
  };