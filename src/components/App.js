import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import theme from './ui/theme';
import Header from './ui/Header'
import Footer from './ui/Footer'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0); // Active tab is set to first element in the list

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={() => <div style={{height: "600px"}}>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>customsoftware</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>

        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
