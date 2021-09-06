import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
import { Provider } from "react-redux";
import {createStore } from  "redux";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import AddScheduleDialog from "./components/AddScheduleDialog/container"
dayjs.locale("ja");
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
        </MuiPickersUtilsProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
