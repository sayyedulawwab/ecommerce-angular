import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryEditComponent } from './product-category-edit.component';

describe('ProductCategoryEditComponent', () => {
  let component: ProductCategoryEditComponent;
  let fixture: ComponentFixture<ProductCategoryEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryEditComponent],
    });
    fixture = TestBed.createComponent(ProductCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
