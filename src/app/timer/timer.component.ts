import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PomodoroProfile } from 'src/interfaces/PomodoroProfile';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() chosenProfile!: PomodoroProfile;

  secondsRemaining!: number;
  displayedTime!: string;
  timerOn = false;
  timer!: number;

  constructor() { }

  ngOnInit(): void {
    this.secondsRemaining = this.chosenProfile.mins * 60;
    this.setDisplayedTime();
  }

  ngOnChanges() {
    // reinitialise the timer when given input changes
    this.ngOnInit();
    this.stopTimer();
  }

  setDisplayedTime() {
    const mins = Math.floor(this.secondsRemaining / 60);
    this.displayedTime = `${mins}:${String(this.secondsRemaining % 60).padStart(2, '0')}`;
  }

  toggleTimer() {
    this.timerOn = !this.timerOn;
    if (this.timerOn) {
      this.timer = window.setInterval(() => {
        this.tick()
      }, 1000);
    } else {
      clearInterval(this.timer)
    }
  }

  stopTimer() {
    this.timerOn = false;
    clearInterval(this.timer);
  }

  tick() {
    this.secondsRemaining -= 1;
    this.setDisplayedTime();
  }

}
