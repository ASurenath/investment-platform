import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './CommonComponents/Home';
import InnovatorAuth from './Innovator/Innovator_Auth/InnovatorAuth';
import InnovatorProfile from './Innovator/InnovatorProfile/InnovatorProfile';
import InnovatorProfileEdit from './Innovator/InnovatorProfile/InnovatorProfileEdit';
import InnovatorProfile from './Innovator/Innovator_Auth/InnovatorProfile/InnovatorProfile';
import InnovatorProjects from './Innovator/InnovatorProjects/InnovatorProjects';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Innovator */}
      <Route path='/innovator-auth' element={<InnovatorAuth/>}></Route>
      <Route path='/innovator-profile' element={<InnovatorProfile/>}></Route>
      <Route path='/innovator-profile-edit' element={<InnovatorProfileEdit/>}></Route>
      <Route path='/innovator/projects' element={<InnovatorProjects/>}></Route>
    </Routes>
    </>
  );
}

export default App;
