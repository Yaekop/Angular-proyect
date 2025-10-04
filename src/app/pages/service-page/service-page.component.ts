import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { ITask } from '../../core/interfaces';
import { TaskComponent } from '../../shared/components/task/task.component';
import { TaskListComponent } from '../../shared/components/task_list/task_list.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [TaskComponent, TaskListComponent],
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent { 
  TaskService = inject(TaskService);

  addNewTask(task:ITask){
    this.TaskService.addTask(task);
  }
  removeTask(taskId: number){
    this.TaskService.removeTask(taskId);
  }
}
