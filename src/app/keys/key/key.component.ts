import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  @Input() config: any;
  @Input() highlight: Boolean;

  
  @Output() press: EventEmitter<any> = new EventEmitter();

  @Output() release: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  pressed (){
    this.press.emit();
  }

  released (){
    this.release.emit();
  }

}
