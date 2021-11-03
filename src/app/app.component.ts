import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'bnh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Welcome to UA';
  students: Student[]=[
     {
      name:"Deku",
      isHero: true,
      class: "1 A",
    },
    {
      name:"Uraraka",
      isHero: true,
      class: "1 A",
    },
    {
      name:"Lemillion",
      isHero: true,
      class: "1 B",
    },
    {
      name:"Eri",
      isHero: false,
    }
  ]

}
