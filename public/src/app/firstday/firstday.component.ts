import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstday',
  templateUrl: './firstday.component.html',
  styleUrls: ['./firstday.component.css']
})
export class FirstdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideElem() {
    document.getElementById("first").style.visibility = "hidden";
    
  }

}
