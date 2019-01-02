import { Component, OnInit } from '@angular/core';

import { AudioService } from './audio.service';

let constructKey = (id: string, black = false)=>{
  return {
    id, 
    black
  };
}

let constructKeys = (number: any = 3, addEdge = false)=>{
  const keys = [
    constructKey(`C${number}`),
    constructKey(`C#${number}`, true),
    constructKey(`D${number}`),
    constructKey(`D#${number}`, true),
    constructKey(`E${number}`),
    constructKey(`F${number}`),
    constructKey(`F#${number}`, true),
    constructKey(`G${number}`),
    constructKey(`G#${number}`, true),
    constructKey(`A${number}`),
    constructKey(`A#${number}`, true),
    constructKey(`B${number}`),
  ];

  if(addEdge){
    keys.push(constructKey(`C${number + 1}`));
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

}
