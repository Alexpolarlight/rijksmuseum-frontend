import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import {ArtObjectsListService} from './services/art-objects-list/art-objects-list.service';



@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailsPageComponent],
  providers: []
})
export class DetailsPageModule { }
