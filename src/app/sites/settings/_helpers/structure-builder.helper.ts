import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { faCircleUser, IconDefinition } from '@fortawesome/free-regular-svg-icons';

interface StructureBuilderModel {
  header: HeaderModel;
  leftSide: {
    user: {
      logo: IconDefinition;
      name: string;
    };
    buttons: string[]
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
    buttons: ['Zmień hasło', 'Zmień nazwę', 'Usuń konto', 'Wyloguj się']
  }
}
