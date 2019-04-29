import { Component } from '@angular/core';

@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  title = 'UK Register Exposed';
}
