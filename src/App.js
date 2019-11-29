import React from 'react';

import {CalendarState} from './context/CalendarState';
import {Datepicker} from './components/Datepicker/Datepicker';
import './App.css';

function App() {
  return (
    <CalendarState>
      <Datepicker />
    </CalendarState>

  );
}

export default App;