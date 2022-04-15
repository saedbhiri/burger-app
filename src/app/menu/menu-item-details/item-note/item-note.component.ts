import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-note',
  templateUrl: './item-note.component.html',
  styleUrls: ['./item-note.component.css']
})
export class ItemNoteComponent implements OnInit {

  @Input() note: string;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
