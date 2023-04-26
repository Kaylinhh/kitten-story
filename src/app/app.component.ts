//COMPOSANT PARENT

import { Component } from '@angular/core';
import { Kitten } from './models/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kitten story';


  kittenData: Kitten[] = [
    new Kitten("Maki", "chat européen", new Date('2016-05-01'), "./assets/maki.jpg"),
    new Kitten("Satanas", "chat européen", new Date('2022-08-23'), "./assets/satanas.jpg")
  ]
  adoptedKittenList: Kitten[] = []

  onNewKittenReceived(event: Kitten) {
    this.kittenData.push(event)
    console.log(this.kittenData);
  }

  onAdoptedKittenReceived(event: Kitten) {
    this.adoptedKittenList.push(event)
    console.log(this.adoptedKittenList);

  }


}
