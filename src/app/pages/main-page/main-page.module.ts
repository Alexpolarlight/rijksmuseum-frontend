import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {MatButtonModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {ArtObjectsListService} from '../details-page/services/art-objects-list/art-objects-list.service';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [MainPageComponent],
  providers: [ArtObjectsListService]
})
export class MainPageModule { }
