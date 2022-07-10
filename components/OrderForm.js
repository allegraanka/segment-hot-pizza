import styles from '../styles/OrderForm.module.css';

const OrderForm = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.formTitle}>Start an order</h1>

            <form action='/api/orderForm' method='POST'>
                <fieldset>
                    <legend>Service Method</legend>
                    <input type='radio' id='delivery' name='serviceMethod' value='delivery' className={styles.input}></input>
                    <label htmlFor='serviceMethod' className={styles.label}>Delivery</label>
                    <input type='radio' id='carryout' name='serviceMethod' value='carryout' className={styles.input}></input>
                    <label htmlFor='serviceMethod' className={styles.label}>Carryout</label>
                </fieldset>

                <div className={styles.locationContainer}>
                    <p>Location</p>
                    <label htmlFor='address' className={styles.label}>Street Address</label>
                    <input type='text' id='address' name='address' className={styles.input}></input>
                    <label htmlFor='city' className={styles.label}>City</label>
                    <input type='text' id='city' name='city' className={styles.input}></input>
                    <label htmlFor='state' className={styles.label}>State</label>
                    <input type='text' id='state' name='state' className={styles.input}></input>
                    <label htmlFor='zip' className={styles.label}>Zip Code</label>
                    <input type='text' id='zip' name='zip' className={styles.input}></input>
                </div>

                <fieldset>
                    <legend>Order Time</legend>
                    <input type='radio' id='now' name='orderTime' value='now' className={styles.input}></input>
                    <label htmlFor='orderTime' className={styles.label}>Now</label>
                    <input type='radio' id='later' name='orderTime' value='later' className={styles.input}></input>
                    <label htmlFor='orderTime' className={styles.label}>Later</label>
                </fieldset>

                <fieldset>
                    <legend>Pizza Size</legend>
                    <input type='radio' name='size' value='small' className={styles.input}></input>
                    <label htmlFor='size' className={styles.label}>Small</label>
                    <input type='radio' name='size' value='medium' className={styles.input}></input>
                    <label htmlFor='size' className={styles.label}>Medium</label>
                    <input type='radio' name='size' value='large' className={styles.input}></input>
                    <label htmlFor='size' className={styles.label}>Large</label>
                </fieldset>

                <fieldset>
                    <legend>Toppings</legend>
                    <input type='checkbox' id='topping' name='toppings' value='pepperoni' className={styles.input}></input>
                    <label htmlFor='topping' className={styles.label}>Pepperoni</label>
                    <input type='checkbox' id='topping' name='toppings' value='mushrooms' className={styles.input}></input>
                    <label htmlFor='topping' className={styles.label}>Mushrooms</label>
                    <input type='checkbox' id='topping' name='toppings' value='sausage' className={styles.input}></input>
                    <label htmlFor='topping' className={styles.label}>Sausage</label>
                    <input type='checkbox' id='topping' name='toppings' value='veganCheese' className={styles.input}></input>
                    <label htmlFor='topping' className={styles.label}>Vegan Cheese</label>
                    <input type='checkbox' id='topping' name='toppings' value='Olives' className={styles.input}></input>
                    <label htmlFor='topping' className={styles.label}>Olives</label>
                </fieldset>

                <input type='submit' value='Checkout' />
            </form>
        </div>
    );
}

export default OrderForm;