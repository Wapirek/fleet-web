import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';

export declare type CodeNameWidget = 'add_transaction' | 'list_category';

interface StructureBuilderModel {
  header: HeaderModel;
  widgets: {
    name: string;
    codeName: CodeNameWidget;
    icon: string;
  }[];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'payments',
    title: 'Transakcje'
  },
  widgets: [
    {
      name: 'Nowa transakcja',
      codeName: 'add_transaction',
      icon: 'add'
    },
    {
      name: 'Kategorie',
      codeName: 'list_category',
      icon: 'list'
    }
  ]
}
