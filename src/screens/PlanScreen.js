import React, {useEffect, useState} from 'react';
import "./PlanScreen.css";
import db from "../firebase";

const PlanScreen = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        // run once component loads
        console.log("ENTERERD")

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

    return (
        <div className="plansScreen">
            {/* list all the objects, will gitve array, with keys and values*/}
            {Object.entries(products).map(([productId, productData]) => {
                // add some logic to check if the users subscription is active
                return (
                    <div className="plansScreen__plan">
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button>
                            Subscribe
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default PlanScreen;
