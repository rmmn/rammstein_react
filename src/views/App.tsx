import '../assets/less/style.less';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Home';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import MobileHeader from '../components/MobileHeader';
import logo from '../assets/img/logo-light.png'
import SearchForm from '../components/SearchForm';

function App() {
  return (
    <Router>
      <Header logoSrc={logo} items={
        new Array(6).fill(null).map((_, index) => {
          const key = index + 1;
          return <MenuItem url='/' icon='home' text='home' isActive={false} key={key} />
        })
      } />

      <MobileHeader logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:id" element={<Home test='test' />} />
      </Routes>

      <footer className="footer">
        <div className="container footer-container">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>

          <div className="search-container-footer">
            <SearchForm />
          </div>

          <nav className="footer-nav" role="navigation">
            <ul>
              <li>
                <a href="#" className="nav-link active"><i className="icon home"></i> Главная</a>
              </li>
              <li>
                <a href="#" className="nav-link"><i className="icon home"></i> Главная</a>
              </li>
              <li>
                <a href="#" className="nav-link"><i className="icon home"></i> Главная</a>
              </li>
              <li>
                <a href="#" className="nav-link"><i className="icon home"></i> Главная</a>
              </li>
              <li>
                <a href="#" className="nav-link"><i className="icon home"></i> Главная</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Router>
  );
}

export default App;
