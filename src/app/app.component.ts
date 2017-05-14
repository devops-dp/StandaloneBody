import { Component, Inject, HostListener } from '@angular/core';
import { SharedService } from './app.shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router: Router){

  }
  @HostListener('window:test', ['$event'])
    testListener(event) {
      console.log(event.detail);
      this.title = event.detail.title;
    }

  getItDone(s: string){
    alert(s);
  }

  @HostListener('window:routing', ['$event'])
  doRoute(event){
      var data = event.detail;
      this.router.navigate([data.url]);
  }
}
