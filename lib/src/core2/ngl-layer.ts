import { OnDestroy } from '@angular/core';
import { Layer, Map } from 'leaflet';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NglParent } from './ngl-parent';

export abstract class NglLayer<T extends Layer> implements OnDestroy {
  layerRef: T;
  mapRef: Map;

  initialized$: Observable<boolean>;

  _initialized = new Subject<boolean>();
  _destroyer = new Subject();

  constructor(protected parent: NglParent) {
    this.initialized$ = this._initialized.asObservable();

    this.parent.initialized$.pipe(takeUntil(this._destroyer)).subscribe(() => {
      this.addLayer();
    });
  }

  protected markAsInitialized() {
    this._initialized.next(true);
  }

  ngOnDestroy() {
    this.removeLayer();
    this._destroyer.next(true);
    this._destroyer.complete();
  }

  getMap() {
    this.parent.mapRef;
  }

  getParent() {
    this.parent.getParent();
  }

  abstract addLayer(): void;
  abstract removeLayer(): void;
}
