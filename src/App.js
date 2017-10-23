import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container" align="center">
      <div class="row">
        <header class="col-xs-12 text-center">
          
          <h1>Conor's Weather App</h1>
        </header>
  
        <div class="col-xs-8 col-xs-offset-2">
          <div class="text-center status">
            <p><span id="city"></span> <span id="country"></span></p>
            <p><span id="temp"></span><span class="temp" id="tempunit" ></span></p>
            <p id="desc"></p>
          </div>
  
          <div class="text-center all-icon">
            <div class="icon sun-shower hide ">
              <div class="cloud"></div>
              <div class="sun">
                <div class="rays"></div>
              </div>
              <div class="rain"></div>
            </div>
            <div class="icon thunder-storm hide thunderstom">
              <div class="cloud"></div>
              <div class="lightning">
                <div class="bolt"></div>
                <div class="bolt"></div>
              </div>
            </div>
            <div class="icon cloudy hide clouds">
              <div class="cloud"></div>
              <div class="cloud"></div>
            </div>
            <div class="icon flurries hide snow">
              <div class="cloud"></div>
              <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
              </div>
            </div>
            <div class="icon sunny hide clear">
              <div class="sun">
                <div class="rays"></div>
              </div>
            </div>
            <div class="icon rainy hide rain">
              <div class="cloud"></div>
              <div class="rain"></div>
            </div>
          </div>
  
          
        </div>
      </div>
    </div>
    );
  }
}

export default App;
