
import React from "react";

type Card = {
  id: number;
  type: string;
  number: string;
  holder: string;
  expiry: string;
  bank: string;
};

type CardProps = {
  card: Card;
};

const CardComponent: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg mb-6 w-full max-w-md mx-auto transform hover:scale-[1.02] transition duration-300">
      <div className="flex justify-between mb-4">
        <span className="uppercase text-sm font-semibold">{card.type} Card</span>
        <span className="text-sm">{card.expiry}</span>
      </div>
      <h3 className="text-lg font-semibold tracking-widest">{card.number}</h3>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-xs">Card Holder</p>
          <p className="font-medium">{card.holder}</p>
        </div>
        <p className="text-sm italic">{card.bank}</p>
      </div>
    </div>
  );
};

export default CardComponent;
