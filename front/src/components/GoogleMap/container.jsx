import SimpleMap from "./presentation";
import {connect} from "react-redux";
import { googlemapSetLocation } from "../../redux/googlemap/actions";


const mapStateToProps = state => ({
    map: state.map,
})
const mapDispatchToProps = dispatch => ({
    setCenter: ()=> {
        dispatch(googlemapSetLocation);
    },
})
// const mergeProps = (stateProps, dispatchProps) => {
//     const {center, zoom} = stateProps,
//     const {openGoogleMap} = dispatchProps;
//     return (
//         ...stateProps,
//         ...dispatchProps
//     )
// }
export default connect(mapStateToProps, mapDispatchToProps, )(SimpleMap);