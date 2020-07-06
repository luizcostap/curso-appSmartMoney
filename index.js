/**
 * @format
 */
if (__DEV__) {
  import('./src/config/ReactotronConfig');
}
import {AppRegistry} from 'react-native';
import App from '././src';
import {name as appName} from './app.json';
import Main from './src/page/Main';
import BalancePanel from './src/components/BalancePanel';
import NewEntry from './src/page/NewEntry';
AppRegistry.registerComponent(appName, () => App);
