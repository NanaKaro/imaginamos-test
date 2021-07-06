import React, {useState} from "react";
import "./styles.scss";
import  Right from "../../assets/icons/right.svg"

function TotalOrder() {
    const [count, setCount] = useState(0);

    const add = () => setCount(count + 1);
    const subtract = () => setCount(count -1);

  return (
    <div className="totalOrder">
        <div className="totalOrder__labels">
            <label htmlFor="" className="total">Total:</label>
            <label htmlFor="" className="priceLabel">$25.97</label>
        </div>
        <hr />

        <div className="totalOrder__counterContainer">
            <div>
                <label htmlFor="">Persons</label>
                <div className="counter">
                    <button onClick={subtract}>-</button>
                    <span>{count}</span>
                    <button onClick={add}>+</button>
                </div>
            </div>
            <div className="checkout">
                <a href="">Checkout</a>
                <img src={Right} alt="" />
            </div>
        </div>
    </div>
  );
}

export default TotalOrder;