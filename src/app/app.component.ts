import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atom project';

  chooseCircleName(circle_name) {
    return `circle ${circle_name}`;
  }

  chooseSquareName(square_name) {
    return `square ${square_name}`;
  }

  constructor() {}
}
