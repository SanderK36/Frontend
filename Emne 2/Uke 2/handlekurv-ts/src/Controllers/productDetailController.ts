import { model } from "../Model/model";
import { updateView } from "../main";
export function showProductDetail(productId) {
  model.app.currentPage = 'product-detail';
  model.view.productDetail.selectedId = productId;
  updateView();
}
