import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSomosComponent } from './pagina-somos.component';

describe('PaginaSomosComponent', () => {
  let component: PaginaSomosComponent;
  let fixture: ComponentFixture<PaginaSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSomosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
