import {
  AppRegistry,
} from 'react-native';
<<<<<<< .merge_file_Ov32of
import cdart from './js';
=======
import HomeNavigationTab from './js/components/HomeNavigationTab';

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StatusBar } from 'react-native';

import Router from './js/navigation/router';

export default class cdart extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <StackNavigation
          navigatorUID="root"
          initialRoute={Router.getRoute('navigation')} />
      </NavigationProvider>
    );
  }
}
>>>>>>> .merge_file_r1P9fE

AppRegistry.registerComponent('cdart', () => cdart);
