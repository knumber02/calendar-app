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
import SimpleMap from "./components/GoogleMap/presentation";
import { BrowserRouter as Router, Route ,Switch, Redirect} from "react-router-dom";
import Navbar from "./Navbar.js";
import Login from "./components/Login"
const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => (
    <Provider store={store}>
        <Router>   
            <Route  exact path="/" >
                <Login />
            </Route>
            <Route exact path="/calendar">
                <MuiPickersUtilsProvider utils={DayjsUtils}>
                <Navbar />
                    <Navigation />
                    <CalendarBoard />
                    <AddScheduleDialog />
                    <CurrentScheduleDialog />
                </MuiPickersUtilsProvider>
            </Route>
            <Route path="/maps">
                <Navbar />
                <SimpleMap />
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
