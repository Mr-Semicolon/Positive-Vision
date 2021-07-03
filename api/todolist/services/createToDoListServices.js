const {
    Event_list,
  } = require("../../../models");


    async function addEventToToDoList(
      name,
      description,
      userId,
      )
    {
      let theEvent=await Event_list.create({
      name:name,
      description:description,
      isDone:false,
      userId:userId,
       
      });

      return{
          message: "The event has been created successfully",
          data: theEvent,
      };
   }
   async function  getAllEvents(userId) {
     const eventList = await Event_list.findAll({
      where :{
        userId:userId
      }
     });
     if(!eventList){
      return { message: "this to-do list not found", status: 400 };
     }
     return{
       message:"this is the whole to-do list", data:eventList
     };
     
   }

   async function  getEvent(eventId) {
     const event = await Event_list.findOne({
      where :{
        id:eventId,
      }
     });
     if(!event){
       return{message: "this event not found " , status :400};
     }
     return {
      message:"event found" , data: event
     };
   }
   async function deleteEvent(eventId){
       let checkId=await Event_list.findOne({where:{id:eventId}})
       if(!checkId){
           return{
               message:"The Event not exist",
               status: 404,
           };
       }
       await checkId.destroy();
       return{
        message: "The Event has been deleted successfully"
    };
   }

   async function editEvent(eventId,reqBody)
   {
    let resultData = {};
    const returnedResult = await Event_list.findOne({
      where: {
        id: eventId,
      },
    });
    if (!returnedResult) {
      return { message: "this Event not found", status: 400 };
    }
    returnedResult.update(reqBody);
    resultData["UpdatedEvebt"] = returnedResult;
  
    return {
      message: `Event update has been stablished successfully`,
      data: resultData,
    };

   }
async function markOnEvent(eventId) {
  
  const returnedEvent = await Event_list.findOne({
    where :{
      id:eventId,
    }
  });
  if(!returnedEvent){
    return { message: "this Event not found", status: 400 };
  }
  returnedEvent.update({isDone:true});

  return{
    message: "The Event has been marked successfully"
};
}
 
  module.exports = {
      addEventToToDoList,
      getAllEvents,
      getEvent,
      deleteEvent,
      editEvent,
      markOnEvent,
  };