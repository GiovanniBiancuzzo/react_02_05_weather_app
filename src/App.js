import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import HistoryComponent from './components/HistoryComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/history' element={<HistoryComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
