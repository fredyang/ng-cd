import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { Api } from './api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Api
  ],
  declarations: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }