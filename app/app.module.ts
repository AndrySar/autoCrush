import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService, PostService } from './services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HeaderComponent } from './header/index';
import { MenuComponent } from './menu/index'
import { ContentComponent } from './content/index';
import { RightFieldComponent } from './right_field/index'
import { PostComponent } from './post/index';
import {CarFormComponent} from "./component/carForm/carForm.component";
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FileUploadModule,
        // AddressAutocompleteComponent,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        MenuComponent,
        ContentComponent,
        RightFieldComponent,
        PostComponent,
        CarFormComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        PostService,


        // providers used to create fake backend
        MockBackend,
        BaseRequestOptions
    ],
    entryComponents: [CarFormComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }