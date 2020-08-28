import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ArtObjectModel } from '../../../../models/art-object.model';
import { InformationDialogComponent } from '../../components/information-dialog/information-dialog.component';

@Injectable()
export class InformationDialogPresenterService {

  constructor(private readonly matDialog: MatDialog) { }

  public openInformationDialog(object: ArtObjectModel): MatDialogRef<InformationDialogComponent> {
    return this.matDialog.open(InformationDialogComponent, { data: object, autoFocus: false, disableClose: true});
  }
}
