import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]',
  standalone: true
})
export class MagnifierDirective {
  @HostBinding('width') width=200

  @HostListener('mouseenter',['$event'])
  onHover(){
this.width=300
  }


}
