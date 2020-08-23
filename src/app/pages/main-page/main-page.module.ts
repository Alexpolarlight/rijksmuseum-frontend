import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {ArtObjectsListService} from './services/art-objects-list/art-objects-list.service';
import { ArtObjectsFilterComponent } from './components/art-objects-filter/art-objects-filter.component';



@NgModule({
  declarations: [MainPageComponent, ArtObjectsFilterComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [MainPageComponent],
  providers: [ArtObjectsListService]
})
export class MainPageModule { }
