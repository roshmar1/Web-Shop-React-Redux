import React from 'react';
import {MyHeader} from './components/MyHeader';
import {MyFooter} from './components/MyFooter';
import {MyMain} from './components/MyMain';
import {} from './ts/Index'; 

function App() {
  return (   
    <div className="App">
     <MyHeader/>
     <MyMain/>
     <MyFooter/>
    </div>
  );
}

export default App;
