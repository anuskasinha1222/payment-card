import './App.css';
import SubscriptionCard from './pages/subscription-card';
function App() {
  return (
    <SubscriptionCard />
  );
}

export default App;



// filter sidebar product 



//first step to declare a state to handle the category and price
import React from 'react';
import './style.css';
import Products from './Products'
import Sidebar from './sidebar'
export default function App() {
  const [filters, setFilters] = React.useState({ categories: [], priceRanges: [] });

  const handleFilters = (updatedFilters) => {
    setFilters(updatedFilters);
  };
  return (
    <div className="d-flex">
      <Sidebar handleFilters={handleFilters} />
      <Products filters={filters} />
    </div>
  );
}

//sidebar

import React,{useState} from 'react';

const Sidebar = ({handleFilters}) => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceRangeFilters, setPriceRangeFilters] = useState([]);

  const handleCategoryChange =(category) =>{
    console.log(category,"category")
    const updatedCategories = [...categoryFilters];
    console.log(updatedCategories,"update category before")
    if (updatedCategories.includes(category)) {
      const index = updatedCategories.indexOf(category);
      console.log(index,"index")
      updatedCategories.splice(index, 1);
    } else {
      updatedCategories.push(category);
    }
    setCategoryFilters(updatedCategories);
    console.log(updatedCategories,"update category after")
    handleFilters({categories:updatedCategories, priceRanges:priceRangeFilters})
  }

  const handlePriceRangeChange =(priceRange)=>{
    const updatedPrice = [...priceRangeFilters];
    if(updatedPrice.includes(priceRange)){
      const index = updatedPrice.indexOf(priceRange)
      console.log(index,"price index")
      updatedPrice.splice(index,1)
    }else{
      updatedPrice.push(priceRange)
    }
    console.log(updatedPrice,"price")
    setPriceRangeFilters(updatedPrice)
    handleFilters({categories:categoryFilters, priceRanges:updatedPrice})
  }

  return (
    <div className="sidebar">
      <h5>Filters</h5>
      <label>
        <input
          type="checkbox"
          checked={categoryFilters.includes('phone')}
          onChange={() => handleCategoryChange('phone')}
        />
        Phone
      </label>
      <label>
        <input
          type="checkbox"
          checked={categoryFilters.includes('laptop')}
          onChange={() => handleCategoryChange('laptop')}
        />
        Laptop
      </label>
      <label>
        <input
          type="checkbox"
          checked={categoryFilters.includes('speaker')}
          onChange={() => handleCategoryChange('speaker')}
        />
        Speaker
      </label>
      <h3>Price Range</h3>
      <label>
        <input
          type="checkbox"
          checked={priceRangeFilters.includes('100-500')}
          onChange={() => handlePriceRangeChange('100-500')}
        />
        $100 - $500
      </label>
      <label>
        <input
          type="checkbox"
          checked={priceRangeFilters.includes('500-1000')}
          onChange={() => handlePriceRangeChange('500-1000')}
        />
        $500 - $1000
      </label>
    </div>
  );
};

export default Sidebar;


// procduct component


import React from 'react'
import {Container } from 'react-bootstrap';
import Cards from './Cards'
import {allProducts} from './products'
const Products = ({filters}) =>{
  console.log(filters,"filters data")
  const filteredProducts = allProducts.filter((product) =>(
    filters.categories.length === 0 || filters.categories.includes(product.category)) &&
      (filters.priceRanges.length === 0 || filters.priceRanges.includes(product.priceRange))
  );
  console.log(filteredProducts,"filteredProducts")


  return(
    <div className="products">
      <div className="row">
      {filteredProducts.map((product) => (
        <div className="col-md-4">
          <Cards data={product} />
    </div>
      ))}

    </div>
    </div>
  )
}
export default Products


//card components

import React from 'react';
const Cards = ({ data }) => {
  // console.log(data, 'card data');
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src="https://loremflickr.com/320/240?random"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{data?.name}</h5>
          <p className="card-text">
            Some quick example 
          </p>
          <a href="#" className="btn btn-primary">
            ${data?.price}
          </a>
        </div>
      </div>
    </>
  );
};
export default Cards;


//all products

export const allProducts = 
  [
    { id: 1, name: 'Phone A', category: 'phone', price: 500 },
    { id: 2, name: 'Laptop X', category: 'laptop', price: 1000 },
    { id: 3, name: 'Speaker Y', category: 'speaker', price: 200 },
    { id: 3, name: 'Apple 15 Y', category: 'phone', price: 200 },
    { id: 3, name: 'Speaker Y', category: 'speaker', price: 200 },
  ]



//css
.card {
  max-height: 400px;
  height: 100%;
  margin: 5px;
}
.card .card-img-top{
  height: 200px;
}
img{
  width: 100%;
}
.sidebar{
  flex: 1;
}
.products{
  flex: 4;
}

