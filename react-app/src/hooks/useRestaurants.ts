import { useEffect, useState } from 'react';
import { Restaurant } from '../types';

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch('http://localhost:3000/restaurants');

      const data: { restaurants: Restaurant[] } = await response.json();
      setRestaurants(data.restaurants);
    }
    getRestaurants();
  }, []);

  return restaurants;
}
