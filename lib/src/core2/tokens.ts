import { ExistingProvider, forwardRef, Type } from '@angular/core';
import { NglParent } from './ngl-parent';

export function asParent(original: Type<any>): ExistingProvider {
  return { provide: NglParent, useExisting: forwardRef(() => original) };
}
