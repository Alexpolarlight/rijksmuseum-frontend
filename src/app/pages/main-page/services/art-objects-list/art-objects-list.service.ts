import { Injectable } from '@angular/core';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';
import {Observable, Subject} from 'rxjs';
import { ArtObjectModel, ArtObjectsDto } from '../../models/art-object.model';
import {shareReplay, switchMap, map, tap} from 'rxjs/operators';
import { DataDto } from '../../../../shared/models/data.model';
import { buildURLParams } from '../../../../../helpers/functions/build-url-params';

@Injectable()
export class ArtObjectsListService {

  public artObjectsListUpdate: Subject<void> = new Subject<void>();
  public artObjects$: ArtObjectModel[];
  public totalCount: number;
  private collectionApi = 'https://www.rijksmuseum.nl/api/en/collection';
  private key = 'key=6qmXuiAv';

  constructor(
    private readonly http: TransferHttpService
  ) { }

  public getArtObjectsList(params: { page: number, perPage: number }) {
    return this.http.get(`${this.collectionApi}?${this.key}`, { params: buildURLParams(params)}).pipe(
      tap((collection) =>  console.log(collection)),
      map((collection) =>  collection.artObjects.map((object) => {
          return new ArtObjectModel(object.id, object.title, object.longTitle, object.webImage, object.longTitle);
        }))
    );
  }
}
