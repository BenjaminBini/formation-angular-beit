import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpModule } from '../../../node_modules/@angular/http';
import { MovieMockService } from './movie.service.mock';
import { of } from '../../../node_modules/rxjs';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: MovieService,
          useValue: new MovieMockService()
        }
      ]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
