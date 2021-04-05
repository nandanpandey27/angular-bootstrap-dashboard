import { Injectable } from '@angular/core';
import { ApiService } from '../api-service.service';
import { User } from './models/user.interface';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private apiService: ApiService) {}

  getAllTodos(): Observable<User[]> {
    return this.apiService.get('https://jsonplaceholder.typicode.com/todos')
  }
}
