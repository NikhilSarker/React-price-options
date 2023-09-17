import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
  // console.log(option);
  const {name, features, price } = option;
  return (
    <div className='bg-gray-400 p-5 rounded-lg flex flex-col'>
      <h2 className='text-center'>
        
        <span className='text-5xl font-bold'>{price}</span>
        <span className='text-2xl '>/month</span>
      </h2>
      <h3 className='text-3xl pt-3 text-center'>{name}  </h3>
      <div className='pl-24 flex-grow'>
      {
        features.map((feature, index)=> <Feature key={index} feature={feature}></Feature>)
      }
      </div>
      <button className='btn btn-accent w-full rounded-lg my-10'>Buy Now</button>
      
    </div>
  );
};

PriceOption.propTypes = {
  option:PropTypes.object.isRequired
}

export default PriceOption;