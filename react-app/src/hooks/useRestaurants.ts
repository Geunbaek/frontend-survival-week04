import { useEffect, useState } from 'react';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Restaurant } from '../types';

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response: AxiosResponse<{ restaurants: Restaurant[] }> = await axios.get('http://localhost:3000/restaurants');
      const { data } = response;
      setRestaurants(data.restaurants);
    }
    getRestaurants();
  }, []);

  return restaurants;
}
