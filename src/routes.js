import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './page/Main';
import NewEntry from './page/NewEntry';
import Report from './page/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'history',
    },
  ),
);

export default Routes;
