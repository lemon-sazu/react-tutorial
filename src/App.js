import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Page404 } from './pages/404';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Counter } from './pages/Counter';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  });
  const [name, setName] = useState('Sazu');
  return (
    <div>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <div className="app">
            <div>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/counter'>Counter</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div >
  );
}



export default App;