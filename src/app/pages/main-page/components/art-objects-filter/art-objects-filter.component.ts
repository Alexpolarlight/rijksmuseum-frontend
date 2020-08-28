import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ORDER_BY, SortByType } from '../../models/order-by.model';

@Component({
  selector: 'app-art-objects-filter',
  templateUrl: './art-objects-filter.component.html',
  styleUrls: ['./art-objects-filter.component.scss']
})
export class ArtObjectsFilterComponent implements OnInit {

  public orderType = new FormControl('');
  public searchKeyword = new FormControl('');

  public sortByTypes = ORDER_BY;

  constructor() { }

  ngOnInit() {
  }

}
