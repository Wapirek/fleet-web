import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';

interface StructureBuilderModel {
  header: HeaderModel;
  widgets: {
    name: string;
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
      icon: 'add'
    },
    {
      name: 'Kategorie',
      icon: 'list'
    },
    {
      name: 'Nowa kategoria',
      icon: 'add'
    }
  ]
}
