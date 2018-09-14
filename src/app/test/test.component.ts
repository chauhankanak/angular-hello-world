import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      Hello {{name}}
  `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  public name: String = 'Abhijeet';
  constructor() { }

  ngOnInit() {
  }

}
