import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcToLocalPipe'
})
export class UtcToLocalPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
