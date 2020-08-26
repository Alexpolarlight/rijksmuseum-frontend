import { Component, Inject, OnInit } from '@angular/core';
import { ArtObjectModel } from '../../../../models/art-object.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})
export class InformationDialogComponent implements OnInit {

  public artObject: ArtObjectModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: ArtObjectModel,
  ) { }

  ngOnInit() {
    this.artObject = this.data;
    console.log('this.artObject', this.artObject);
  }

}
