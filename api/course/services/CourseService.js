const {
    Course,
    CourseMedia
  } = require("../../../models");
  const {
    FILE_TYPES_IMAGE,
    IMAGE_FILE_SIZE,
    VIDEO_FILE_SIZE,
    FILE_TYPES_VIDEO,
  } = require("../../../config/serverConfig");

  const {
    uploadToS3,
    deleteFromS3,
    getFileKeyFromS3Location, }=require("../../shared/util");

  const {
    paginationwithCondition,
  } = require("../../shared/paginationWithCondition");
    async function createCourseService(
      coachId,
      name,
      description,
      hours,
      category,
     
      fileData,
     
      
      )
    {
      let resultData = {};
      let theCourse=await Course.create({
        coachId,
        name,
        description,
        hours,
        category,
      });

      resultData["course"] = theCourse;
      //getting all files of array
  if (fileData) {
    const filesFromAws = await Promise.all(
      await fileData.map(async (file) => {
        const [, fileExt] = file.mimetype.split("/");
        const imageTypes = FILE_TYPES_IMAGE.split("#");
        const videoTypes = FILE_TYPES_VIDEO;

        let mediaType = "file";
        if (imageTypes.includes(`.${fileExt}`)) {
          mediaType = "image";
        } else if (videoTypes.includes(`.${fileExt}`)) {
          mediaType = "video";
        } else {
          return {
            message: `The file Extention .${fileExt} is not accepted`,
            status: 400,
          };
        }
        if (mediaType === "image" && file.size > IMAGE_FILE_SIZE) {
          return {
            message: `${fileExt} files should be less than ${IMAGE_FILE_SIZE} bytes`,
            status: 400,
          };
        } else if (mediaType === "video" && file.size > VIDEO_FILE_SIZE) {
          return {
            message: `${fileExt} files should be less than ${VIDEO_FILE_SIZE} bytes`,
            status: 400,
          };
        }
        const courseMedia = await uploadToS3(file.buffer, fileExt);
        if (courseMedia.message) {
          return {
            message: courseMedia.message,
            status: 400,
          };
        }
        return await CourseMedia.create({
         
          media: courseMedia, 
          description: theCourse.description,
          courseId: theCourse.id,
        });
      })
    );
    const errorFile = await filesFromAws.find((file) => file.message);
    console.log(errorFile);
    if (errorFile != undefined) {
      result.destroy();
      console.log(result);
      return {
        message: `test:files should be less than ${VIDEO_FILE_SIZE} bytes`,
        status: 400,
      };
    }
    resultData["course-media"] = filesFromAws;
  }

      return{
          message: "The Course has been created successfully",
          data: resultData,
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

/*
   async function getAllCourses(coachId) {
     let resultData ={};
     const returnedResult = await Course.findOne({
       where :{
         coachId:coachId,
       },
     });
     
     if (!returnedResult){
       return {message :"you haven't uploaded any course yet", status:400}
     }

   
   
   
    }*/

  module.exports = {
      createCourseService,
      deleteCourseService,
      editCourseService,
      getCourseService,  
     /* getAllCourses,
      getAllCoursesByCategory,
       getAllCoursesByTime,
      getAllCoursesByEnrollNumber,   //nzwd fe el model w el migrating el Enroll Number
      searchOnCourses,*/
  };