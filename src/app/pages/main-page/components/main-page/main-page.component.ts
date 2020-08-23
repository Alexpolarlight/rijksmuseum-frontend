import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ArtObjectsListService} from '../../services/art-objects-list/art-objects-list.service';
import {Observable} from 'rxjs';
import {ArtObjectModel} from '../../models/art-object.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public artObjects$: Observable<ArtObjectModel>;


  constructor(
    private readonly artObjectsListService: ArtObjectsListService
  ) {
    console.log('MainPageComponent');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.artObjectsListService.getArtObjectsList().subscribe((i) => console.log('artObjects ', i));
  }

}
