import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DetailsStateService } from '../../../../shared/services/details-state/details-state.service';
import { ArtObjectDetailsService } from '../../services/art-object-details/art-object-details.service';
import { Observable } from 'rxjs';
import { ArtObjectDetailsDto } from '../../models/art-object-details.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements AfterViewInit {

  public artObjectNumber: string;
  public artObjectDetails$: Observable<ArtObjectDetailsDto>;

  constructor(
    private readonly detailsStateService: DetailsStateService,
    private readonly artObjectDetailsService: ArtObjectDetailsService
  ) {
    this.artObjectNumber = this.detailsStateService.artObjectNumber.getValue();
   }

  ngAfterViewInit() {
    this.artObjectDetails$ = this.artObjectDetailsService.getArtObjectDetails(this.artObjectNumber);
    console.log('this.artObjectNumber', this.artObjectNumber);
    this.artObjectDetails$.subscribe(i => console.log('hello', i));
  }
}
