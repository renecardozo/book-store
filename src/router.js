import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Books from './components/pages/books/Books';
import About from './components/pages/about/About';
import Pricing from './components/pages/pricing/Pricing';


const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Books}/>
      <Route path='/pricing' component={Pricing}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Router