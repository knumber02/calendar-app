import {GOOGLEMAP_SET_LOCATION} from "./actions";
import {defaultSetting} from "../../services/map.js";

const init = defaultSetting;

 const mapReducer = (state = init, action) => {
    const {type, payload } = action;
    switch (type) {
        case GOOGLEMAP_SET_LOCATION:
            return {...state};
        default:
            return state;
    }
}
export default mapReducer;