import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditReactiveComponent } from './movie-edit-reactive.component';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MovieEditReactiveComponent', () => {
  let component: MovieEditReactiveComponent;
  let fixture: ComponentFixture<MovieEditReactiveComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy()
  };

  const mockDialogData = {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditReactiveComponent ],
      imports: [ NoopAnimationsModule, CoreModule ],
      providers: [{
        provide: MatDialogRef, 
        useValue: mockDialogRef
      }, {
        provide: MAT_DIALOG_DATA, 
        useValue: mockDialogData
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
