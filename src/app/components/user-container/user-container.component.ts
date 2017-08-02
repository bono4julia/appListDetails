import { Component, OnInit } from '@angular/core';
import { UsersMockDataService } from '../../mock/data/users';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent {

  users: User[] = UsersMockDataService;


  constructor() 
    {}

    ngOnInit() {
    }


}
