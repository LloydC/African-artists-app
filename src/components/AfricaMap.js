import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import africa from '../assets/africa.json';

const Map = () => <VectorMap {...africa} />;

export default Map;