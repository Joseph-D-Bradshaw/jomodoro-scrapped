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
    { name: "Work", color: "#0E1C36", time: 25, selected: true },
    { name: "Play", color: "#0E1C36", time: 10, selected: false },
    { name: "Study", color: "#0E1C36", time: 30, selected: false },
    { name: "Relax", color: "#0E1C36", time: 15, selected: false },
  ];

  addProfile() {
    this.pomodoroProfiles.push({name: 'Dummy', color: '#AD5334', time: 10, selected: false});
  }
}
