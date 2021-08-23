import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/sections/skills/Skills";
import { Projects } from "./components/sections/projects/Projects";
import { About } from "./components/sections/about/About";
import { Footer } from "./components/sections/footer/Footer";
import { Contact } from "./components/contact/Contact";
import { TopNavBar } from "./components/top-nav-bar/TopNavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./components/layout/DefaultLayout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/skills"
            children={<DefaultLayout children={<Skills />} />}
          />

          <Route
            exact
            path="/projects"
            children={<DefaultLayout children={<Projects />} />}
          />
          <Route
            exact
            path="/about"
            children={<DefaultLayout children={<About />} />}
          />

          <Route exact path="/contact">
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          </Route>

          <Route exact path="/">
            <Hero />
          </Route>
          <Route
            path="/"
            children={<DefaultLayout children={<h1>404 Page not found</h1>} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
