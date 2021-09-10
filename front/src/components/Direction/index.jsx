import  React, {useState, useCallback} from "react";
import {DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

export default function Direction (props) {
    const origin = {lat:  props.lat, lng: props.lng};
    const destination = {
        lat: 45.299023,
        lng: 141.65308
    }
    const [currentDirection, setCurrentDirection] = useState(null);
    const directionsCallback = useCallback((googleResponse) => {
        if (googleResponse) {
          if (currentDirection) {
            if (
              googleResponse.status === "OK" &&
              googleResponse.geocoded_waypoints.length !==
                currentDirection.geocoded_waypoints.length
            ) {
              console.log("ルートが変更されたのでstateを更新する");
              setCurrentDirection(googleResponse);
            } else {
              console.log("前回と同じルートのためstateを更新しない");
            }
          } else {
            if (googleResponse.status === "OK") {
              console.log("初めてルートが設定されたため、stateを更新する");
              setCurrentDirection(googleResponse);
            } else {
              console.log("前回と同じルートのためstateを更新しない");
            }
          }
        }
      });
    
    
      return (
        <>
          <DirectionsService
            options={{
              origin,
              destination,
              travelMode: "DRIVING",
              optimizeWaypoints: true,
            
    
            }}
            callback={directionsCallback}
          />
          {currentDirection !== null && (
            <DirectionsRenderer
              options={{
                directions: currentDirection,
              }}
            />
            
          )}
        </>
      );
}