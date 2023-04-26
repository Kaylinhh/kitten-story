//COMPOSANT ENFANT

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {
  kitten: Kitten = new Kitten("", "", new Date(), "")

  @Input() kittenList: Kitten[] = []
  @Output() newKittenSent: EventEmitter<Kitten> = new EventEmitter()

  onSubmit() {
    console.log(this.kitten);
    this.newKittenSent.emit(this.kitten)
  }

}