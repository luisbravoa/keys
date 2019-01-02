import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  @Input() config: any;

  
  @Output() press: EventEmitter<any> = new EventEmitter();

  @Output() release: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

  pressed (){
    console.log('press');
    this.press.emit();
  }

  released (){
    console.log('release');
    this.release.emit();
  }

}
