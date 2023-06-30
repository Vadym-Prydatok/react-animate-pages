import './App.css';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FC } from 'react';
import { Contacts } from './pages/Contacts';

const App: FC = () => {
  const location = useLocation()

  return (
    <div>
      <header>
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
        </ul>
      </header>

      <main>
        <SwitchTransition>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </main>
    </div>
  );
}

export default App;
