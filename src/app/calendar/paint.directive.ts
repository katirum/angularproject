import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPaint]'
})


export class PaintDirective /* implements OnInit */{

  constructor(private elementref: ElementRef) { }

  @Input()
  color= "Salmon"

  @HostListener('mouseover') onMouseOver(){
    this.elementref.nativeElement.style.backgroundColor = this.color
  }

  @HostListener('mouseout') onMouseOut(){
    this.elementref.nativeElement.style.backgroundColor = "Purple"
  }

  /* ngOnInit(): void {
    this.elementref.nativeElement.style.backgroundColor = this.color
  } */
}
