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
  };
  rightTopSide: {
    codeName: string;
    title: string;
    iconName: string;
    description: string;
  }[];
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
      { display: 'Wyloguj się', codeName: 'logout'}
    ]
  },
  rightTopSide: [
    {
      codeName: 'profit',
      title: 'Zarządzaj przychodem',
      iconName: 'attach_money',
      description: '0 zł'
    },
    {
      codeName: 'setCurrency',
      title: 'Zmień walute',
      iconName: 'euro',
      description: 'PLN'
    },
    {
      codeName: 'exportData',
      title: 'Eksportuj dane',
      iconName: 'cloud_download',
      description: 'Eksport do pliku excel'
    },
    {
      codeName: 'deleteAccount',
      title: 'Usuń konto',
      iconName: 'no_accounts',
      description: 'Nie będzie można cofnąć'
    }
  ]
}
