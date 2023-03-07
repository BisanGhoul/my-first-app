import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//1 - install it for ngModel to work
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //2 - add it to import array
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
