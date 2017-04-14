import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';
import { AuthGuard } from '../guards/auth.guard';
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'content.component.html'
})

export class ContentComponent {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private auth: AuthGuard,
        private userService: UserService) {

        this.returnUrl = '/';
    }
}
