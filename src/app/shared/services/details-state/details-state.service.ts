import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DetailsStateService {

  public artObjectNumber: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  public setArtObjectNumber(objectNumber: string) {
    this.artObjectNumber.next(objectNumber);
  }
}
