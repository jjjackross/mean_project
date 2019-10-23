import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week02',
  templateUrl: './week02.component.html',
  styleUrls: ['./week02.component.css']
})
export class Week02Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  e1_correctAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome1").style.display = 'inline-block';
  }

  e1_incorrectAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome2").style.display = 'inline-block';
  }

  nextEvent() {
    document.getElementById("e1_container1").style.display = 'none';
    document.getElementById("e2_container2").style.display = 'inline-block';
  }

  e2_correctAnswer() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome1").style.display = 'inline-block';
  }

  e2_incorrectAnswer() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome2").style.display = 'inline-block';
  }

}
