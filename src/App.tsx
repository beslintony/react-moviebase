import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components';
import Footer from './components/Footer/Footer';
import UserProvider from './context';
import { GlobalStyle } from './GlobalStyle';
import { Home, Login, Movie, NotFound } from './pages';

const App: React.FC = () => (
  <Router>
    <UserProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </UserProvider>
  </Router>
);

export default App;
