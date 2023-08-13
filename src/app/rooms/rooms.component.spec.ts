import { ActivatedRoute, RouterModule } from '@angular/router';
import { APP_SERVICE_CONFIG } from './../AppConfig/appconfig.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from './../shared/services/config/config.service';
import { RoomsService } from './../shared/services/rooms/rooms.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RouteConfigToken } from '../shared/services/config/routeConfig.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule],
      declarations: [RoomsComponent],
      providers: [
        RoomsService,
        ConfigService,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: { apiendpoint: 'http://localhost:3000' },
        },
        {
          provide: RouteConfigToken,
          useValue: { title: 'title' },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    component.hidden = false;
    component.hideRooms();
    expect(component.hidden).toBe(true);
  });
});
