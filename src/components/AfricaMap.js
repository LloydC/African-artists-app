import React, {useState} from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components'
import africa from '../assets/africa.json';

const style = { margin: '4rem auto'};

const findCountryId = (name) => {
  const country= africa.layers.find(country => country.name === name );
  console.log('country', country)
  return country.id;
}

const Map = ({ hovered, setHovered, focused, setFocused, clicked, setClicked}) =>{
    const [countryHovered, setCountryHovered] = useState(hovered);
    // const [countryFocused, setCountryFocused] = useState(focused);
    const [countryClicked, setCountryClicked] = useState(clicked);

    const countryId =countryClicked !== 'None' ? findCountryId(countryClicked) : '';
    console.log(countryId)

    const layerProps = {
        // onBlur: ({ target }) => {setFocused('None'); setCountryFocused('None')},
        onClick: ({ target }) => {setClicked(target.attributes.name.value); setCountryClicked(target.attributes.name.value)},
        onMouseEnter: ({ target }) => {setHovered(target.attributes.name.value);setCountryHovered(target.attributes.name.value)},
        onMouseLeave: ({ target }) => {setHovered('None');setCountryHovered('None')},
        // onFocus: ({ target }) => {setFocused(target.attributes.name.value); setCountryFocused(target.attributes.name.value)},
      };
    
      const Map = styled.div`
      margin: 1rem auto;
    
      svg {
        stroke: #fff;
    
        // All layers are just path elements
        path {
          fill: #1890ff;
          cursor: pointer;
          outline: none;
    
          // When a layer is hovered
          &:hover {
            fill: #001529;
          }
    
         
          &:focus {
            fill: #001529;
          }
    
          // When a layer is 'checked' (via checkedLayers prop).
          &[aria-checked='true'] {
            fill: rgba(0,21,41,1);
          }
    
          // When a layer is 'selected' (via currentLayers prop).
          &[aria-current='true'] {
            fill: #001529;
          }
    
          // You can also highlight a specific layer via it's id
          &[id="nz-can"] {
            fill: rgba(56,43,168,0.6);
          }
        }
      }
    `;

    return (
        <div style={style}>
          <Map>
            <VectorMap {...africa} layerProps={layerProps} checkedLayers={countryId}/>
          </Map>

          <p>Hovered: {countryHovered && <code>{countryHovered}</code>}</p>
          {/* <p>Clicked: {countryClicked && <code>{countryClicked}</code>}</p> */}
        </div>
      );
} 

export default Map;