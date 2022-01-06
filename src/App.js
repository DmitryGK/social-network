import React from 'react'
import './App.css';
import logo from './Pictures/Logo.png'
import pic from './Pictures/wp.jpg'

const App = () => {
  return (
      <div className='app-wrapper'>
          <header className='header'>
                <img src={logo} alt={logo}/>
          </header>
          <nav className='nav'>
              <div>
                  <a>Profile</a>
              </div>
              <div>
                  <a>Messages</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>

          </nav>
          <div className='content'>
              <div ><img className='image' src={pic} alt={pic}/></div>
              <div>
                  Ava + description
              </div>
              <div>
                  My posts
                  <div>
                      New post
                  </div>
                  <div>
                      <div>
                          post 1
                      </div>
                      <div>
                          post 2
                      </div>
                  </div>
              </div>
          </div>

      </div>

  );
}

export default App;
