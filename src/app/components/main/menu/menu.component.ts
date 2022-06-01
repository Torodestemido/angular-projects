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
          {label: 'Home', icon: 'pi pi-fw pi-home', command: (event)=>{this.openPage(event.item)}},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar', command: (event)=>{this.openPage(event.item)}},
          {label: 'Edit', icon: 'pi pi-fw pi-pencil', command: (event)=>{this.openPage(event.item)}},
          {label: 'Documentation', icon: 'pi pi-fw pi-file', command: (event)=>{this.openPage(event.item)}},
          {label: 'Settings', icon: 'pi pi-fw pi-cog', command: (event)=>{this.openPage(event.item)}},
          {label: 'Conversor', icon: 'pi pi-fw pi-cog', command: (event)=>{this.openPage(event.item)}}
      ];

      this.activeItem = this.items[0];
  }
}
