import React, { useState } from "react";

import { accounts , payments , cards} from "./data";
import AccountComponent from "./AccountCard";
import PaymentsComponent from "./PaymentsComponent";
import CardComponent from "./CardComponent";
import TransactionTable from "./TransactionComponent";

const tabs = ["Accounts", "Payments", "Cards", "Transactions"];

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Accounts");

  const renderContent = () => {
    switch (activeTab) {
      case "Accounts":
        return <div className="p-6 text-lg"> {accounts.map((account) => (
          <AccountComponent key={account.id} account={account} />
        ))}</div>;
      case "Payments":
        return <div className="p-6 text-lg"><div className="p-6">{payments.map((payment) => (
          <PaymentsComponent key={payment.id} payment={payment} />
        ))}</div>
        </div>;
      case "Cards":
        return <div className="p-6 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </div>;
      case "Transactions":
        return <div className="p-6 text-lg"><TransactionTable /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-500 text-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Welcome, Bhagya!</h1>
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium rounded transition ${
                  activeTab === tab
                    ? "bg-blue-700 text-white"
                    : "text-white hover:bg-blue-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-6">{renderContent()}</main>
    </div>
  );
};

export default MainContent;
