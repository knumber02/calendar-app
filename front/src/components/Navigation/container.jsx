import Navigation from "./presentation";
import { connect } from "react-redux";
import { getMonth, getNextMonth, getPreviousMonth, formatMonth } from "../../services/calendar";
import {calendarSetMonth } from "../../redux/calendar/actions";
import {createCalendar } from "../../services/calendar";
import {asyncSchedulesFetchItem} from "../../redux/schedules/effects";

const mapStateToProps = state => ({calendar: state.calendar });
const mapDispatchToProps = dispatch => ({
    setMonth: month =>  {
        dispatch(calendarSetMonth(month));
    },
    fetchItem: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
        dispatchProps.fetchItem(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
        dispatchProps.fetchItem(previousMonth);
    },
    setMonth: dayObj => {
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
        dispatchProps.fetchItem(month);
    },
    
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);