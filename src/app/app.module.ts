import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { TaskListComponent } from './task-list/task-list.component'; */
import { TasksModule } from './tasks/tasks.module';
import { CalendarModule } from './calendar/calendar.module';
/* import { TaskService } from './tasks/task.service'; */
import { GlobalErrorHandler } from './GlobalErrorHandler';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    CalendarModule
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
