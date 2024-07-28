import { RestaurantMenu } from '../types';

interface BucketItemProps {
  restaurantMenu: RestaurantMenu;
  onRemove: () => void;
}

function BucketItem({ restaurantMenu, onRemove }: BucketItemProps) {
  const { name, price } = restaurantMenu;
  return (
    <>
      <p>{`${name}(${price.toLocaleString()}원)`}</p>
      <button type="button" onClick={onRemove}>
        취소
      </button>
    </>
  );
}

export default BucketItem;
