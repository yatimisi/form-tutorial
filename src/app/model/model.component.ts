import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/Operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    this.userForm.controls.name.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(
      data => console.log(data)
    );
  }

}
