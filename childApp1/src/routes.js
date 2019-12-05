
import loadable from 'utils/loadable'
import Loading from "components/Loading";

export default [
  {
    component: loadable(() => import('./pages/page1'), Loading),
    path: "/",
  },
  {
    component: loadable(() => import('./pages/page1'), Loading),
    path: "/page1",
  },
  {
    component: loadable(() => import('./pages/page2'), Loading),
    path: "/page2",
  },
  {
    component: loadable(() => import('./pages/page3'), Loading),
    path: "/page3",
  },
  {
    component: loadable(() => import('./pages/page4'), Loading),
    path: "/page4",
  },
  {
    component: loadable(() => import('./pages/page5'), Loading),
    path: "/page5",
  },
];
