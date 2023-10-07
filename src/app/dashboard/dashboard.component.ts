import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'corp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public menu: Array<string> = ["Line", "Bar", "Pie"];
  public visualization: Array<string> = [];
  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  dropItem(event: CdkDragDrop<string[]>) {
    const item = event.item.data;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
