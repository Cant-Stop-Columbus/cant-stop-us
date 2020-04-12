import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";;

const markers = [
  { markerOffset: 15, name: "", coordinates: [-82.9988, 39.9612] },
  { markerOffset: 15, name: "", coordinates: [-84.1916, 39.7589] }
];

const Map = () => {
  return (
    <ComposableMap
      projection="geoAlbers"
      projectionConfig={{
        rotate: [97, 0, 3],
        scale: 1050
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            // .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
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
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
