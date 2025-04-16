import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const match = value.match(/^(\S+\s*){1,3}/);
    return match ? match[0].trim() : '';
  }

}
