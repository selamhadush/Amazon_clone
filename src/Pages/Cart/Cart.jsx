import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut.JSx";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./cart.module.css";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shoping Basket</h3>
          <hr />
          <div>
            {basket.length === 0 ? (
              <p>Opps ! No item in your cart</p>
            ) : (
              basket?.map((item, i) => (
                <ProductCard
                  key={i}
                  renderAdd={false}
                  product={item}
                  renderDesc={true}
                  flex={true}
                />
              ))
            )}
          </div>
        </div>
        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link rel="stylesheet" to="/payment">
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
