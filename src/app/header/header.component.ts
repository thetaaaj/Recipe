import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(btnType:string){
    this.recipeClicked.emit(btnType);
  }

}
