import { Injectable } from '@angular/core';
import * as teoria from 'teoria';

let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'];
let scales = 
[
"major",
"minor",
"dorian",
"phrygian",
"lydian",
"mixolydian",
"locrian",
"majorpentatonic",
"minorpentatonic",
"chromatic",
"blues",
"doubleharmonic",
"flamenco",
"harmonicminor",
"melodicminor",
"wholetone"];

console.log(teoria);

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getScales(){
    let scalesList = [];
    notes.forEach((note)=>{
      scales.forEach((scale)=>{
        scalesList.push({
          id: note + ' ' + scale,
          note,
          scale,
          notes: this.getScaleNotes(note, scale)
        });
      });
    });
    return scalesList;
  }

  getScaleNotes(tonic, scale){
    return teoria.scale(tonic, scale).simple().map(note=>note);
  }
}
