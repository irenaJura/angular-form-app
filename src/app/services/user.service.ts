import { Injectable } from '@angular/core';
import { User } from '../modals/user';
import { UserWritable } from '../modals/user-writable';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor(private localStorage: LocalStorageService) {}

  getUsers(): User[] | null {
    const usersJSON = this.localStorage.getData('users');
    const res = usersJSON ? JSON.parse(usersJSON) : null;
    if (res) return res;
    return null;
  }

  createUser(value: UserWritable) {
    const usersJSON = this.localStorage.getData('users');
    const res = usersJSON ? JSON.parse(usersJSON) : null;

    if (res) {
      const newUser = { ...value, id: value.id + 1 } as User;
      const newContacts = [...res, newUser];
      this.localStorage.saveData('users', JSON.stringify(newContacts));
    } else {
      this.users.push(value);
      this.localStorage.saveData('users', JSON.stringify(this.users));
    }
  }
}
