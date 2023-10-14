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

//triangle
// import React from 'react';

// const Circle = () => {
//   return <div className="circle"></div>;
// };

// const Triangle = () => {
//   const numRows = 10; // Number of rows for the triangle
//   const circlesPerRow = [1,2,3, 4, 5, 6, 7, 8, 9, 10,10,9,8,7,6,5,4,3,2,1]; // Circles for each row

//   return (
//     <div className="triangle">
//       {circlesPerRow.map((count, rowIndex) => (
//         <div key={rowIndex} className="row">
//           {[...Array(count)].map((_, circleIndex) => (
//             <Circle key={circleIndex} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Triangle;
import React from 'react';

const Circle = () => {
  return <div className="circle"></div>;
};

const Triangle = () => {
  const numRows = 10; // Number of rows for the triangle
  const triangleRows = [];

  for (let i = 1; i <= numRows; i++) {
    const row = [];
    for (let j = 1; j <= i + 2; j++) {
      row.push(<Circle key={j} />);
    }
    triangleRows.push(
      <div key={i} className="row">
        {row}
      </div>
    );
  }

  return <div className="triangle">{triangleRows}</div>;
};

export default Triangle;


