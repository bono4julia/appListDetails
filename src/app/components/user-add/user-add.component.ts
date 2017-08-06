import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  @Output() addUser = new EventEmitter<User>();
  
  user: User = null;
  myForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.user = new User();
    this.myForm = formBuilder.group({
      'name': [this.user.name, [Validators.required]],
      'surname': [this.user.surname, [Validators.required]],
      'adress': [this.user.adress]
    });

    this.myForm.valueChanges.subscribe((value)=>{
      this.user.name = value.name;
      this.user.surname = value.surname;
      this.user.adress = value.adress;
    });
  }

  addNewUser() {
    this.isSubmitted = true;

    if(this.myForm.invalid) {
      return;
    }

    this.addUser.emit(this.user);
    this.user = new User();
    this.myForm.reset(this.user);

    this.isSubmitted = false;
  }
}
