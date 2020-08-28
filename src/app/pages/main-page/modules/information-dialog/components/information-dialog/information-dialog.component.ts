import { Component, Inject, OnInit } from '@angular/core';
import { ArtObjectModel } from '../../../../models/art-object.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsStateService } from '../../../../../../shared/services/details-state/details-state.service';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})
export class InformationDialogComponent implements OnInit {

  public artObject: ArtObjectModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: ArtObjectModel,
    private readonly router: Router,
    private readonly detailsStateService: DetailsStateService
  ) { }

  ngOnInit() {
    this.artObject = this.data;
  }

  public navigateToDetailsPage(objectNumber: string) {
    console.log('objectNumber', objectNumber);
    this.detailsStateService.setArtObjectNumber(objectNumber);
    this.router.navigate(['details-page']);

  }
}
