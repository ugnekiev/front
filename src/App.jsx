import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import MainCon from './Components/ec/MainCon';
import MainSup from './Components/es/MainSup';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='home' element={<Home/>}></Route>
      <Route path='consumers' element={<MainCon/>}></Route>
      <Route path='suppliers' element={<MainSup/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
