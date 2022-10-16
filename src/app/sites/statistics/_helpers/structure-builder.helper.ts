import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';

interface StructureBuilderModel {
  header: HeaderModel;
  charts: {
    bar: {
      id: string;
    };
    pie: {
      id: string;
    }
  }
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'pie_chart',
    title: 'Statystyki'
  },
  charts: {
    bar: {
      id: 'statistics-bar-chart'
    },
    pie: {
      id: 'statistics-pie-chart'
    }
  }
}
