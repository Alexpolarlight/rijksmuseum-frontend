import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InformationDialogPresenterService } from './services/information-dialog-presenter/information-dialog-presenter.service';
import { InformationDialogComponent } from './components/information-dialog/information-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export function InformationDialogPresenterServiceFactory(dialog: MatDialog): InformationDialogPresenterService {
  return new InformationDialogPresenterService(dialog);
}

@NgModule({
  declarations: [InformationDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [InformationDialogComponent],
  providers: [InformationDialogPresenterService]
})
export class InformationDialogModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: InformationDialogModule,
      providers: [
        {
          provide: InformationDialogPresenterService,
          useFactory: InformationDialogPresenterServiceFactory,
          deps: [MatDialog]
        }
      ]
    };
  }
}
