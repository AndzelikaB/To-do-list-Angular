import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { takeLast } from 'rxjs';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode: boolean = false;
  taskName: string = 'Codzienne zadanie: Nauka';
  taskData: string = '';
  config: { [key: string]: string } | null = null;
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
      name: 'Joga na dziś',
      deadline: '2022-12-24',
      done: true,
    },
    {
      name: 'Przejażdżka rowerowa',
      deadline: '2022.10.09',
      done: false
    },
    {
      name: 'Wizyta u dentysty',
      deadline: '2022.10.10',
      done: false
    },
    {
      name: 'Ugotować żur',
      deadline: '2022.09.10',
      done: true
    },
    {
      name: 'Wywołać zdjęcia',
      deadline: '2022.11.11',
      done: false
    },
    {
      name: 'Kupić klamke',
      deadline: '2022.10.22',
      done: false
    }
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Tasks List',
        footer: '© Tasks List build in Angular',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskData,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskData = '';
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((e) => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );

    this.tasks = this.tasks.sort();
  }
}