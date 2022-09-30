import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import MainCon from './Components/ec/Main';
import MainSup from './Components/es/Main';
import MainBil from './Components/bill/Main';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/consumers' element={<MainCon/>}></Route>
      <Route path='/suppliers' element={<MainSup/>}></Route>
      <Route path='/bills' element={<MainBil/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
