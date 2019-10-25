import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-week03',
  templateUrl: './week03.component.html',
  styleUrls: ['./week03.component.css']
})
export class Week03Component implements OnInit {

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

  e2_correctAnswer1() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome1").style.display = 'inline-block';
  }

  e2_correctAnswer2() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome2").style.display = 'inline-block';
  }

  e2_correctAnswer3() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome3").style.display = 'inline-block';
  }

  e2_incorrectAnswer() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome4").style.display = 'inline-block';
  }

}
