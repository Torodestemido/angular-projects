import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }


  items: MenuItem[] = [];

  activeItem: any;

  openPage (rota:MenuItem) {

    this.router.navigate(['/' + rota.label])

  }
  

  ngOnInit() {

      this.items = [
          // {label: 'ㅤ ', icon: '', command: (event)=>{this.openPage(event.item)}},
          // {label: 'ㅤㅤㅤㅤㅤ', icon: '', command: (event)=>{this.openPage(event.item)}},
          // {label: 'ㅤㅤㅤㅤㅤ', icon: '', command: (event)=>{this.openPage(event.item)}},
          {label: 'Conversor', icon: 'pi pi-angle-double-right', command: (event)=>{this.openPage(event.item)}},
          // {label: 'ㅤㅤㅤㅤㅤ', icon: '', command: (event)=>{this.openPage(event.item)}},
          // {label: 'ㅤㅤㅤㅤㅤ', icon: '', command: (event)=>{this.openPage(event.item)}},
          // {label:  'ㅤ', icon: '', command: (event)=>{this.openPage(event.item)}}
      ];

      this.activeItem = this.items[0];
  }
}
