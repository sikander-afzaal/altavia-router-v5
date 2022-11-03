import "./App.css";

import { Route, Switch } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import Stake from "./pages/Stake/Stake";
import Menu from "./pages/Menu/Menu";
import Connect from "./pages/Connect/Connect";
import LockStaking from "./pages/LockStaking/LockStaking";
import Admin from "./pages/Admin/Admin";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/stake"}>
          <Stake />
        </Route>
        <Route path={"/menu"}>
          <Menu />
        </Route>
        <Route path={"/connect"}>
          <Connect />
        </Route>
        <Route path={"/lock"}>
          <LockStaking />
        </Route>
        <Route path={"/admin"}>
          <Admin />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/faq"}>
          <Faq />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
