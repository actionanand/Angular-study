import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
    // 'yellow');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
    // 'lightgreen');
    this.bgColor = 'lightgreen';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
    // 'transparent');
    this.bgColor = 'transparent';
  }

}
