import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './user/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { JQUERY_TOKEN } from './shared/JQuery.service';

let jquery = window['$'];
let mockAuthService;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        },
        {
          provide: JQUERY_TOKEN,
          useValue: jquery
        },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-intro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-intro');
  });
});
