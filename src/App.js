import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './CommonComponents/Home';
import InnovatorAuth from './Innovator/Innovator_Auth/InnovatorAuth';
import InnovatorProfile from './Innovator/Innovator_Auth/InnovatorProfile/InnovatorProfile';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>


      {/* Innovator */}
      <Route path='/innovator-auth' element={<InnovatorAuth/>}></Route>
      <Route path='/innovator-profile' element={<InnovatorProfile/>}></Route>
    </Routes>
    </>
  );
}

export default App;
