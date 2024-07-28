import { useInterval, useLocalStorage } from 'usehooks-ts';
import { Receipt, RestaurantMenu } from '../types';

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
    const response = await fetch('http://localhost:3000/orders', {
      headers: { 'Content-Type': 'Application/json' },
      method: 'POST',
      body: JSON.stringify({
        menu,
        totalPrice,
      }),
    });

    const data: Receipt = await response.json();
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
