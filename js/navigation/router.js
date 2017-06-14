import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from '../navigation/NavigationLayout';
import Home from '../scenes/Home';
import PetProfile from '../scenes/PetProfile';
import Updates from '../scenes/Updates';
import GetInvolved from '../scenes/GetInvolved';
import EmergencyKit from '../scenes/EmergencyKit';

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  home: () => Home,
  petProfile: () => PetProfile,
  updates: () => Updates,
  getInvolved: () => GetInvolved,
  emergencyKit: () => EmergencyKit
}));

export default Router;
