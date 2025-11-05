import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineAllocateComponent } from './machine-allocate.component';

describe('MachineAllocateComponent', () => {
  let component: MachineAllocateComponent;
  let fixture: ComponentFixture<MachineAllocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineAllocateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineAllocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
