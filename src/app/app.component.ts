import { Component } from '@angular/core';
import { PomodoroProfile } from 'src/interfaces/PomodoroProfile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jomodoro';
  pomodoroProfiles: PomodoroProfile[] = [
    { name: "Work", color: "#0E1C36", mins: 25 },
    { name: "Play", color: "#0E1C36", mins: 10 },
    { name: "Study", color: "#0E1C36", mins: 30 },
    { name: "Relax", color: "#0E1C36", mins: 15 },
  ];

  // done in setProfile
  chosenProfile!: PomodoroProfile;
  secondsRemaining!: number;
  displayedTime!: string;
  timerOn = false;

  constructor() {
    this.setProfile(this.pomodoroProfiles[0]);
  }

  setProfile(profile: PomodoroProfile) {
    this.chosenProfile = profile;
    this.secondsRemaining = this.chosenProfile.mins * 60;
    this.setDisplayedTime();
  }

  addProfile() {
    this.pomodoroProfiles.push({name: 'Dummy', color: '#AD5334', mins: 10});
  }

  setDisplayedTime() {
    const mins = Math.floor(this.secondsRemaining / 60);
    this.displayedTime = `${mins}:${String(this.secondsRemaining % 60).padStart(2, '0')}`;
  }

  toggleTimer() {
    this.timerOn = !this.timerOn;
    if (this.timerOn) {
      setInterval(() => {
        this.tick()
      }, 1000);
    }
  }

  tick() {
    this.secondsRemaining -= 1;
    this.setDisplayedTime();
  }
}
