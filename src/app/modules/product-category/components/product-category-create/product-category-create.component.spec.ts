import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCreateComponent } from './product-category-create.component';

describe('ProductCategoryCreateComponent', () => {
  let component: ProductCategoryCreateComponent;
  let fixture: ComponentFixture<ProductCategoryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryCreateComponent],
    });
    fixture = TestBed.createComponent(ProductCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
