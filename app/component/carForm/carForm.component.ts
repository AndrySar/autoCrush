import {Component, Input, OnInit} from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'car_form',
    template: `<h1>My test Angular 2 Dynamic Component</h1>
        <h2>Hello World {{name}}</h2>`
})

export class CarFormComponent {
    name: string;
    constructor() {
        this.name = 'Hello World';
    }
}