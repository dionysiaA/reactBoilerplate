import React, { Component } from 'react';

//load components
import {CircleButton, Heart} from './components/circleButton';

const App = () => (
  <div>
    <CircleButton name="React" color='blue' />
    <CircleButton name="React" color='pink' />
    <CircleButton name="React" color='orange' />
    <Heart name='React'/>
  </div>
);

export default App;