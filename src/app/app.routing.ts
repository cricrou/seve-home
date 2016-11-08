import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    providers: []
})
export class Wpng2RoutingModule { }