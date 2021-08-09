import { Component, Input, OnInit } from '@angular/core';
import { PomodoroProfile } from 'src/interfaces/PomodoroProfile';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() profile!: PomodoroProfile;

  constructor() { }

  ngOnInit(): void {

  }

  vibrate() {
    navigator.vibrate(200);
  }



}
