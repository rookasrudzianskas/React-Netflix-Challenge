import React, {useEffect, useState} from 'react';
import "./PlanScreen.css";
import db from "../firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userReducer";
import { loadStripe } from "@stripe/stripe-js";
import userEvent from "@testing-library/user-event";

const PlanScreen = () => {

    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        db.collection('customers')
            .doc(user.uid)
            .collection('subscriptions')
            .get()
            .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                });
            });
        });
    }, [user.uid]);

    console.log("HAHAHAHA", subscription);

    useEffect(() => {
        // run once component loads
        // console.log("ENTERERD")

        // this forms the object, we can use anywhere else in the app
        db.collection("products")
            .where('active', '==', true)
            .get()
            .then((querySnapshot) => {
            const products = {};
            // we add the products to the object in here
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                // prices stuff goes in here
                const priceSnap = await productDoc.ref.collection('prices').get();

                // setting the price, if there are another prices,so basically it creates another object inside the object
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data(),
                    }
                })
            });

            setProducts(products)
        });
    }, []);

    console.log(products);

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers').doc(user.uid).collection('checkout_sessions').add({
            price: priceId,
            // if something happens, if success happens, or cancel, there are urls, where to get back, and the pages, are the current pages
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
        // takes a snapshot of the database, then it changes
        docRef.onSnapshot(async (snap) => {
            // we get an error and session id from the snapshot, and more others, but in here desctructure just these things back
            const { error, sessionId } = snap.data();

            if(error) {
                // show an error tu customer and
                // inspect your Cloud Function logs in the firebase console!
                alert(`An error occurred: ${error.message}`);
            }

            // if everything is okay, moving forward
            if(sessionId) {
                // we have a session, lets redirect user to checkout
                // init stripe
                // publishable key in here
                // or test key or live key
                const stripe = await loadStripe('pk_test_51IvKvMGWvMfC58SnUOzdvr8MQvjU2MXVB4f5yj6OObGM0AGXuQ9PbhKXq9T0AZ7pykYqdI2XoWEg6ia1yki0a5BP00Oy3n0tfx');
                // redirects to the checkout screen
                await stripe.redirectToCheckout({sessionId});
            }
        });
    };


    return (
        <div className="plansScreen">
            <br/>
            {subscription &&<p className="plansScreen__p">Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()} </p>}
             {/*list all the objects, will gitve array, with keys and values*/}
            {Object.entries(products).map(([productId, productData]) => {
                // add some logic to check if the users subscription is active

                const isCurrentPackage = productData.name
                    ?.toLowerCase()
                    .includes(subscription?.role);
                console.log(productData.name.toLowerCase());
                console.log(subscription?.role.toLowerCase());

                return (
                    <div key={productId} className={`${isCurrentPackage  && 'planScreen__plan--disabled'} plansScreen__plan `}>
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? "Current Package" : "Subscribe"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default PlanScreen;
