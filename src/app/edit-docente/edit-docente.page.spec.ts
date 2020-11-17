import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDocentePage } from './edit-docente.page';

describe('EditDocentePage', () => {
  let component: EditDocentePage;
  let fixture: ComponentFixture<EditDocentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDocentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
