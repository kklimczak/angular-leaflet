import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngl-lib',
  template: `
    <p>
      lib works!
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
