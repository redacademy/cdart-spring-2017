import {
  AppRegistry,
} from 'react-native';
import cdart from './js';
import HomeNavigationTab from './js/components/HomeNavigationTab';

export default class cdart extends Component {
  render() {
    return (
        <Text>Hello</Text>
    );
  }
}

AppRegistry.registerComponent('cdart', () => cdart);
