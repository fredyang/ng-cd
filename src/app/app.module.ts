import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { CountComponent } from './count/count.component';
import { ClockComponent } from './clock/clock.component';
import { UserSelectComponent } from './user.select/user.select.component';
import { UserDisplayComponent } from './use.display/user.display.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  declarations: [AppComponent, CountComponent, ClockComponent, UserDisplayComponent, UserSelectComponent],
  exports: [AppComponent]
})
export class AppModule { }