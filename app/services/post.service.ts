import { Http, Headers, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import {Post} from "../models/post";
/**
 * Created by user on 07.04.17.
 */


@Injectable()
export class PostService {
    constructor(private http: Http) {
    }

    getAll() {
        return this.http.get('http://localhost:3002/api/post', {headers: this.jwt()}).map((response: Response) => response.json());
    }

    create(newpost: Post) {
        return this.http.post('http://localhost:3002/api/post', newpost, {headers: this.jwt()}).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers();
            headers.append('x-access-token', currentUser.token);
            headers.append('x-key', currentUser.user);
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            return headers;
        }
    }
}
