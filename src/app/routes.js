import Home from '../pages/Home';
import Content from '../pages/Content';
import Taxonomy from '../pages/Taxonomy';
import Team from '../pages/Team';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/content', element: <Content /> },
  { path: '/taxonomy', element: <Taxonomy /> },
  { path: '/team', element: <Team /> },
];

export default routes;