import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/events.model';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  
  events: IEvent[];

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
  }

}
