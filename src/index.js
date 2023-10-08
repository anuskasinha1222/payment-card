import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// my map



function myMap(fn){
  
  let self = this;
  res = [];
  console.log(self,"selgf")
  
  for(let i=0; i<self.length; i++){
    res[i]= fn(self[i],i,self)
  }
  return res
  
}

Array.prototype.myMap = myMap;

const newData = [1,2,3,4,5,6].myMap((ele,index)=>{
  return ele*2
})
console.log(newData,"newData")
