import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipsAndTricksPage } from './tips-and-tricks.page';

describe('TipsAndTricksPage', () => {
  let component: TipsAndTricksPage;
  let fixture: ComponentFixture<TipsAndTricksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipsAndTricksPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TipsAndTricksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
