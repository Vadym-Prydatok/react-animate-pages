import './App.css';
import './animate.css';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FC, useState } from 'react';
import { Contacts } from './pages/Contacts';
import { Features } from './pages/Features';

const App: FC = () => {
  const [animate, setAnimate] = useState('slide');

  const location = useLocation()

  return (
    <div>
      <header>
        <div>
          Try another animate
          <select 
            onChange={(event) => setAnimate(event.target.value)}
            name="selectAnimate"
          >
            <option value="slide" selected>Slide</option>
            <option value="slide-down">Slide-down</option>
            <option value="fade">Fade</option>
            <option value="fade-zoom">Fade-zoom</option>
            <option value="fade-slide">Fade-slide</option>
            <option value="bounce">Bounce</option>
            <option value="zoom">Zoom</option>
            <option value="flip">Flip</option>  
            <option value="rotate-scale">Rotate-scale</option>
            <option value="rotate-x">Rotate-x</option>
            <option value="skew">Skew</option>
          </select>
        </div>
        <ul>
          <li>
            <NavLink to={'/'} >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={'/about'} >
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={'/contacts'} >
              Contacts
            </NavLink>
          </li>

          <li>
            <NavLink to={'/features'} >
              Features
            </NavLink>
          </li>
        </ul>
      </header>

      <main>
        <SwitchTransition>
          <CSSTransition
            key={location.key}
            classNames={animate}  
            timeout={300}
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/features" element={<Features />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </main>
    </div>
  );
}

export default App;
