
import React from "react";

type Payment = {
  id: number;
  date: string;
  recipient: string;
  amount: number;
  status: string;
  method: string;
};

type PaymentsProps = {
  payment: Payment;
};

const PaymentsComponent: React.FC<PaymentsProps> = ({ payment }) => {
  return (
    <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-lg shadow-sm transition hover:shadow-md">
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <h3 className="text-base font-medium text-indigo-800">
            {payment.recipient}
          </h3>
          <p className="text-sm text-gray-600">Method: {payment.method}</p>
        </div>
      
        <div className="text-right">
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
              payment.status === "Completed"
                ? "bg-green-200 text-green-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {payment.status}
          </span>
          <p className="text-sm text-gray-600">Date: {payment.date}</p>
        </div>
      </div>
      <div className="mt-2 text-right text-indigo-700 font-bold text-lg">
        ₹{payment.amount.toLocaleString()}
      </div>
    </div>
  );
};

export default PaymentsComponent;
