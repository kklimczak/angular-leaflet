import { ExistingProvider, forwardRef, Type } from '@angular/core';
import { NglParent } from './ngl-parent';
import { NglLayer } from './ngl-layer';

export function asParent(original: Type<any>): ExistingProvider {
  return { provide: NglParent, useExisting: forwardRef(() => original) };
}

export function asLayer(original: Type<any>): ExistingProvider {
  return { provide: NglLayer, useExisting: forwardRef(() => original) };
}
