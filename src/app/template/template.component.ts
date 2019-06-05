import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e) {
    console.log(e);
    console.log(e.controls['name'].status);
    console.log(e.value.name);
    console.log(this.user.name);
  }

}
