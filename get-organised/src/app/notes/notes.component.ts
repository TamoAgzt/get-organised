import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    // console.log(f.value);
  }
}
