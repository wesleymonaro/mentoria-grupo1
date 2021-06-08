import Types from "../consts";

export const ActionCreators = {
  addProductsToRedux: (produtos: any[]) => ({
    type: Types.SET_PRODUCTS_CART,
    payload: produtos
  }),
}
