import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LifestylePage } from './lifestyle.page';

describe('LifestylePage', () => {
  let component: LifestylePage;
  let fixture: ComponentFixture<LifestylePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LifestylePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LifestylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
