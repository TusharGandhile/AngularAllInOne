import { TestBed } from '@angular/core/testing';

import { BookInterceptor } from './book.interceptor';

describe('BookInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BookInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BookInterceptor = TestBed.inject(BookInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
