import { Component, OnInit } from '@angular/core';

export class Notes {
  title: String;
  content: String;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  ntitle: String;
  ncontent: String;
  notes: Notes[];
  makes!: Notes[];
  constructor() {
    this.ntitle = '';
    this.ncontent = '';

    this.notes = [];
  }
  ngOnInit() {}

  createNote() {
    const newNote: Notes = {
      title: this.ntitle,
      content: this.ncontent,
    };

    this.notes.push(newNote);

    // set the model values to '' again
    this.ntitle = '';
    this.ncontent = '';
  }
}
