import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './components/details-page/details-page.component';



@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailsPageComponent],
  providers: []
})
export class DetailsPageModule { }
