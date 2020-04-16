import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import theme from '../src/theme';

const geoUrl =
"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";;

const Map = ({ setTooltipContent, markers }) => {
  return (
    <ComposableMap
      projection="geoAlbers"
      projectionConfig={{
        rotate: [98, 0,2],
        scale: 1050
      }}
      style={{backgroundColor:"#F5F5F5", borderRadius:"10px"}}
    >
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              // .filter()
              .map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#D0D0D0"
                  stroke="#F5F5F5"
                />
              ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, url }) => (
          <Marker 
            key={name} 
            coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(`${name}<br/><a href="${url}" alt="${name}" class="a-white" rel="noopener noreferrer" target="_blank">${url}</a>`);
            }}
            data-tip=''
          >
            <g
              fill="#D0D0D0"
              stroke={theme.palette.primary.main}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              <circle cx="12" cy="10" r="3" />
            </g>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(Map);
