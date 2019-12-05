
import loadable from 'utils/loadable'

import Loading from "components/Loading";
import MicroComp from 'components/MicroComp';
export default [
  {
    component: () => <MicroComp />,
    path: "/child",
    exact: false,
  },
  {
    component: loadable(() => import('./pages/Home/index'), Loading),
    path: "/",
    exact: true,
  }, {
    component: loadable(() => import('./pages/Home1/index'), Loading),
    path: "/home",
    exact: true,
  }
];
