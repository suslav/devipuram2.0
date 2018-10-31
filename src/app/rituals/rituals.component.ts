import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rituals',
  templateUrl: './rituals.component.html',
  styleUrls: ['./rituals.component.scss']
})
export class RitualsComponent implements OnInit {
  templeimage:string='src/images/templecomplex.jpg'
  constructor() { }

  ngOnInit() {
  }

}
