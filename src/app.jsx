import { Router, Route } from 'preact-router';
import { routes } from 'src/routes';

export function App() {
  return (
    <Router>
      {routes.map(({ path, component }) => (
        <Route path={path} component={component} key={path} />
      ))}
    </Router>
  );
}
