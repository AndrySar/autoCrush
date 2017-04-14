import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';
import { AuthGuard } from '../guards/auth.guard';
import {UserService} from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private auth: AuthGuard) {

        this.returnUrl = '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/register']);
    }

    isAuthentication() {
        return this.auth.canAuthentication();
    }

    getUser() {
        if(this.auth.canAuthentication()) {
            return JSON.parse(localStorage.getItem('currentUser')).user;
        }
    }
}
