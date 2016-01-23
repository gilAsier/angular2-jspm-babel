import {Component, View, Injectable} from 'angular2/core';
import {NgIf} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/hello.html"
})

export class AppComponent  {
    name: string;
    
    constructor() {
      this.name = "world";
    }
}