import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroupNew = new FormGroup({
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })
 
  constructor() { }

  ngOnInit(): void {
  }

}
