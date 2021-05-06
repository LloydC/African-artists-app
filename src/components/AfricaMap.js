import React, {useState} from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components'
import africa from '../assets/africa.json';

const style = { margin: '1rem auto'};

const Map = () =>{
    const [hovered, setHovered] = useState('None');
    const [focused, setFocused] = useState('None');
    const [clicked, setClicked] = useState('None');

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None'),
        onFocus: ({ target }) => setFocused(target.attributes.name.value),
        onBlur: ({ target }) => setFocused('None'),
        onClick: ({ target }) => setClicked(target.attributes.name.value),
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
    
          // When a layer is focused.
          &:focus {
            fill: #001529;
          }
    
          // When a layer is 'checked' (via checkedLayers prop).
          &[aria-checked='true'] {
            fill: rgba(56,43,168,1);
          }
    
          // When a layer is 'selected' (via currentLayers prop).
          &[aria-current='true'] {
            fill: rgba(56,43,168,0.83);
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
            <VectorMap {...africa} layerProps={layerProps} />
          </Map>
          <hr />
          <p>Hovered: {hovered && <code>{hovered}</code>}</p>
          <p>Focused: {focused && <code>{focused}</code>}</p>
          <p>Clicked: {clicked && <code>{clicked}</code>}</p>
        </div>
      );
} 

export default Map;