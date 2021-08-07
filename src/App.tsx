import React from 'react';
import { useState } from 'react'
import TodoList from './components/Todolist';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {

  return (
    <div>

      {/* header section */}
      <AppHeader/>

      {/* todo section */}
      <TodoList/>   
      

      {/* footer section */}
      <AppFooter/>
    </div>
  );
}

export default App;
