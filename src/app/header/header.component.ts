import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  
  constructor(private dataService : dataStorageService) { }

  ngOnInit(): void {
  }

  saveData(){
  this.dataService.storeRecipes();
  }

  fetchData(){
    this.dataService.fetchRecipes();
  }

}
