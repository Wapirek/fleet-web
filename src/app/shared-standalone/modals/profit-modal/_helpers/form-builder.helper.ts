import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { PricePatternHelper } from 'src/app/shared/helpers/price-pattern.helper';
import { CreateTomorrowTimeHelper } from 'src/app/shared-standalone/modals/profit-modal/_helpers/create-tomorrow-time.helper';

export const FormBuilderHelper = (fb: FormBuilder, item: ProfitModel | null): FormGroup => fb.group({
  source: [
    item?.source ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  charge: [
    item?.charge ?? 0,
    Validators.compose([
      Validators.required,
      Validators.min(0.01),
      Validators.pattern(PricePatternHelper)
    ])
  ],
  periodicityDay: [
    item?.periodicityDay ?? 1,
    Validators.compose([
      Validators.required,
      Validators.min(1),
      Validators.max(366)
    ])
  ],
  nextCashFlow: [
    item?.nextCashFlow ?? CreateTomorrowTimeHelper(),
    Validators.compose([Validators.required])
  ],
});
