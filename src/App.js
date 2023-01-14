import './App.css';
import Navbar from './component/navbar';
import Home from './pages/home'; 
import Notfound from './pages/notfound';
import Bookmarks from './pages/bookmarks';
import Addmeeting from './component/Addmeeting'
import Allmeeting from './pages/Allmeeting'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='*'  element={<Notfound/>} />
        <Route path='/bookmarks'  element={<Bookmarks/>} />
        <Route path='/addmeeting'  element={<Addmeeting/>} />
        <Route path='/allMeeting'  element={<Allmeeting/>} />
      </Routes>
    </div>
  );
}

export default App;
