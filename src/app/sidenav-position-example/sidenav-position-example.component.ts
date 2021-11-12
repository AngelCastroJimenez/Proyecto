import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-position-example',
  templateUrl: './sidenav-position-example.component.html',
  styleUrls: ['./sidenav-position-example.component.css']
})
export class SidenavPositionExampleComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
