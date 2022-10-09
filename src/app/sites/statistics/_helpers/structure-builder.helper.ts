import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';

interface StructureBuilderModel {
  header: HeaderModel;
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'pie_chart',
    title: 'Statystyki'
  }
}