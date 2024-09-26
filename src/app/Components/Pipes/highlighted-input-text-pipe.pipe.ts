import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightedInputText',
  standalone: true
})
export class HighlightedInputTextPipe implements PipeTransform {

  transform(value: string, search: string): string {
    if (!search)
      return value;

    const regex = new RegExp(`(${search})`, 'gi');
    return value.replace(regex, `<span style='background-color:rgba(0, 255, 0, 0.5);'>$1</span>`);
  }
}
