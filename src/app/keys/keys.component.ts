import { Component, OnInit } from '@angular/core';

import { AudioService } from './audio.service';

let constructKey = (note: string, id: string, black = false, alias= undefined)=>{
  return {
    id: note + id, 
    note,
    black,
    alias
  };
}

let constructKeys = (number: any = 3, addEdge = false)=>{
  const keys = [
    constructKey(`C`, number),
    constructKey(`C#`, number, true, 'Db'),
    constructKey(`D`, number),
    constructKey(`D#`, number, true, 'Eb'),
    constructKey(`E`, number),
    constructKey(`F`, number),
    constructKey(`F#`, number, true, 'Gb'),
    constructKey(`G`, number),
    constructKey(`G#`, number, true, 'Ab'),
    constructKey(`A`, number),
    constructKey(`A#`, number, true, 'Bb'),
    constructKey(`B`, number),
  ];

  if(addEdge){
    keys.push(constructKey(`C`, number + 1));
  }

  return keys;
};



@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  config: any;

  highlightedNotes = [];

  constructor(private audioService: AudioService) {
    this.config = {
      keys: constructKeys(2).concat(constructKeys(3, true))
    }
    console.log(this.config);
   }

  ngOnInit() {
  }

  press(key:any){
    console.log(key);
    this.audioService.playNote(key.id);
  }

  release(key:any){
    console.log(key);
  }

  highlight(notes){
    console.log('HL', notes);
    this.highlightedNotes = notes;
  }

  shouldHighlight(key){
    let note = key.id;
    return this.highlightedNotes.includes(key.note) || this.highlightedNotes.includes(key.alias);
  }

}
