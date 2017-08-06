import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-selected-user',
  templateUrl: './clear-selected-user.component.html',
  styleUrls: ['./clear-selected-user.component.css']
})
export class ClearSelectedUserComponent implements OnInit {

  @Output() clearUser = new EventEmitter<void>();

  constructor() { }

  onClickButton() {
    this.clearUser.emit(); 
  }

  ngOnInit() {
  }

}
