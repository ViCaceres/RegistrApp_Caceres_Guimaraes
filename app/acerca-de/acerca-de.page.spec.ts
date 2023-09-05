import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcercaDePage } from './acerca-de.page';

describe('AcercaDePage', () => {
  let component: AcercaDePage;
  let fixture: ComponentFixture<AcercaDePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcercaDePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
