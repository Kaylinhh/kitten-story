//COMPOSANT ENFANT

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {
  @Input() globalKittenList: Kitten[] = []
  @Output() adoptedKitten: EventEmitter<Kitten> = new EventEmitter()

  //en théorie on veut juste outputer le chat qu'on a adopté
  //il faudrait créer une fonction qui push dans notre userList au click

  adoptKitten(kitten: Kitten) {
    this.adoptedKitten.emit(kitten)
    //on veut aussi l'enlever de notre globalKittenList

    if (this.globalKittenList.find(newKitten => newKitten.name === kitten.name)) {
      const indexKitten = this.globalKittenList.findIndex(newKitten => newKitten.name === kitten.name)
      this.globalKittenList.splice(indexKitten, indexKitten + 1)
    }
  }
}
