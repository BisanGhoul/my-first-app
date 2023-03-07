import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//the only thing that appears when u inspect the page in the browser 
  //it's like our own html tage and it will be replaced with the code in app.component.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bisan\'s app ';
}
