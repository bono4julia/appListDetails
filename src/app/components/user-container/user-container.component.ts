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

  constructor() {}

}
