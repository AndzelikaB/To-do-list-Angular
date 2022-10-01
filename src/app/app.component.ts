import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName!: string;
  config: { [key: string]: string } | null  = null;
  tasks: Task[] = [
    {
      name: 'Spacer z psem',
      deadline: '2022-09-30',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2023-03-06',
      done: false,
    },
    {
      name: 'Joga',
      deadline: '2022-12-24',
      done: false,
    },
  ];

  clearTasks(){
    this.tasks = [];
  }

  onKeyUp(event : KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
    console.log("xczxc")
  }

  createTask(){
    const task : Task = {
      name: this.taskName,
      deadline: '01-10-2022',
      done: false
    }
    this.tasks.push(task);
  }

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
  }
}