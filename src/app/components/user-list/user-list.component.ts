import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() items: User[]; 
  @Output() setItem = new EventEmitter<User>();              //тип

  constructor() { }

  onSelectItem(item: User) {
    this.setItem.emit(item);
            // Сообщить
  }

}
