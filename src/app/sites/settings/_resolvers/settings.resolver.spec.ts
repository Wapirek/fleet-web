import { TestBed } from '@angular/core/testing';

import { SettingsResolver } from 'src/app/sites/settings/_resolvers/settings.resolver';

describe('MainResolver', () => {
  let resolver: SettingsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SettingsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
