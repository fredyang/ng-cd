import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { CountComponent } from './count/count.component';
import { ClockComponent } from './clock/clock.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.select/user.select.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  declarations: [AppComponent, CountComponent, ClockComponent, ProfileComponent, UserComponent],
  exports: [AppComponent]
})
export class AppModule { }