import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";
import { CpfCnpjService } from "./cpf.service";

@Directive({
  selector: '[cpfForm]'
})

export class CpfDirective {

    constructor(
      private renderer: Renderer2,
      private el: ElementRef,
      private cpfCnpjService: CpfCnpjService
    ) {}

    @HostListener("input", ["$event"]) onInput(event) {
      if (event.target.value.length <= 18) {
        this.renderer.setProperty(
          this.el.nativeElement,
          "value",
          this.cpfCnpjService.convertToCpfCnpj(event.target.value)
        );
      }
    }
  }
