import { Router, Route } from "preact-router";
import Home from "src/pages/Home";
import About from "src/pages/About";
import Contact from "src/pages/Contact";
import Works from "src/pages/Works";
import Work from "src/pages/Work";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/works", component: Works },
  { path: "/work/:slug", component: Work },
];

export const Routes = () => {
  return (
    <>
      <Router>
        {routes.map(({ path, component }) => (
          <Route path={path} component={component} key={path} />
        ))}
      </Router>
    </>
  );
};
