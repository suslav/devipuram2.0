import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {
  templeimage:string='src/images/templecomplex.jpg'
  constructor() { }

  ngOnInit() {
  }

}
