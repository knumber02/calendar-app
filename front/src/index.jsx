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
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => (
    <Provider store={store}>
        <Router>    
            <Navbar />
            <MuiPickersUtilsProvider utils={DayjsUtils}>
                <Route exact path="/">
                    <Navigation />
                    <CalendarBoard />
                    <AddScheduleDialog />
                    <CurrentScheduleDialog />
                </Route>
             </MuiPickersUtilsProvider>
            <Route path="/maps" component={SimpleMap} />
            
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
