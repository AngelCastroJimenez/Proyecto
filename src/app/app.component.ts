import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ProyectoCoffeeShop1';
  disableDIV = false;

  COLA = ['1', '2'];
  ENPREPARACION = ['Get up', 'Brush ',];
  FINALIZADO = ['Get', 'Pick'];
  ENTREGADO = ['Get','1'];

  isActive:boolean=true;
  toggle():void{
    this.isActive=!this.isActive;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
