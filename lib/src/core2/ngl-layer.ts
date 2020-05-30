import { Layer, Map } from 'leaflet';
import { NglParent } from './ngl-parent';
import { Observable, Subject } from 'rxjs';

export abstract class NglLayer<T extends Layer> {
  layerRef: T;

  initialized$: Observable<boolean>;

  _initialized = new Subject<boolean>();

  constructor(protected parent: NglParent) {
    this.initialized$ = this._initialized.asObservable();

    this.parent.initialized$.subscribe(() => {
      this.addLayer();
    });
  }

  markAsInitialized() {
    this._initialized.next(true);
  }

  abstract addLayer(): void;
  //   abstract removeLayer();
}
