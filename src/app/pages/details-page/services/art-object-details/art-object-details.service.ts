import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable, Subject } from 'rxjs';
import { ArtObjectDetailsDto } from '../../models/art-object-details.model';
import { shareReplay, startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class ArtObjectDetailsService {

  public artObjectDetails$: Subject<void> = new Subject<void>();

  public artObjectDetailsApi = 'https://www.rijksmuseum.nl/api/en/collection';
  private key = 'key=6qmXuiAv';

  constructor(
    private readonly http: TransferHttpService
  ) { }

  public getArtObjectDetails(id): Observable<ArtObjectDetailsDto> {
    return this.artObjectDetails$.pipe(
      startWith({}),
      switchMap(() => this.http.get<ArtObjectDetailsDto>(`${this.artObjectDetailsApi}/${id}?${this.key}`)),
      shareReplay(1)
    );
  }
}
