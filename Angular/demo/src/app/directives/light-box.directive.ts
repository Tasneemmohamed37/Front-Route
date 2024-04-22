import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]',
  standalone: true
})
export class LightBoxDirective {

  constructor(private eleRef: ElementRef) 
  { 
    eleRef.nativeElement.style.border = '1px solid darkblue';
  }

  @HostListener('mouseover') onMouseOver(){
    this.eleRef.nativeElement.style.border = '2px solid red';
  }

  // @HostListener('mouseout') onMouseOut(){
  //   this.eleRef.nativeElement.style.border = '1px solid red';
  // }
}
