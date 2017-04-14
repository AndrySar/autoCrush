// import {
//     Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnDestroy, OnInit,
//     ViewChild,
//     ViewContainerRef
// } from '@angular/core';
//
// import {Car} from "../models/car";
// import {Post} from "../models/post";
// import {CarFormComponent} from "../component/carForm/carForm.component";
//
//
// @Component({
//     moduleId: module.id,
//     // template: `<div #insertPoint>
//     //       <button (click)="createDynamicComponent()">Create The Dynamic Component</button>
//     //       Inserting a new component below this.
//     //       <div id='dynCompDiv'> </div>
//     //   </div>`
//     templateUrl: 'post.component.html',
// })
//
// export class PostComponent {
//     post: Post;
//     filesToUpload: Array<File>;
//
//     constructor() {
//         this.filesToUpload = [];
//         this.post = new Post();
//         this.post.cars = [];
//         this.post.cars.push(new Car());
//     }
//
//     upload() {
//         this.makeFileRequest("http://localhost:3002/api/upload", [], this.filesToUpload).then((result) => {
//             console.log(result);
//         }, (error) => {
//             console.error(error);
//         });
//     }
//
//     fileChangeEvent(fileInput: any){
//         this.filesToUpload = <Array<File>> fileInput.target.files;
//     }
//
//     makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
//         return new Promise((resolve, reject) => {
//             var formData: any = new FormData();
//             var xhr = new XMLHttpRequest();
//             for(var i = 0; i < files.length; i++) {
//                 formData.append("upload", files[i], files[i].name);
//             }
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState == 4) {
//                     if (xhr.status == 200) {
//                         resolve(JSON.parse(xhr.response));
//                     } else {
//                         reject(xhr.response);
//                     }
//                 }
//             }
//             xhr.open("POST", url, true);
//             xhr.send(formData);
//         });
//     }
//
//
//     addCar() {
//         this.post.cars.push(new Car());
//     }
//
//     deleteCar(id: number) {
//         this.post.cars.splice(id, 1);
//     }
//
//     submit() {
//         console.log("submit");
//         for (let car of this.post.cars) {
//            console.log(car);
//         }
//     }
//
//
// }
//
//
//
//
// //
// // import {Component} from "@angular/core";
// // import {Post} from "../models/post";
// // @Component({
// //     moduleId: module.id,
// //     selector: 'my-app',
// //     templateUrl: 'post.component.html'
// // })
// // export class PostComponent {
// //     generation = 0;
// //     list: Post[] = [];
// //     post: Post[] = [];
// //     flag: boolean = false;
// //
// //     constructor() {
// //         for (var i = 0; i < 1; i++) {
// //             this.addItem(false);
// //         }
// //     }
// //
// //
// //     whatch() {
// //         for(let el of this.list){
// //             console.log(el);
// //         }
// //     }
// //
// //     addItem(updateGeneration: boolean) {
// //         // if (updateGeneration) {
// //         //     this.generation++;
// //         // }
// //         // this.list.splice(this._randomIndex(), 0, {
// //         //     'date': this._randomLetter(),
// //         //     'country': this._randomNumber(),
// //         //     'address': this.generation,
// //         // });
// //
// //         this.list.splice(this.list.length, 1, new Post());
// //         this.list.splice(this.list.length, 1, new Post());
// //         this.remove(this.list.length - 1);
// //     }
// //
// //     move(idx: number, step: number) {
// //         this.generation++;
// //         var tmp = this.list[idx];
// //         // tmp.generation = this.generation;
// //         this.list[idx] = this.list[idx - step];
// //         this.list[idx - step] = tmp;
// //         // this.list[idx].generation = this.generation;
// //     }
// //
// //     remove(idx: number) {
// //         this.generation++;
// //         this.list.splice(idx, 1);
// //     }
// //
// //     _randomIndex(): number {
// //         return Math.floor(Math.random() * this.list.length);
// //     }
// //
// //     _randomLetter(): string {
// //         return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'][this._randomNumber()];
// //     }
// //
// //     _randomNumber(): number {
// //         return Math.floor(Math.random() * 10);
// //     }
// // }
//
//
//
//
// // template: `
// //     <form #f="ngForm">
// //         <div>
// //         <p>This example maintains a list of randomly generated letters and numbers.
// //             They can be added, removed, or reordered. Each item also displays a generation
// //             counter, which updates when the list changes in any way, allowing Angular's
// //             updates to the DOM to be visualized.</p>
// //         <ul>
// //             <li *ngFor="let el of list; let idx = index">
// //                 i{{idx}}, g:{{el.country}} - {{el.address}}
// //                 <input [(ngModel)]="el.country" name="country">
// //                 <button *ngIf="idx > 0" (click)="move(idx, 1)">Up</button>
// //                 <button *ngIf="idx < list.length - 1" (click)="move(idx, -1)">Down</button>
// //                 <button (click)="remove(idx)">Remove</button>
// //                 <button (click)="addItem(true)">Add Item in Random Position</button>
// //
// //
// //             </li>
// //         </ul>
// //             <button (click)="whatch()">See</button>
// //     </div>
// //     </form>
// // `


import {Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {Post} from "../models/post";
import {Car} from "../models/car";
import { PostService } from "../services/index";
import random = require("core-js/fn/number/random");
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {
    public uploader:FileUploader = new FileUploader({url:'http://localhost:3002/api/upload'});
    post: Post;
    posts: any[] = [];

    hello() {

        // this.uploader.uploadAll();
        console.log("Hello");
    }

    constructor(private router: Router,
                private postService: PostService) {
        this.post = new Post();
        this.post.cars = [];
        this.post.cars.push(new Car());

    }

    ngOnInit() {
        this.loadPosts();
    }


    private loadPosts() {
        this.postService.getAll().subscribe( data => { this.posts = data;},
            error => {
                console.log(error);
            });



    }

    addCar() {
        this.post.cars.push(new Car());
    }

    deleteCar(id: number) {
        this.post.cars.splice(id, 1);
    }

    submit() {
        console.log("submit");
        let urls: Array<string> = [];

        for(let img of this.uploader.queue) {
            let filename =('file-' + new Date().valueOf() + '.' + img.file.name.split('.')[img.file.name.split('.').length -1]);
            console.log(img.file.name + ' : ' + filename);
            img.file.name = filename;
            urls.push(filename);
        }
        this.post.urls = urls;

        this.postService.create(this.post)
            .subscribe(
                data => {
                },
                error => {
                    console.log(error);
                });

        this.uploader.uploadAll();
        this.router.navigate(['/post']);

        console.log(this.post);
    }



}
