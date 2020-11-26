import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {UserRole} from '../../types/user-type.type';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private userRole?: UserRole;
  private userRoleKey = 'userRole';

  constructor(private storage: StorageService) {}

  clean(): void {
    this.userRole = null;
    this.storage.clear();
  }

  getUserRole(): UserRole | undefined {
    if (this.userRole) {
      return this.userRole;
    }

    const userString = this.storage.retrieve(this.userRoleKey);
    return userString && JSON.parse(userString);
  }

  saveUserRole(value: UserRole | undefined): void {
    this.userRole = value;
    this.storage.store(this.userRoleKey, JSON.stringify(value));
  }
}
