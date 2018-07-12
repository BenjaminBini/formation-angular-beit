import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesComponent } from './movies.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { HttpModule } from '@angular/http';
import { MovieMockService } from './movie.service.mock';
import { MovieService } from './movie.service';
import { of } from 'rxjs';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent, CardComponent ],
      imports: [ CoreModule, SharedModule, RouterTestingModule, HttpModule ],
      providers: [{
        provide: MovieService,
        /*
        useValue: {
          getAll : function(){
            return of([]);
         }
        }*/
        useValue: new MovieMockService()
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
