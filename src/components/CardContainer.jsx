import React from "react";
import { data } from "../data/data";
import Cards from "./Cards";
import Noitem from "./Noitem";

const CardContainer = (props) => {
  // const filteredProducts = data.filter(data => {
  //   if (props.type && data.type !== props.type){
  //     return false
  //   }
  //   if (props.location && data.location !== props.location){
  //     return false
  //   }
  //   if(!(data.price >= props.price.min && data.price <= props.price.max)){
  //     return false
  //   }
  //   if(props.feet && String(data.feet ) !== props.feet){
  //     return false
  //   }
  //   if( !(data.name.toLowerCase().includes(props.search.toLowerCase()))){
  //     return false
  //   }
  //   return true
  // })
  const filteredProducts = data.filter((product) => {
    const filters = [
      () => !props.type || product.type === props.type,
      () => !props.location || product.location === props.location,
      () =>
        !props.price ||
        (product.price >= props.price.min && product.price <= props.price.max),
      () => !props.feet || String(product.feet) === props.feet,
      () =>
        !props.search ||
        product.name.toLowerCase().includes(props.search.toLowerCase()),
    ];

    return filters.every((filter) => filter());
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {filteredProducts.length !== 0 ?
            filteredProducts.map((card) => (  
            <Cards
              price={card.price}
              name={card.name}
              location={card.location}
              property={card.property}
              type={card.type}
              feet={card.feet}
              img={card.img}
            />
          )) : 
          <Noitem />
          }
        </div>
      </div>
    </>
  );
};

export default CardContainer;
