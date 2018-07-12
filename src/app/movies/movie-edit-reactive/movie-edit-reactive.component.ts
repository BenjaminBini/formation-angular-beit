import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-edit-reactive',
  templateUrl: './movie-edit-reactive.component.html',
  styleUrls: ['./movie-edit-reactive.component.scss']
})
export class MovieEditReactiveComponent implements OnInit {

  rf: FormGroup;
  movie: any;
  comment = {
    title: ""
  };

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<MovieEditReactiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.movie = data;
    
    this.rf = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(5), this.softLanguageValidator])]
    });
  }

  ngOnInit() {
  }

  softLanguageValidator(control: FormControl) {
    const forbidden = control.value ? control.value.replace(' ', '').includes('con') : false;
    return forbidden ? {'softLanguage': {value: control.value}} : null;
  }

}
