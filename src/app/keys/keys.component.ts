import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { AudioService } from './audio.service';
import { KeyComponent } from './key/key.component';

let constructKey = (note: string, number: string, black = false, alias= undefined)=>{
  return {
    id: note + number, 
    octave: number,
    note,
    black,
    alias
  };
}

let constructKeys = (number: any = 3, addEdge = false)=>{
  const keys = [
    constructKey(`c`, number),
    constructKey(`c#`, number, true, 'db'),
    constructKey(`d`, number),
    constructKey(`d#`, number, true, 'eb'),
    constructKey(`e`, number),
    constructKey(`f`, number),
    constructKey(`f#`, number, true, 'gb'),
    constructKey(`g`, number),
    constructKey(`g#`, number, true, 'ab'),
    constructKey(`a`, number),
    constructKey(`a#`, number, true, 'bb'),
    constructKey(`b`, number),
  ];

  if(addEdge){
    keys.push(constructKey(`c`, number + 1));
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
  lastIndex=0;

  highlightedNotes = [];

  @ViewChildren(KeyComponent) keys: QueryList<KeyComponent>;

  constructor(private audioService: AudioService) {
    this.config = {
      keys: constructKeys(2).concat(constructKeys(3, true))
    }
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
    // console.log('HL', notes);
    this.highlightedNotes = notes;
  }

  playSequence(notes){
    console.log('play', notes);
    
    let index = 0;
    
    this.lastIndex = 0;
    const play = ()=>{
      console.log(index, notes[index])
      return this.playKey(notes[index])
      .then(()=>{
        index++;
        if(notes[index]){
          play();
        }
      });
    };

    play();
  }

  playKey(note) {
    console.log('play note', note);
    let keys = this.keys.toArray();
    const key = keys.find((key, index)=>{
      const found = index > this.lastIndex && (key.config.note === note || key.config.alias === note);

      if(found){
        this.lastIndex = index;
      }

      return found;
    });

    return new Promise((resolve, reject)=>{
      if(key){
        key.press();
        setTimeout(resolve, 1000);
      } else {
        console.error('note not found', note);
        resolve();
      }
    });
  }

  shouldHighlight(key){
    let note = key.id;
    return this.highlightedNotes.includes(key.note) || this.highlightedNotes.includes(key.alias);
  }

}
