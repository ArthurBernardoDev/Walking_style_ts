
import { Home } from "./pages/Home";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Adidas } from "./pages/Adidas";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adidas" component={Adidas} />


        /</Switch>
    </BrowserRouter>
  );
}

export default App;
