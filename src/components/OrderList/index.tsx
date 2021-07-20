import './styles.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Delete from '../../assets/icons/close.svg';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/features/order/oderSlice';

function OrderList(): JSX.Element {
  const orderItems = useSelector((state: RootState) => state.order.items);
  const dispatch = useDispatch();

  return (
    <div className="orderList">
      {orderItems.map((item) => (
        <div className="orderList__item" key={item.id}>
          <img src={item.image} alt="" />
          <div className="description">
            <label htmlFor="" className="description__label">
              {item.quantity}
            </label>
            <span className="description__label">x</span>
            <label htmlFor="" className="description__label">
              {item.name}
            </label>
          </div>
          <label htmlFor="" className="price">
            ${item.total}
          </label>
          <div className="delete">
            <img
              src={Delete}
              alt=""
              onClick={() => dispatch(deleteItem(item))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
