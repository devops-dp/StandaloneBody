import { Component,Injectable, HostListener,HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@HostBinding()
export class HeaderEventListener {
    constructor(private router: Router){

    }
     @HostListener('window:routing', ['$event'])
     doRoute(event){
        var data = event.detail;
        this.router.navigate(data.url);
     }
}