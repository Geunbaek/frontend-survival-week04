import { Restaurant } from '../types';
import MenuRow from './MenuRow';

interface MenuProps {
  filteredRestaurants: Restaurant[];
}

function Menu({ filteredRestaurants }: MenuProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurants.map((restaurant) => (
          <MenuRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}

export default Menu;
