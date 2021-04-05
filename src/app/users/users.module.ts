import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { UsersListComponent } from './containers/users-list.component';
import {UserListTableComponent} from './components/user-list-table.component';

@NgModule({
  providers: [
    UsersService
  ],
  declarations: [
    UsersListComponent,
    UserListTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule {}
