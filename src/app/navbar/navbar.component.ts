import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menu-item';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private menuItems: MenuItem[] = [];
  private errorMessage: string;

  constructor(private mis: MenuItemsService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(){
    this.mis.getMenuItems().subscribe( res => { this.menuItems = res; });
  }
}
