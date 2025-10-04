import { Component, input, output } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task_list.component.html',
})
export class TaskListComponent {

  outputTaskid = output<number>();
  tasks = input.required<ITask[]>();

  deleteTask(id: number){
    this.outputTaskid.emit(id);
  }
 }
