import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week11',
  templateUrl: './week11.component.html',
  styleUrls: ['./week11.component.css']
})
export class Week11Component implements OnInit {

  constructor() { }
  chess = 0
  ngOnInit() {
  }
  e1_correctAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome3").style.display = 'inline-block';
    
  }

  e1_incorrectAnswer() {
    this.chess = Math.round(Math.random() * 10)
    console.log(this.chess)
    if(this.chess < 6){
      document.getElementById("e1_prompt").style.display = 'none';
      document.getElementById("e1_buttons").style.display = 'none';
      document.getElementById("e1_outcome1").style.display = 'inline-block'; 
    }
    else{
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome4").style.display = 'inline-block';
    }
  }
  e1_incorrectAnswer2() {
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
    document.getElementById("e2_outcome2").style.display = 'inline-block';
    
  }

  e2_incorrectAnswer() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome1").style.display = 'inline-block'; 
  }
  
  e2_incorrectAnswer2() {
    document.getElementById("e2_prompt").style.display = 'none';
    document.getElementById("e2_buttons").style.display = 'none';
    document.getElementById("e2_outcome3").style.display = 'inline-block';
    
  }
  
}
