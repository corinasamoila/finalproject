import React, { useState, useEffect } from "react";
import Nav from "./components/Navbar/Nav";
import Universities from "./components/Universities/Universities";
import Career from "./components/Career/Career";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Maps/Map";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import places from "../src/components/Maps/places.json";

function App() {
  const center = {
    lat: 44.439663,
    lng: 26.096306,
  };

  const [coordinates, setCoordinates] = useState(center);
  const [childClicked, setChildClicked] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coordinates: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  const onLoad = (autoC) => {
    console.log(autoC);
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    console.log(autocomplete.getPlace().geometry.location.lat());
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} exact={true} />
          <Route path="/Universities" element={<Universities />} exact={true} />
          <Route path="/Career" element={<Career />} exact={true} />
          <Route
            path="/Maps"
            element={
              <Map
                setCoordinates={setCoordinates}
                setChildClicked={setChildClicked}
                coordinates={coordinates}
                places={places}
                onPlaceChanged={onPlaceChanged}
                onLoad={onLoad}
              />
            }
            exact={true}
          />
          <Route path="/Login" element={<Login />} exact={true} />
          <Route path="/Register" element={<Register />} exact={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
