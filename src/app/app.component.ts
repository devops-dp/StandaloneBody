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
  srchTxt:string = "";
  constructor(private router: Router){

  }
  @HostListener('window:srch', ['$event'])
    testListener(event) {
      console.log(event.detail.data);
      this.srchTxt = event.detail.data;
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
