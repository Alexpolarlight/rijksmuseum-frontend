import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {ArtObjectsListService} from '../../services/art-objects-list/art-objects-list.service';
import { combineLatest, Observable, Subject } from 'rxjs';
import {ArtObjectModel} from '../../models/art-object.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { startWith, switchMap, takeLast, tap } from 'rxjs/operators';
import { InformationDialogPresenterService } from '../../modules/information-dialog/services/information-dialog-presenter/information-dialog-presenter.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  public artObjects$: Observable<ArtObjectModel>;
  private readonly updateSubject: Subject<void> = new Subject<void>();


  constructor(
    private readonly artObjectsListService: ArtObjectsListService,
    private readonly cdr: ChangeDetectorRef,
    private readonly informationDialogPresenterService: InformationDialogPresenterService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const page: PageEvent = {pageIndex: 0, pageSize: 10, length};
    this.artObjects$ = combineLatest(
      this.paginator.page.pipe(startWith(page)),
      this.updateSubject.pipe(startWith(null))
    ).pipe(
      switchMap(([page]) => this.artObjectsListService.getArtObjectsList({ page: page.pageIndex + 1, perPage: page.pageSize }))
    );
    this.artObjects$.subscribe(i => console.log('comp', i));
  }

  public openInformationDialog(object: ArtObjectModel) {
    console.log('object ', object);
    this.informationDialogPresenterService.openInformationDialog(object);
  }
  // TODO Resolve card styles
  // TODO Fix errors
  // TODO Template update
}
