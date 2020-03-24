import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventDetailComponent } from './events/event-details/event-detail.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: '404', component: Error404Component },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }

]