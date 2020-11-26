import {Component, OnInit} from '@angular/core';
import {UserRole} from '../../../core/types/user-type.type';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userRoleLabel = '';
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    const currentUserRole = this.authService.currentUserRole();
    this.userRoleLabel = currentUserRole === UserRole.User ? 'Área Usuaria' : 'Área Abastecimiento'
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
