import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntimeDetailComponent } from './downtime-detail.component';

describe('DowntimeDetailComponent', () => {
  let component: DowntimeDetailComponent;
  let fixture: ComponentFixture<DowntimeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowntimeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowntimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
