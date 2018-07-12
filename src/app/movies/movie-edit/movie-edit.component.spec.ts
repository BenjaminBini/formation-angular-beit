import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditComponent } from './movie-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';

describe('MovieEditComponent', () => {
  let component: MovieEditComponent;
  let fixture: ComponentFixture<MovieEditComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy()
  };

  const mockDialogData = {}
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditComponent ],
      imports: [ NoopAnimationsModule, CoreModule, SharedModule ],
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
    fixture = TestBed.createComponent(MovieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
