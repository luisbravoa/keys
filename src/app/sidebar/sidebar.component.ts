import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  @Input() items: Array<any>;

  
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() play: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selected(item){
    console.log('selected', item)
    this.select.emit(item);
  }

  played(item){
    console.log('played', item)
    this.play.emit(item);
  }

}
