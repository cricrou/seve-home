import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';

import { MenuItem } from './menu-item';
import { MENUITEMS } from './mock-menu-items';

@Injectable()
export class MenuItemsService {
  private seveHomeUrl = 'http://88.187.136.203/wordpress/';
  private menuUrl =   this.seveHomeUrl.concat('wp-json/wp-api-menus/v2/menus/');
  private menuItems: MenuItem[];
  private errorMessage: string;

  constructor(private http: Http) {
   }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get(this.menuUrl + '8').map(this.extractData).catch(this.handleError);
  }

  private extractData (res: Response):MenuItem[] {
    let body = res.json();
    console.log("Passage par mis", body, res);

    if (body && body.items) {
      return body.items;
    }
    return [];
  }

  private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
