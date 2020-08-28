import { Injectable } from '@angular/core';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';
import {Observable, Subject} from 'rxjs';
import { ArtObjectsDto } from '../../models/art-object.model';
import { shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { buildURLParams } from '../../../../../helpers/functions/build-url-params';
import { DataDto } from '../../../../shared/models/data.model';

@Injectable()
export class ArtObjectsListService {

  public artObjectsListUpdate$: Subject<void> = new Subject<void>();
  private collectionApi = 'https://www.rijksmuseum.nl/api/en/collection';
  private key = 'key=6qmXuiAv';

  constructor(
    private readonly http: TransferHttpService
  ) { }

  public getArtObjectsList(params: { page: number, perPage: number }): Observable<DataDto<ArtObjectsDto>> {
    return this.artObjectsListUpdate$.pipe(
      startWith({}),
      switchMap(() => this.http.get<DataDto<any>>(`${this.collectionApi}?${this.key}`, { params: buildURLParams(params)})),
      shareReplay(1)
    );
  }
}
