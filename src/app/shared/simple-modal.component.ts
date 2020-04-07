import { Component, Input } from "@angular/core";

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" tabindex="-1" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
        </div>
        <div class="modal.body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
`
})

export class SimpleModalComponent {
  @Input() title
  @Input() elementId
}