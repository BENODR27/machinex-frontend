import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntimeLogComponent } from './downtime-log.component';

describe('DowntimeLogComponent', () => {
  let component: DowntimeLogComponent;
  let fixture: ComponentFixture<DowntimeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowntimeLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowntimeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
