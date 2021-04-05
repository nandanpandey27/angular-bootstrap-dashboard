import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../models/user.interface';

@Component({
  styles: [],
  templateUrl: './user-list-table.component.html',
  selector: '<app-user-list-table></app-user-list-table>'
})
export class UserListTableComponent  implements OnChanges{
  constructor() {}

  @Input()
  users: User[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users.currentValue && changes.users.currentValue.length && changes.users.currentValue.length > 0) {
      this.users = [...changes.users.currentValue];
    }
  }
}
