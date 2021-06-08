import Types from "../consts";
import { initialState } from "./initialState";

interface IActionProps {
  type: string;
  payload: any
}

export default function config(
  state = initialState,
  action: IActionProps
) {
  if (action.type === Types.SET_PRODUCTS_CART) {
    console.log('Chegou aqui ', action);
    return {
      ...state,
      produtos: action.payload
    }
  }


  return state;
}
