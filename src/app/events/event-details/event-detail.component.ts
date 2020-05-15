import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared/events.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  addMode: boolean;
  event: IEvent
  filterBy: string = 'all'
  sortBy: string = 'votes'

  constructor(private eventService: EventsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    //IT WORKS FOR PAGES ROUTERS DIFFERENT FROM EVENT-DETAILS.COMPONENT
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);

    //CORRECT WAY USING SUBSCRIBE (LISTEN TO CHANGES)
    this.route.data.forEach((data) => {
      // CORRECT WAY USING CONST INSTEAD OF HTTP
      // this.route.params.forEach((params: Params) => {
      //   this.event = this.eventService.getEvent(+params['id'])

      //   // => Should reset to default every time
      //   this.addMode = false;
      // })

      //  Correct way of using Observables
      // this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
      //   this.event = event;
      //   this.addMode = false;
      // })

      // Correct way using Resolve
      this.event = data['event'];
      this.addMode = false;

      // => Should reset to default every time

    })

  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))

    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe()
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
