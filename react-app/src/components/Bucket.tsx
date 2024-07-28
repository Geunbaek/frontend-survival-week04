import { useLocalStorage } from 'usehooks-ts';
import { RestaurantMenu } from '../types';
import BucketItem from './BucketItem';
import useOrder from '../hooks/useOrder';

function Bucket() {
  const [menus, setMenus] = useLocalStorage<RestaurantMenu[]>('buckets', []);
  const total = menus.reduce((acc, menu) => acc + menu.price, 0);

  const { onOrder } = useOrder();

  const handleRemoveBucket = (menuId: string, index1: number) => {
    const removedButckets = menus.filter(
      (menu, index2) => !(menu.id === menuId && index1 === index2),
    );
    setMenus(removedButckets);
  };

  const handleOrder = () => {
    onOrder({ menu: menus, totalPrice: total });
    setMenus([]);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      {menus.map((menu, index) => (
        <BucketItem
          key={menu.id}
          restaurantMenu={menu}
          onRemove={() => handleRemoveBucket(menu.id, index)}
        />
      ))}
      <button type="button" onClick={handleOrder}>
        합계:
        {' '}
        {total.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

export default Bucket;
