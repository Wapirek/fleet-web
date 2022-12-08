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

export const StructureBuilderArray: StructureBuilderModel = {
  header: {
    icon: 'pie_chart',
    titleName: ['Statystyki']
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
