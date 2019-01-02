import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playNote(id){
    const sound = new Audio(`assets/audio/${encodeURIComponent(id)}.mp3`);
    sound.play();
  }
}
