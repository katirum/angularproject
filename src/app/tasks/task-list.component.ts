import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NgForm } from '@angular/forms'
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  newTask: NewTask = new NewTask();

  tasks = this.taskService.getAllTasks(this.route.snapshot.params['date']);

  

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }


  add(taskNgForm: NgForm){

    if(taskNgForm.touched === false)
    return;
  
    this.taskService.addTask(this.newTask.date, this.newTask);
    taskNgForm.reset({date: this.newTask.date});
  }

  remove(existingTask: TaskItem){
    var useConfirm = confirm(`are you sure you want to remove task? \n ${existingTask.title}`)

    if(useConfirm){
      this.taskService.removeTask(this.newTask.date, existingTask);
    }
  }
}

