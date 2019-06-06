import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  states = ['A', 'B', 'C'];

  userForm = new FormGroup({
    name: new FormControl()
  });

  teacherForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      name: ['', Validators.required],
      secretLairs: this.formBuilder.array([]),
    });
    this.setAddresses([new Address('1'), new Address('2')]);
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.formBuilder.group(address));
    const addressFormArray = this.formBuilder.array(addressFGs);
    this.teacherForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.teacherForm.get('secretLairs') as FormArray;
  }

}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
  constructor(street?: string, city?: string, state?: string, zip?: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

export class Teacher {
  id = 0;
  name = '';
  addresses: Address[];
}
