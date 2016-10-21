import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Material2 imports
import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemsService } from './menu-items.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot()
  ],
  providers: [MenuItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
