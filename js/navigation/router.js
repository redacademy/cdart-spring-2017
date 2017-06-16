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
import SingleForm from '../scenes/SingleForm';
import Procedures from '../scenes/Procedures';
import Onboarding from '../scenes/Onboarding';
import ChecklistsPage from '../scenes/ChecklistsPage';
import SingleIncident from '../scenes/IncidentCommand/IncidentContainer';
import AnimalFlow from '../scenes/AnimalRescue';
import Reception from '../scenes/ReceptionCentre';
import NewProfile from '../scenes/NewProfile';
import ChecklistsPage from '../scenes/ChecklistsPage';
import SingleIncident from '../scenes/IncidentCommand/IncidentContainer';
import AnimalFlow from '../scenes/AnimalRescue';
import Reception from '../scenes/ReceptionCentre';

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
  checklistsPage: () => ChecklistsPage,
  forms: () => Forms,
  singleForm: () =>  SingleForm,
  procedures: () => Procedures,
  singleIncident: () => SingleIncident,
  animalFlow: () => AnimalFlow,
  reception: () => Reception,
  newProfile: () => NewProfile
}));

export default Router;
