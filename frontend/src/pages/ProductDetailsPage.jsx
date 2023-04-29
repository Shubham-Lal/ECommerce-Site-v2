import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProductDetails from '../components/Products/ProductDetails';
import { useParams } from 'react-router-dom';
import { productData } from '../static/data';

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const product = productData.find((item) => item.name === productName);
    setProduct(product);
  }, [productName]);

  return (
    <div>
      <Header />
      <ProductDetails product={product} />
      <Footer />
    </div>
  )
}

export default ProductDetailsPage