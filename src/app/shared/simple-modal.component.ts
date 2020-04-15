import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQUERY_TOKEN } from './JQuery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modalcontainer tabindex="-1" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
        </div>
        <div class="modal.body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
`
})

export class SimpleModalComponent {
  constructor(@Inject(JQUERY_TOKEN) private $: any) { }
  @Input() title
  @Input() elementId
  @ViewChild('modalcontainer') containerEl: ElementRef

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide')
  }
}