import { Component, ViewChild } from '@angular/core';

import { NoteService } from "./note.service";
import { KeysComponent } from './keys/keys.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keys';

  scales:Array<any>;

  @ViewChild(KeysComponent) keys: KeysComponent;

  constructor(noteService: NoteService) {
    console.log(this.keys);
    this.scales = noteService.getScales();
  }

  play(scale){
    this.keys.playSequence(scale.notes);
  }

  show(scale){
    this.keys.highlight(scale.notes);
  }
}
