import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenaleatoriaComponent } from './imagenaleatoria.component';

describe('ImagenaleatoriaComponent', () => {
  let component: ImagenaleatoriaComponent;
  let fixture: ComponentFixture<ImagenaleatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenaleatoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenaleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
