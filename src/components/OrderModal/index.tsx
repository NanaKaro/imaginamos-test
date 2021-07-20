import { useState } from 'react';
import UIModal from 'react-modal';
import './style.scss';
import { IProducts } from '../../services/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/features/order/oderSlice';

UIModal.setAppElement('#root');
interface IModalProps extends UIModal.Props {
  product: IProducts;
}

function Modal({ product, ...rest }: IModalProps): JSX.Element {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const createItemOrder = () => {
    const total = quantity * product.price;
    const orderItem = {
      ...product,
      quantity,
      total,
    };
    return orderItem;
  };
  const add = () => setQuantity(quantity + 1);
  const subtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <UIModal {...rest} className="modal" overlayClassName="modalContainer">
      <div className="modal__body">
        <div className="imageContent">
          <img src={product.image} alt="" />
        </div>
        <div className="textContent">
          <label htmlFor=""> {product.name} </label>

          <div className="counter">
            <button onClick={subtract}>-</button>
            <span>{quantity}</span>
            <button onClick={add}>+</button>
          </div>
        </div>
      </div>
      <div className="modal__footer">
        <button
          onClick={() => dispatch(addItem(createItemOrder()))}
          disabled={quantity <= 0}>
          Hacer pedido
        </button>
      </div>
    </UIModal>
  );
}

export default Modal;
