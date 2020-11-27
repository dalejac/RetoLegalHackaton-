import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {UserRole} from '../../types/user-type.type';
import {AuthStorageService} from '../storage/auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authStorage: AuthStorageService) { }

  login(email: string, password: string): Observable<boolean> {
    let role: UserRole;
    // TODO: this implementation is just for develop purposes, please delete this for production
    if (email === 'abastecimiento@porvenir.com') {
      role = UserRole.Supplier;
      this.authStorage.saveUserRole(role);
      return of(true);
    } else if (email === 'usuaria@porvenir.com'){
      role = UserRole.User;
      this.authStorage.saveUserRole(role);
      return of(true);
    }

    return of(false);
  }

  currentUserRole(): UserRole | undefined {
    return this.authStorage.getUserRole();
  }

  logout(): void {
    this.authStorage.clean();
  }
}
