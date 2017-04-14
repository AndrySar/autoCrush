import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guards/index';
import {ContentComponent} from "./content/content.component";
import {PostComponent} from "./post/post.component";

const contentRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'post', component: PostComponent }
];




const appRoutes: Routes = [
    { path: '', component: ContentComponent, children: contentRoutes, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);