import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";


@Injectable()
export class TaskManagerService {
  baseUrl:string = "http://localhost:2626/api/";
  loggedInUser:any;
  constructor(private _http:Http) { }

  login(username:string, password:string){
    let userModel = {Username:username, Password:password}
    return this._http.post(this.baseUrl+"login",userModel).map(res => res.json());
  }

  getAllTasks(){
    return this._http.get(this.baseUrl+"tasks").map(res => res.json());
  }

  getTaskByID(taskID){
    return this._http.get(this.baseUrl+"tasks/"+taskID).map(res => res.json());
  }

  updateTask(task){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    return this._http.put(this.baseUrl+"tasks/"+task.Id,JSON.stringify(task), {headers:headers}).map(res => res.json());
  }

  deleteTask(taskId){
    return this._http.delete(this.baseUrl+"tasks/"+taskId).map(res => res.json());
  }

  addTask(task){
    return this._http.post(this.baseUrl+"tasks",task).map(res => res.json());
  }

  setLoggedInUser(user){
    this.loggedInUser = user;
  }

  getLoggedInUser(){
    return this.loggedInUser;
  }

}
