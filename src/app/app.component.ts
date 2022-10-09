import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'recipebook';

  presentSelectedTab = 'recipe';
  onTabSelected(selectedTab:string){
    console.log(selectedTab);
    this.presentSelectedTab = selectedTab;

  }


}
