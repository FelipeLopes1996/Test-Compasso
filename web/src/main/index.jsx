import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes";

import Head from '../shared/components/header'

import GlobalStyle from "../shared/style/globa";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Head />
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
