const {

  addEventToToDoList,
  getAllEvents,
  getEvent,
  deleteEvent,
  editEvent,
  markOnEvent,
  } = require("./services/createToDoListServices");
  
  
  const { BaseController } = require("../");
 
  class ToDoListController extends BaseController {
    async addEventController(req,res,next)
    {
        const{
         name,
         description,
          
        }=req.body;
        const userId=res.locals.id;

        const result =await addEventToToDoList(
          name,
          description,
          userId,
          
        );
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
            result.message
        );
            return next(response);
        }
        const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
        );
        return res.json(response);
    }
  
    async getAllEventsController(req,res,next)
    {
        
        const userId=res.locals.id;

        const result =await getAllEvents(
        
          userId,
          
        );
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
            result.message
        );
            return next(response);
        }
        const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
        );
        return res.json(response);
    }


    async getEventController(req,res,next)
    {
        
      const { eventId } = req.query;

        const result =await getEvent(
          eventId
        );
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
            result.message
        );
            return next(response);
        }
        const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
        );
        return res.json(response);
    }

    async deleteEventController(req,res,next)
    {
        
      const { eventId } = req.query;

        const result =await deleteEvent(
          eventId
        );
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
            result.message
        );
            return next(response);
        }
        const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
        );
        return res.json(response);
    }

    async editEventController(req,res,next)
    {
        
      const { eventId } = req.query;

        const result =await editEvent(
          eventId,req.body
        );
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
            result.message
        );
            return next(response);
        }
        const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
        );
        return res.json(response);
    }
  
  
    async markEventController(req,res,next)
    {
        
      const { eventId } = req.query;

        const result =await markOnEvent(
          eventId
        );
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
            result.message
        );
            return next(response);
        }
        const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
        );
        return res.json(response);
    }
  
  }
  
  module.exports = new ToDoListController();