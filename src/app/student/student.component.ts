import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from './student.model';
@Component({
  selector: 'bnh-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  @Input() student!:Student;
  @Output() customEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(e?:any) : void {
    console.log(`Student ${this.student.name}`);
  }

  hidd(elem:any){
    elem.hidden= !elem.hidden;
  }

}
