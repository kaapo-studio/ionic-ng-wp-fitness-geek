import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritiePage } from './nutritie.page';

describe('NutritiePage', () => {
  let component: NutritiePage;
  let fixture: ComponentFixture<NutritiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NutritiePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
