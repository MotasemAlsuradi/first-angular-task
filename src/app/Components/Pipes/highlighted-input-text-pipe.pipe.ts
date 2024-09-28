import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightedInputText',
  standalone: true
})
export class HighlightedInputTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(value, `<span style='background-color:rgba(0, 255, 0, 0.5);'>${{value}}</span>`);
  }
}
