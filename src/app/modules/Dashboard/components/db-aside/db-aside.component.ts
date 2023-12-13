import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-db-aside',
  templateUrl: './db-aside.component.html',
  styleUrls: ['./db-aside.component.css']
})
export class DbAsideComponent {

  @Input() url: string = ""

}
