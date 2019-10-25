import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week10',
  templateUrl: './week10.component.html',
  styleUrls: ['./week10.component.css']
})
export class Week10Component implements OnInit {

  constructor() { }
  project = 0
  ngOnInit() {
  }
  e1_correctAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome2").style.display = 'inline-block';
    this.project--
  }

  e1_incorrectAnswer() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome3").style.display = 'inline-block';
    
  }
  e1_incorrectAnswer2() {
    document.getElementById("e1_prompt").style.display = 'none';
    document.getElementById("e1_buttons").style.display = 'none';
    document.getElementById("e1_outcome1").style.display = 'inline-block';
    this.project ++
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
  present(){
    if(this.project > 0){
      document.getElementById("e2_prompt").style.display = 'none';
      document.getElementById("e2_buttons").style.display = 'none';
      document.getElementById("e2_outcome1").style.display = 'inline-block';
    }
    if(this.project == 0){
      document.getElementById("e2_prompt").style.display = 'none';
      document.getElementById("e2_buttons").style.display = 'none';
      document.getElementById("e2_outcome2").style.display = 'inline-block';
    }
    if(this.project < 0){
      document.getElementById("e2_prompt").style.display = 'none';
      document.getElementById("e2_buttons").style.display = 'none';
      document.getElementById("e2_outcome3").style.display = 'inline-block';
    }
  }
}
