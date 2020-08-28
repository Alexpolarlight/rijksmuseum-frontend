import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { MatCardModule } from '@angular/material/card';
import { ArtObjectDetailsService } from './services/art-object-details/art-object-details.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports: [DetailsPageComponent],
  providers: [ArtObjectDetailsService]
})
export class DetailsPageModule { }
