import { useState } from 'react';
import Header from './components/Header';
import Bucket from './components/Bucket';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import Menu from './components/Menu';
import Receipt from './components/Receipt';
import useRestaurants from './hooks/useRestaurants';
import { Category, Restaurant } from './types';

export default function App() {
  const restaurants = useRestaurants();
  const [filterText, setFilterText] = useState('');
  const [filter, setFilter] = useState<Category>('전체');

  const isFilteredRestaurant = (restaurant: Restaurant) => {
    if (filter === '전체') {
      return true;
    }
    return restaurant.category === filter;
  };

  const filterRestaurantName = (restaurant: Restaurant) => {
    const trimedValue = filterText.trim();
    return restaurant.name.includes(trimedValue);
  };

  const filteredRestaurants: Restaurant[] = restaurants
    .filter(isFilteredRestaurant)
    .filter(filterRestaurantName);

  return (
    <main>
      <Header title="푸드코트 키오스크" />
      <Bucket />
      <SearchBar value={filterText} setValue={setFilterText} />
      <FilterButtons setFilter={setFilter} />
      <Menu filteredRestaurants={filteredRestaurants} />
      <Receipt />
    </main>
  );
}
