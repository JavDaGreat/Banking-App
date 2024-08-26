import HeaderSection from "@/components/HeaderSection";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Javad",
    lastName: "S.",
    email: "jav@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderSection
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1240.1}
        />
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
}

export default Home;