import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { TaskManagerService } from '../services/task-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;

  login: {username?: string, password?: string} = {};
  isLoading:boolean = false;
  errorMessage:string;
  constructor(private _taskManagerService:TaskManagerService, private _router: Router) { }

  ngOnInit() {
  }

  logon(){
    this.isLoading = true
    if (this.login.username === undefined || this.login.password === undefined){
				this.errorMessage ='Username or password missing!';
				this.isLoading = false;
        this.showChildModal();
				return;
    }

    this._taskManagerService.login(this.login.username, this.login.password).subscribe(res=>{
      console.log("Login result", res)
      this._taskManagerService.setLoggedInUser(res[0]);
      this._router.navigate(['/home']);
      this.isLoading = false;
    }, error=>{
      this.isLoading = false;
      this.errorMessage="Login Failed, Please try again";
      this.showChildModal();
    })    
  }

  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }	  

}
