import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from '../navigation/NavigationLayout';
import Home from '../scenes/Home';
import PetProfile from '../scenes/PetProfile';
import Updates from '../scenes/Updates';
import GetInvolved from '../scenes/GetInvolved';
import EmergencyKit from '../scenes/EmergencyKit';
import GetInvolvedInfo from '../scenes/GetInvolvedInfo';
import Checklists from '../scenes/Checklists';
import Forms from '../scenes/Forms';
import Procedures from '../scenes/Procedures';
<<<<<<< HEAD
import Onboarding from '../scenes/Onboarding';
=======
import NewProfile from '../scenes/NewProfile';
>>>>>>> Add routing and navigation helper for pet profile form.

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  onboarding: () => Onboarding,
  home: () => Home,
  petProfile: () => PetProfile,
  updates: () => Updates,
  getInvolved: () => GetInvolved,
  emergencyKit: () => EmergencyKit,
  getInvolvedInfo: () => GetInvolvedInfo,
  checklists: () => Checklists,
  forms: () => Forms,
  procedures: () => Procedures,
  newProfile: () => NewProfile
}));

export default Router;
