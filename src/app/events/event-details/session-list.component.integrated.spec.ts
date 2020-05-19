import { ComponentFixture, async, TestBed } from "@angular/core/testing"
import { SessionListComponent } from './session-list.component'
import { DebugElement } from '@angular/core'
import { AuthService } from 'src/app/user/auth.service'
import { VoterService } from './voter.service'
import { UpVoteComponent } from './upvote.component'
import { DurationPipe } from '../shared/duration.pipe'
import { CollapsibleWellComponent } from 'src/common/collapsible-well.component'


describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { username: 'Joe' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        }


        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpVoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
            ]
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [{
                id: 3,
                name: 'Session 1',
                presenter: 'Joe',
                duration: 1,
                level: 'beginner',
                abstract: 'abstract',
                voters: ['john', 'bob']
            }]

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title').textContent).toContain('Session 1')
        })
    })
})