import React, { useState } from 'react';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import facebookLogo from './images/icon-facebook.svg';
import twitterLogo from './images/icon-twitter.svg';
import instagramLogo from './images/icon-instagram.svg';
import youtubeLogo from './images/icon-youtube.svg';
import down from './images/icon-down.svg';
import up from './images/icon-up.svg';

import { Body } from './styles/styles';

function App() {
  const [theme, setTheme] = useState({ mode: 'dark' });

  const toggleTheme = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  };

  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header toggleTheme={toggleTheme} />
      </header>
      <Body>
        <div className="social-dashboard">
          <div className="facebook-main">
            <div className="social">
              <img src={facebookLogo} alt="Facebook" />
              <p>@hermeshcg1</p>
            </div>

            <div className="followers">
              <strong>1987</strong>
              <span>F O L L O W E R S</span>
            </div>

            <div className="updown">
              <img src={up} alt="Up" />
              <p>12 today</p>
            </div>
          </div>

          <div className="twitter-main">
            <div className="social">
              <img src={twitterLogo} alt="Facebook" />
              <p>@hermeshcg1</p>
            </div>

            <div className="followers">
              <strong>1044</strong>
              <span>F O L L O W E R S</span>
            </div>

            <div className="updown">
              <img src={up} alt="Up" />
              <p>99 today</p>
            </div>
          </div>

          <div className="instagram-main">
            <div className="social">
              <img src={instagramLogo} alt="Facebook" />
              <p>@hermeshcg1</p>
            </div>

            <div className="followers">
              <strong>11k</strong>
              <span>F O L L O W E R S</span>
            </div>

            <div className="updown">
              <img src={up} alt="Up" />
              <p>1099 today</p>
            </div>
          </div>

          <div className="youtube-main">
            <div className="social">
              <img src={youtubeLogo} alt="Facebook" />
              <p>@hermeshcg1</p>
            </div>

            <div className="followers">
              <strong>8239</strong>
              <span>F O L L O W E R S</span>
            </div>

            <div className="updown">
              <img src={down} alt="down" />
              <p>144 today</p>
            </div>
          </div>
        </div>

        <h1>Overview - Today</h1>

        <div className="overview">
          <div className="overview-card">
            <div className="upper">
              <p>Page Views</p>
              <img src={facebookLogo} alt="Facebook" />
            </div>
            <div className="lower">
              <strong>87</strong>
              <div className="porcentage">
                <img src={up} alt="" />
                <p className="text-green">3%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Likes</p>
              <img src={facebookLogo} alt="Facebook" />
            </div>
            <div className="lower">
              <strong>52</strong>
              <div className="porcentage">
                <img src={down} alt="" />
                <p className="text-red">2%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Likes</p>
              <img src={instagramLogo} alt="Instagram" />
            </div>
            <div className="lower">
              <strong>5462</strong>
              <div className="porcentage">
                <img src={up} alt="" />
                <p className="text-green">2257%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Profile Views</p>
              <img src={instagramLogo} alt="Instagram" />
            </div>
            <div className="lower">
              <strong>52k</strong>
              <div className="porcentage">
                <img src={up} alt="" />
                <p className="text-green">1375%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Retweets</p>
              <img src={twitterLogo} alt="Twitter" />
            </div>
            <div className="lower">
              <strong>117</strong>
              <div className="porcentage">
                <img src={up} alt="" />
                <p className="text-green">303%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Likes</p>
              <img src={twitterLogo} alt="Twitter" />
            </div>
            <div className="lower">
              <strong>87</strong>
              <div className="porcentage">
                <img src={up} alt="" />
                <p className="text-green">553%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Likes</p>
              <img src={youtubeLogo} alt="Youtube" />
            </div>
            <div className="lower">
              <strong>107</strong>
              <div className="porcentage">
                <img src={down} alt="" />
                <p className="text-red">19%</p>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <div className="upper">
              <p>Page Views</p>
              <img src={youtubeLogo} alt="Youtube" />
            </div>
            <div className="lower">
              <strong>1407</strong>
              <div className="porcentage">
                <img src={down} alt="" />
                <p className="text-red">12%</p>
              </div>
            </div>
          </div>
        </div>
      </Body>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
