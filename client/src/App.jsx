import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import FeedbackForm from './pages/form/FeedbackForm';
import './App.css'

function App() {


  return (
      <Router>
        <nav className="navbar">
              <div className="navbar-brand">MyApp</div>
              <ul className="navbar-links">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/auth">Login</Link>
                  </li>
                  <li>
                      <Link to="/form">Feedback Form</Link>
                  </li>
              </ul>
          </nav>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/auth" element = {<Auth />}/>
          <Route path = "/form" element = {<FeedbackForm />} />
        </Routes>
      </Router>
  )
}

export default App
