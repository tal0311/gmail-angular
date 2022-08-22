import { TestBed } from '@angular/core/testing';

import { MailResolver } from './mail.resolver';

describe('MailResolver', () => {
  let resolver: MailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
