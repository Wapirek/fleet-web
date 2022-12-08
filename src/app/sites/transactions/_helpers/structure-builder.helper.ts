import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { ButtonModel } from 'src/app/shared/models/structure-html/button.model';

interface StructureBuilderModel {
  header: HeaderModel;
  widgets: ButtonModel[];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: { icon: 'payments', title: 'Transakcje' },
  widgets: [
    {
      displayName: 'Nowa transakcja',
      codeName: 'add_transaction',
      iconName: 'playlist_add',
      btnType: 'button'
    },
    {
      displayName: 'Kategorie',
      codeName: 'list_category',
      iconName: 'list',
      btnType: 'button'
    }
  ]
}
