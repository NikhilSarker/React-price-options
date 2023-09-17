import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const prices = [
      {
        "id": 1,
        "name": "Basic Membership",
        "features": [
          "Access to gym facilities",
          "Unlimited cardio equipment usage",
          "Locker room access"
        ],
        "price": 29.99
      },
      {
        "id": 2,
        "name": "Standard Membership",
        "features": [
          "Access to gym facilities",
          "Unlimited cardio equipment usage",
          "Access to group fitness classes",
          "Locker room access"
        ],
        "price": 49.99
      },
      {
        "id": 3,
        "name": "Premium Membership",
        "features": [
          "Access to gym facilities",
          "Unlimited cardio equipment usage",
          "Access to group fitness classes",
          "Access to personal trainers",
          "Locker room access"
        ],
        "price": 79.99
      }
    ]
  
  
  return (
    <div >
      <h2 className="text-4xl font-bold text-center py-10">Best price in the town</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        prices && prices?.map((option, index)=><PriceOption key={index} option={option} ></PriceOption>)
      }
     </div>
      
    </div>
  );
};

export default PriceOptions;