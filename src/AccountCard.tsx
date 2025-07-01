
import React from "react";

type AccountProps = {
  account: {
    id: number; // changed from string to number
    name: string;
    number: string;
    balance: number;
    type: string;
  };
};

const AccountComponent: React.FC<AccountProps> = ({ account }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h2 className="text-lg font-semibold">{account.name}</h2>
      <p className="text-gray-600">Account ID: {account.id}</p>
      <p className="text-blue-600 font-bold">
        Balance: ₹{account.balance.toLocaleString()}
      </p>
    </div>
  );
};

export default AccountComponent;
