import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeDocentePage } from './make-docente.page';

describe('MakeDocentePage', () => {
  let component: MakeDocentePage;
  let fixture: ComponentFixture<MakeDocentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDocentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
