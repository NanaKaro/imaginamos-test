import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../../../services/products'

export interface OrderItem extends IProducts {
  quantity: number;
  total: number;
}

export interface OrderState {
  readonly items: OrderItem[];
  readonly total: number;
}

const initialState: OrderState = {
  items: [],
  total: 0
}

function getTotal(orderItems: OrderItem[]) {
  const total = orderItems.reduce((accumulator, item) => {
    return accumulator += item.total
  }, 0)
  return total
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<OrderItem>) => {
      const { payload } = action;
      state.items.push(payload);
      state.total = getTotal(state.items);
    },
    deleteItem: (state, action: PayloadAction<OrderItem>) => {
      const { payload } = action;
      state.items = state.items.filter(items => items.id !== payload.id);
      state.total = getTotal(state.items);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = orderSlice.actions

export default orderSlice.reducer