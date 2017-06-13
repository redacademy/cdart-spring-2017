import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from '../navigation/NavigationLayout';
import Home from '../scenes/Home';
import PetProfile from '../scenes/PetProfile';
import Updates from '../scenes/Updates';
import GetInvolved from '../scenes/GetInvolved';

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  home: () => Home,
  petProfile: () => PetProfile,
  updates: () => Updates,
  getInvolved: () => GetInvolved
}));

export default Router;