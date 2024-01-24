import Home from "src/views/Home";
import About from "src/views/About";
import Contact from "src/views/Contact";
import Works from "src/views/Works";
import Work from "src/views/Work";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/works", component: Works },
  { path: "/work/:slug", component: Work },
];
