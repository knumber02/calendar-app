import React , {useState, useEffect, useCallback ,useRef} from "react";
import GoogleMapReact from "google-map-react";
import PlaceInfo from "../Marker"
import Baloon from "../Baloon"
import mapStyles from "./mapstyles";


const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

 const SimpleMap =  ()  => {
    const [center, setCenter ] = useState({lat: "34.665442", lng:"135.432338"})
    const [zoom, setZoom] = useState(13);
    const [currentPosition, setCurrentPosition] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [map, setMap] = useState(null);
    const [maps, setMaps] = useState(null);
    const [marker, setMarker] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [address, setAddress] = useState(null);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    const success = data => {
        const currentPosition = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
        };
        setCurrentPosition(currentPosition);
        setCenter(currentPosition);
    };

    const error = data => {
        const currentPosition = {
            lat: 35.667345081692176,
            lng: 139.7401442420512
        };
        setCurrentPosition(currentPosition);
        setCenter(currentPosition);
    }
    
    const handleApiLoaded = (obj) => {
        setMap(obj.map);
        setMaps(obj.maps);
        setGeocoder(new obj.maps.Geocoder());
      };
    const search = () => {
        geocoder.geocode({
            address,
        }, (result, status) => {
            if(status == maps.GeocoderStatus.OK){
                map.setCenter(result[0].geometry.location);
                if(marker){
                    marker.setMap(null);
                }
                setMarker(new maps.Marker({
                    map,
                    position: result[0].geometry.location,
                }));
                console.log(result[0].geometry.location.lat());
                console.log(result[0].geometry.location.lng());
            }

        })
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    const changeState = () => {
        setIsOpen(!isOpen);
    }
    const setLatLng = ({ lat, lng }) => {
        if(marker){
            marker.setMap(null);
        }
        const latLng = {
            lat,
            lng
        }

       setMarker(new maps.Marker({
            map,
            position: latLng,
        }));
        map.panTo(latLng);
      };

    return (
        <div>
        <div>
            <input type="text" onChange={(e) => setAddress(e.target.value)} />
            <button type="button" onClick={search}>Search</button>
        </div>
        <div style={{ height: "100vh", width: "100%"}}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDAmPKJxi7zuzD2i_l8wXJTEpIn68A6wtw"}}
            center={center}
            zoom={zoom}
            options={options}
            onLaod={onMapLoad}
            onGoogleApiLoaded={handleApiLoaded}
            onClick={setLatLng}
            >
                {currentPosition ? (
                    <PlaceInfo
                        lat={currentPosition.lat}
                        lng={currentPosition.lng}
                        changeState={changeState}
                    />
                ): null}
                {isOpen ? (
                    <Baloon lat={currentPosition.lat} lng={currentPosition.lng} />
                ): null}
            </GoogleMapReact>
        </div>
        </div>
    )
}

export default SimpleMap;