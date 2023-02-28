import React, { useEffect } from "react";
import useStyles from "./styles";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Header from "./Header";
import NavbarSec from "../Navbar/NavbarSec";

const Map = ({
  coordinates,
  places,
  setCoordinates,
  setChildClicked,
  onPlaceChanged,
  onLoad,
}) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    const loadGoogleMapsAPI = async () => {
      const { default: loadScript } = await import("@googlemaps/js-api-loader");

      await loadScript({
        apiKey: "AIzaSyB9OcuKeMiFkytHlU8ZxpNuzSfpdd-ovUI",
        libraries: ["name"],
      });
    };

    loadGoogleMapsAPI();
  }, []);

  return (
    <>
      <NavbarSec />
      <div className="map">
        <div className={classes.mapContainer}>
          <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB9OcuKeMiFkytHlU8ZxpNuzSfpdd-ovUI",
            }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={17}
            margin={[50, 50, 50, 50]}
            onChange={(e) => {
              setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            }}
            onChildClick={(child) => {
              setChildClicked(child);
            }}
          >
            {places.map((place, i) => (
              <div
                className={classes.markerContainer}
                lat={places[i].lat}
                lng={places[i].lng}
                key={i}
              >
                {mobile ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography
                      className={classes.typography}
                      variant="subtitle2"
                      gutterBottom
                    >
                      {places.name}
                    </Typography>
                  </Paper>
                )}
              </div>
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
