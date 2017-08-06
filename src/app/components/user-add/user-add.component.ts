import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  @Output() addUser = new EventEmitter<User>();
  
  user: User = null; 

  constructor() {
    this.user = new User();
   }

  addNewUser(form: NgForm) {
    if(form.invalid) {
      return;
    }

    this.addUser.emit(this.user);
    this.user = new User();
  }

}
