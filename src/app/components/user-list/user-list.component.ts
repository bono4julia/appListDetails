import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() users: User[];
  @Output() selectItem = new EventEmitter<User>();

  constructor() { }

  onSelectItem(user: User) {
    this.selectItem.emit(user);
  }
}
