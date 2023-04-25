import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import classes from "./Travel.module.css";

import geoUrl from "./mapJson/COUNTY_MOI_1090820.json";

const markers = [
  {
    markerOffset: 15,
    name: "Penghu",
    coordinates: [119.518746, 23.5106824],
  },
  {
    markerOffset: 25,
    name: "Xiao Liuqiu",
    coordinates: [120.369817, 22.338644],
  },
  {
    markerOffset: 25,
    name: "Kinmen",
    coordinates: [118.33, 24.444413],
  },
];

const Travel = () => {
  // const geoUrl =
  // "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

  return (
    <section id={classes.Travel}>
      <section>
        <h1>Travel</h1>
        <p>
          此地圖記錄自己曾去過的離島
          <br />
          是透過React-simple-map這個套件來實現的。
        </p>
      </section>
      <section>
        <h2>Taiwan</h2>
        <div className={classes.map}>
          <ComposableMap
            width={800}
            height={800}
            projectionConfig={{
              rotate: [5.0, 18.0, 0],
              center: [130.5, 13],
              scale: 8000,
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#fff"
                    style={{
                      default: {
                        fill: "#acbea4",
                      },
                      hover: {
                        fill: "#FF9600",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#FF5533" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </section>
    </section>
  );
};

export default Travel;
