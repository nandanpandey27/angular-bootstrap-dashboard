import { Component, OnInit} from '@angular/core';
import { UsersService } from '../users.service';
import {User} from '../models/user.interface';

@Component({
  selector: '<app-user-list></app-user-list>',
  templateUrl: './users-list.component.html',
  styleUrls: [
    './users-list.component.scss'
  ]
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users: User[];

  ngOnInit() {
    this.usersService.getAllTodos()
      .subscribe((response) => {
        this.users = [...response];
      });
  }
}
