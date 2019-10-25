import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week09',
  templateUrl: './week09.component.html',
  styleUrls: ['./week09.component.css']
})
export class Week09Component implements OnInit {

  constructor() { }
  prayer = 0
  
  ngOnInit() {
  }
  e1_correctAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome2").style.display = 'inline-block';
  }

  e1_incorrectAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome3").style.display = 'inline-block';
    this.prayer ++
    console.log(this.prayer)
  }
  e1_incorrectAnswer2() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome1").style.display = 'inline-block';
  }

  nextEvent() {
    document.getElementById("e1_container1").style.display = 'none';
    document.getElementById("e2_container2").style.display = 'inline-block';
  }

  e2_correctAnswer() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome2").style.display = 'inline-block';
    this.prayer = 0
  }

  e2_incorrectAnswer() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    if(this.prayer > 0){
      document.getElementById("e2_outcome4").style.display = 'inline-block';
      this.prayer = 0
    }
    else{
    document.getElementById("e2_outcome1").style.display = 'inline-block';
    this.prayer = 0
  }
  }
  e2_incorrectAnswer2() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome3").style.display = 'inline-block';
    this.prayer = 0
  }


}
