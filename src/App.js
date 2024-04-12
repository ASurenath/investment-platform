import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './CommonComponents/Home';
import InnovatorAuth from './Innovator/Innovator_Auth/InnovatorAuth';
import InnovatorProjects from './Innovator/InnovatorProjects/InnovatorProjects';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Innovator */}
      <Route path='/innovator-auth' element={<InnovatorAuth/>}></Route>
      <Route path='/innovator/projects' element={<InnovatorProjects/>}></Route>
    </Routes>
    </>
  );
}

export default App;
