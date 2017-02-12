import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { TaskManagerService } from './services/task-manager.service';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { approuting } from './routes/app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule,
    approuting
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
