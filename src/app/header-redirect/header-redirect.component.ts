import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDatepicker } from '@angular/material';
@Component({
  selector: 'app-header-redirect',
  templateUrl: './header-redirect.component.html',
  styleUrls: ['./header-redirect.component.scss']
})
export class HeaderRedirectComponent implements OnInit {
  @ViewChild(MdDatepicker)
  remind:MdDatepicker<Date>;
  save:boolean = false;
  constructor() { 
  }

  ngOnInit() {
  }

  clearDate(ele){
    ele.value='';
    this.remind._selected.setTime(0);
  }

  saveData(val: string){
    window.dispatchEvent(new CustomEvent('save', {detail: {uname: val}}));
  }
}
