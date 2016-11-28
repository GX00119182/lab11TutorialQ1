import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
 
@NgModule({
    declarations: [
        AppComponent,
        ...AppComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,//add routes that are defined
        RouterModule.forRoot(AppRoutes)//add routes that are defined
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
