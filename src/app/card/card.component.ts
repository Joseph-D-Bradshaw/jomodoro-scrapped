import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PomodoroProfile } from 'src/interfaces/PomodoroProfile';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() profile!: PomodoroProfile;
  @Output() choseProfileEvent = new EventEmitter<PomodoroProfile>();

  constructor() { }

  ngOnInit(): void {

  }

  propagateProfile() {
    this.choseProfileEvent.emit(this.profile);
  } 

}
