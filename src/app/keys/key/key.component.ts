import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  @Input() config: any;
  @Input() highlight: Boolean;

  
  @Output() pressed: EventEmitter<any> = new EventEmitter();

  @Output() released: EventEmitter<any> = new EventEmitter();

  isPressed: boolean;


  constructor() { }

  ngOnInit() {
  }

  press (){
    this.pressed.emit();
    this.isPressed = true;
    setTimeout(()=>{
      this.isPressed = false;
    }, 1000);
  }

  release (){
    this.released.emit();
  }

}
