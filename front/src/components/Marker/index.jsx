import React, {useState} from "react";
import {Marker, InfoWindow } from "@react-google-maps/api";
import * as styles from "./style.css";
const PlaceInfo = props => {
    const {color, name, changeState} = props;
    
  const places = [
    {info: "info1", location: {lat: props.lat, lng: props.lng}},
    {info: "info2", location:{lat: 34.665442, lng: 135.432338}}    
    ];
    const [selected, setSelected] = useState(null);

  return (
      <div onClick={() => changeState()}>
         <div
            className={styles.pin}
            style={{ backgroundColor: color, cursor: "pointer" }}
            title={name}
            />
          {selected ? (
              <InfoWindow
              position={{
                  lat: selected.location.lat,
                  lng: selected.location.lng,
              }}
              onCloseClick={() => {
                  setSelected(null);
              }}>
                  <div>{selected.info}</div>
              </InfoWindow>
          ): null}
    </div>
  );
};

export default PlaceInfo;