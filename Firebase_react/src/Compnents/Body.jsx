import React, { useState, useEffect } from 'react';
import './Body.css';
// import Button from './Button';

import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import TransitionsModal from './Modal';



const Body = () => {


  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
      const unsub = onSnapshot(collection(db, 'products'), (snapshot) => {
          const tempArr = [];
          snapshot.forEach((doc) => {
              tempArr.push({ ...doc.data(), id: doc.id });
          });
          setAllProducts(tempArr);
      });

      return () => unsub();
  }, []);

  // const openModal = () => {
  //     setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //     setIsModalOpen(false);
  // };




  return (
    <>
 
   

            <div className="productsCard">
                {allProducts.map((product) => (
                    <div key={product.id} className="productCard">
              
      
                        <h2 className="productTitle">{product.productName}</h2>
                        <h4 className="productPrice">Price: {product.productPrice}</h4>
                        <p className="productDescription">Description: {product.productDesc}</p>
                    </div>
                ))}
            </div>
        

    
        
      
    </>
  );
}

export default Body;

