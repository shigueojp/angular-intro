import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { EventsService } from './events.service';

@Component({
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    imageUrl: any
    isDirty: boolean = false
    newEvent

    constructor(private eventService: EventsService, private router: Router) { }

    ngOnInit(): void {
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveEvent(newEventFormValues) {
        this.eventService.saveEvent(newEventFormValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['events']);
        })
    }
}