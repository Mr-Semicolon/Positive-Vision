const router = require("express-promise-router")();
const ToDoListController = require("./Controller");
const { validator } = require("../../middelwares/validator");
const {isAuthorized} =require("../../middelwares/authorization");

const {
  addEventSchema,
  deleteEventSchema,
  getEventSchema,
  editEventSchema,
  markEventSchema,
 
} = require("./schema");

const toDoListRoute = {
  BaseRoute: "/to-do-list",
  root: "/",
  addEvent: "/add-Event",
  deleteEvent: "/delete-Event",
  editEvent:"/edit-Event",
  getEvent:"/get-Event",
  markEvent:"/mark-Event",
  getAllEvent:"/all-event",
};

router.post(
  toDoListRoute.addEvent,
  validator(addEventSchema),
  isAuthorized,
  ToDoListController.addEventController.bind(ToDoListController)
);

router.post(
  toDoListRoute.markEvent,
  validator(markEventSchema),
  isAuthorized,
  ToDoListController.markEventController.bind(ToDoListController)
);

router.delete(
  toDoListRoute.deleteEvent,
  validator(deleteEventSchema),
  isAuthorized,
  ToDoListController.deleteEventController.bind(ToDoListController)
);

router.put(
  toDoListRoute.editEvent,
  validator(editEventSchema),
  isAuthorized,
  ToDoListController.editEventController.bind(ToDoListController)
);
router.get(
  toDoListRoute.getEvent,
  validator(getEventSchema),
  isAuthorized,
  ToDoListController.getEventController.bind(ToDoListController)
);

router.get(
  toDoListRoute.getAllEvent,
  isAuthorized,
  ToDoListController.getAllEventsController.bind(ToDoListController)
);
module.exports = {
  toDoListRouter: router,
  toDoListRoute,
};
