import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { faCircleUser, IconDefinition } from '@fortawesome/free-regular-svg-icons';

interface StructureBuilderModel {
  header: HeaderModel;
  leftSide: {
    user: {
      logo: IconDefinition;
      name: string;
    };
    buttons: {
      display: string;
      codeName: string;
    }[];
  }
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'tune',
    title: 'Ustawienia'
  },
  leftSide: {
    user: {
      logo: faCircleUser,
      name: ''
    },
    buttons: [
      { display: 'Zmień hasło', codeName: 'changePassword'},
      { display: 'Zmień nazwę', codeName: 'changeName' },
      { display: 'Zmień avatar', codeName: 'changeAvatar' },
      { display: 'Usuń konto', codeName: 'removeAccount' },
      { display: 'Wyloguj się', codeName: 'logout'}
    ]
  }
}
