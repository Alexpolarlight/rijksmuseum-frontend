import { HostListener, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class DestroySubscription implements OnDestroy {

  private readonly destroySubject: Subject<void> = new Subject();

  protected get destroyStream$(): Observable<void> {
    return this.destroySubject.asObservable();
  }

  protected destroy(): void {
    const destroy = this.destroySubject;
    destroy.next();
    destroy.unsubscribe();
  }

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {
    this.destroy();
  }
}
