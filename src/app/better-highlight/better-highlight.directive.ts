import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @Input() defaultColor: string = 'transparent'
  @Input('appBetterHighlight') highlightColor: string;
  @HostBinding('style.backgroundColor') bgColor: string;
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
    // 'yellow');
    this.bgColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
    // 'lightgreen');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',
    // 'transparent');
    this.bgColor = this.defaultColor;
  }

}
