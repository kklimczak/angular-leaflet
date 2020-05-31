import { Layer, LayerGroup, Map } from 'leaflet';
import { Observable, Subject } from 'rxjs';

export class NglParent<T extends LayerGroup = LayerGroup> {
  mapRef: Map;
  parentRef: T;
  initialized$: Observable<boolean>;

  _initialized = new Subject<boolean>();

  constructor() {
    this.initialized$ = this._initialized.asObservable();
  }

  attach(layer: Layer) {
    this.getParent().addLayer(layer);
  }

  detach(layer: Layer) {
    this.getParent().removeLayer(layer);
  }

  protected markAsInitialized() {
    this._initialized.next(true);
  }

  getParent(): LayerGroup | Map {
    return this.parentRef instanceof LayerGroup ? this.parentRef : this.mapRef;
  }
}
