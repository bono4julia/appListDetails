import { Component, OnInit } from '@angular/core';
import { users } from '../../data/users';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent {
  users: User[] = users;
  selectedUser: User = null;

  constructor() {}

  // Чтобы знать, какой метод установил (кто вызвыл)
  setSelectedUser(user: User) {
    this.selectedUser = user;
    console.log(user);
  }

  clearSelectedUser() {
    this.selectedUser = null;
  }

  addNewUser(user: User) {
    this.users.push(user);
  }
}
