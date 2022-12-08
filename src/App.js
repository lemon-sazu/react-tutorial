import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Page404 } from './pages/404';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export const AppContext = createContext();

function App() {
  const [name, setName] = useState('Sazu');
  return (
    <div>
      <AppContext.Provider value={{ name, setName }}>
        <BrowserRouter>
          <div className="app">
            <div>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div >
  );
}



export default App;
