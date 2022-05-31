import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image="assets/images/list2.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
