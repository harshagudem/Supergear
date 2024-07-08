import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { config } from '../../config';
import { getData } from '../lib';
import Loading from '../Componenets/Loading';
import CategoryFilters from '../Componenets/CategoryFilters';
import ProductCard from '../Componenets/ProductCard';
import { ProductProps } from './../../type';

function Category() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}categories/${id}`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const formtaId= (id:string)=>{
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  }
  return (
    <div>
      {loading ? <Loading/>: 
      <div>
        <h2 className='text-4xl text-center font-semibold mb-5'>{formtaId(id!)}</h2>
        <div className='flex items-start gap-10'>
          <CategoryFilters id={id}/>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {products.map((item:ProductProps)=>(
              <ProductCard item ={item} key = {item?._id}/>
            ))}
            
          </div>
          
        </div>
      </div>}
    </div>
  )
}

export default Category