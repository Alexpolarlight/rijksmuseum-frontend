import { Injectable } from '@angular/core';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';
import {Observable, Subject} from 'rxjs';
import {ArtObjectModel} from '../../models/art-object.model';
import {shareReplay, switchMap} from 'rxjs/operators';

@Injectable()
export class ArtObjectsListService {

  public artObjectsListUpdate: Subject<void> = new Subject<void>();
  private artsApi = 'https://www.rijksmuseum.nl/api/en/usersets?key=6qmXuiAv';

  constructor(
    private readonly http: TransferHttpService
  ) {
    console.log('ArtObjectsListService');
  }

  public getArtObjectsList(): Observable<ArtObjectModel> {
    console.log('getArtObjectsList');
    return this.http.get(this.artsApi);
    // return this.artObjectsListUpdate.pipe(
    //   switchMap(() => this.http.get<ArtObjectModel>(`${this.artsApi}`)),
    //   shareReplay(1)
    // );
  }
}
