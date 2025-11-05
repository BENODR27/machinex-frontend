import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModel } from './alert-model';

describe('AlertModel', () => {
  let component: AlertModel;
  let fixture: ComponentFixture<AlertModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
