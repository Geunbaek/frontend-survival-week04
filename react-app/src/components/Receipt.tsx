import useOrder from '../hooks/useOrder';

function Receipt() {
  const { receipt } = useOrder();
  return (
    <div>
      [영수증 나오는 곳]
      {receipt && (
        <>
          <div>영수증</div>
          <div>
            주문번호:
            {receipt.id}
          </div>
          <div>
            주문목록:
            <ul>
              {receipt.menu.map((restaurant) => (
                <li key={restaurant.id}>
                  {restaurant.name}
                  {restaurant.price.toLocaleString()}
                  원
                </li>
              ))}
            </ul>
          </div>
          <div>{`총 가격: ${receipt.totalPrice.toLocaleString()}원`}</div>
        </>
      )}
    </div>
  );
}

export default Receipt;
