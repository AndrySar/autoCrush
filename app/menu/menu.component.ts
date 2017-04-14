import { Component, OnInit } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'an_menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent {
    loading = false;
    returnUrl: string;

    constructor(
        private router: Router,
        private auth: AuthGuard) {

        this.returnUrl = '/';
    }

    isAuthentication() {
        return this.auth.canAuthentication();
    }


    go() {
        this.router.navigate(['/home']);
    }
}
