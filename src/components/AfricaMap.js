import React, {useState} from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
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

    return (
        <div style={style}>
          <VectorMap {...africa} layerProps={layerProps} />
          <hr />
          <p>Hovered: {hovered && <code>{hovered}</code>}</p>
          <p>Focused: {focused && <code>{focused}</code>}</p>
          <p>Clicked: {clicked && <code>{clicked}</code>}</p>
        </div>
      );
} 

export default Map;