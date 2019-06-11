import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  counter = 0;
  myInterval;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    console.log("starting interval!");
    this.myInterval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  stopGame(){
    console.log("stopping interval!");
    clearInterval(this.myInterval);
  }

}
