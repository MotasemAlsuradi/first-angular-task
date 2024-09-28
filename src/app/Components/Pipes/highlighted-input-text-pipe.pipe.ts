import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Import DomSanitizer and SafeHtml

@Pipe({
  name: 'highlightedText',
  standalone: true
})
export class HighlightedInputTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {} // Inject DomSanitizer

  transform(value: string): SafeHtml {
    const highlightedValue = `<span style='background-color:rgba(0, 255, 0, 0.5);'>${value}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue); // Mark HTML as safe
  }
}
