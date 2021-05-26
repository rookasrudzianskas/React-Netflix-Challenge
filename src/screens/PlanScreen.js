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

        </div>
    );
};

export default PlanScreen;
