import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";
import mapReducer from "./googlemap/reducer";
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    schedules:  schedulesReducer,
    currentSchedule: currentScheduleReducer,
    map: mapReducer
});
export default rootReducer;