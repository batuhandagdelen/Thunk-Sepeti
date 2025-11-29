import React from "react";

const OrderInfo = ({ basket }) => {
  // toplam ürün adedi
  const totalAmount = basket.reduce((total, item) => total + item.amount, 0);

  //toplam fiyatı hesaplama

  const totalPrice = basket.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );

  if (basket.length === 0) return null;

  return (
    <div className="p-5 rounded-md border h-fit md:sticky md:top-0">
      <h2 className="font-semibold text-lg">Sipariş Detayları</h2>
      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Ürün Adedi: </span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Toplam Fiyat:</span>
        <span className="text-lg font-bold text-red-500">
          {totalPrice.toFixed(2)}₺
        </span>
      </p>
    </div>
  );
};

export default OrderInfo;
