import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../shared/events.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  constructor() { }

  @Input() event: IEvent

  ngOnInit(): void {
  }
}
