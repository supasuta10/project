import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import FoodMenu from './Pages/FoodMenu';
import Contact from './Pages/Contact';
// import About from './Pages/About';
// import Notfound from './Pages/Notfound';
import FoodDetail from './Pages/FoodDetail';
import Date from './Pages/Date';
import SearchMenu from './Pages/SearchMenu';
import MenuSelection from './Pages/MenuSelection';
import Detail from './Pages/Detail';
import History from './Pages/History';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/date" element={<Date/>} />
        <Route path="/food" element={<FoodMenu/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="*" element={<Notfound/>} /> */}
        <Route path="/food/:id" element={<FoodDetail/>} />
        <Route path="/search-menu" element={<SearchMenu />} />
        <Route path="/MenuSelection" element={<MenuSelection />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/History" element={<History />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;