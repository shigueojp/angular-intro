import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventDetailComponent } from './event-detail.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
