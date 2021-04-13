import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import countries from "../assets/countries-capitals.json"

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const africanMarkers = countries.filter(country => country.ContinentName === "Africa").map(country => {return {name: country.CapitalName, coordinates: [country.CapitalLongitude, country.CapitalLatitude], markerOffset: -15}})

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap
        // projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 400
        }}
      >
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
        </Geographies>
        
        {africanMarkers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
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
    </>
  );
};

export default memo(MapChart);