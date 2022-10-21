import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealsItemForm from './MealsItemForm';
import './MealsItems.css';

const MealsItems = ({name,desc,price,id}) => {
  const ctx = useContext(CartContext);
    const handleAddToCart = (amount)=>{
        ctx.addItem({
          id:id,
          name:name,
          amount:amount,
          price:price,
        });
    }
    
    const priceFormated = `₹${price.toFixed(2)}`;
  return (
    <li className="meal">
        <div>
            <h3>{name}</h3>
            <div className='description'>{desc}</div>
            <div className="price">{priceFormated}</div>
        </div>
        <div>
            <MealsItemForm onAddToCart={handleAddToCart}/>
        </div>
    </li>
  )
}

export default MealsItems