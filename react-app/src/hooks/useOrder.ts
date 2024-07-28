import axios from 'axios';

import { useInterval, useLocalStorage } from 'usehooks-ts';

import type { AxiosResponse } from 'axios';
import type { Receipt, RestaurantMenu } from '../types';

interface UseOrderProps {
  menu: RestaurantMenu[];
  totalPrice: number;
}

export default function useOrder() {
  const [receipt, setReceipt] = useLocalStorage<Receipt | null>(
    'receipt',
    null,
  );

  const handleOrder = async ({ menu, totalPrice }: UseOrderProps) => {
    const response: AxiosResponse<Receipt> = await axios.post(
      'http://localhost:3000/orders',
      {
        headers: { 'Content-Type': 'Application/json' },
        body: {
          menu,
          totalPrice,
        },
      },
    );
    const { data } = response;
    setReceipt(data);
  };
  useInterval(
    () => {
      setReceipt(null);
    },
    receipt ? 5000 : null,
  );

  return { receipt, onOrder: handleOrder };
}
