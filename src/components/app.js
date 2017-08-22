import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="site">
        <main className="site-content m-t-3">
        <h1 className="m-b-2">Padrisimo Weather</h1>
        <SearchBar />
        <WeatherList />
        </main>
        <footer class="footer"><a href="https://github.com/padrisimo">padrisimo</a></footer>
      </div>
    );
  }
}
