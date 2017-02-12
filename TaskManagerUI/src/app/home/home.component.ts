import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap'
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  loggedInUser: any;
  Statuses =
  {
    toDo: "To Do",
    inProgress: "In Progress",
    done: "Done",
    testing: "Testing"
  }
  tasks: any[];
  isLoading = false;
  selectedTask: any = {};
  errorMessage: string;
  isAddTask: boolean = false;

  constructor(private _taskManagerService: TaskManagerService) { }

  ngOnInit() {
    this.loggedInUser = this._taskManagerService.getLoggedInUser();
    this.isLoading = true;
    this.getTasks();
  }

  getTasks() {
    this._taskManagerService.getAllTasks().subscribe(res => {
      this.tasks = res;
      console.log(this.tasks);
      this.isLoading = false
    }, err => {
      this.isLoading = false
      this.showChildModal();
      this.errorMessage = "Error while loading tasks,  try again later";
    })
  }

  changeStatus(task, status) {
    task.Status = status;
  }

  onTaskSelected(id) {
    this._taskManagerService.getTaskByID(id).subscribe(res => {
      this.selectedTask = res[0];
      this.showChildModal();
    }, err => {
      this.isLoading = false
      this.showChildModal();
      this.errorMessage = "Error while loading task,  try again later";
    })
  }

  addTask() {
    this.selectedTask = {};
    this.isAddTask = true;
    this.showChildModal();
  }

  saveTask(task) {
    this.isAddTask = false;
    this.hideChildModal();
    this._taskManagerService.addTask(task).subscribe(res => {
      this.getTasks();
    }, error => {
      this.errorMessage = "Unable to add new task, please try again later."
      this.showChildModal();
    })
  }

  updateTask(task) {
    // debugger;
    var that = this;
    $.ajax({
      url: 'http://localhost:2626/api/tasks/' + task.Id,
      type: 'PUT',
      data: JSON.stringify(task),
      contentType:'application/json',
      success: function (data) {
        that.hideChildModal();
        that.getTasks();
      },
      error: function (err) {
        that.hideChildModal();
        that.errorMessage = "Unable to update task, try again later";
        that.showChildModal();
      }
    });
    // this._taskManagerService.updateTask(task).subscribe(res => {
    //   this.hideChildModal();
    //   this.getTasks();
    // }, error => {
    //   this.hideChildModal();
    //   this.errorMessage = "Unable to update task, try again later";
    //   this.showChildModal();
    // })
  }

  deleteTask(taskId) {
    var that = this;
    $.ajax({
      url: 'http://localhost:2626/api/tasks/' + taskId,
      type: 'DELETE',
      data: null,
      success: function (data) {
        that.hideChildModal();
        that.getTasks();
      },
      error: function (err) {
        that.hideChildModal();
        that.errorMessage = "Unable to update task, try again later";
        that.showChildModal();
      }
    }); 

    // this._taskManagerService.deleteTask(taskId).subscribe(res => {
    //   this.hideChildModal();
    //   this.getTasks();
    // }, error => {
    //   this.hideChildModal();
    //   this.errorMessage = "Unable to delete task, try again later";
    //   this.showChildModal();
    // })
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.errorMessage = null;
    this.selectedTask = {};
    this.childModal.hide();
  }

}
