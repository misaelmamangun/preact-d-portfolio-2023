import { Router, Route } from 'preact-router'
import Home from './../pages/Main'
import About from './../pages/About'
import Contact from './../pages/Contact'
import Works from './../pages/Works'
import Work from './../pages/Work'

const route = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/works', component: Works },
  { path: '/work/:slug', component: Work },
]

export const Routes = () => {
  return (
    <>
      <Router>
        {route.map(({ path, component }) => (
          <Route path={path} component={component} key={path} />
        ))}
      </Router>
    </>
  )
}
