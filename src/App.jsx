import React from 'react';
import Card from './Card';

function App() {
  const data = [
    {
      plan: "FREE",
      price: "0",
      duration: "/month",
      user: "Single User",
      userValue: true,
      storage: "5GB",
      storageValue: true,
      project: "Unlimited public Project",
      projectValue: true,
      access: "Community Access",
      accessValue: true,
      private: "Unlimited Private Project",
      privateValue: false,
      support: "Dedicated Phone Support",
      supportValue: false,
      subdomain: "Free Subdomain",
      subdomainValue: false,
      report: "Monthly Status Report",
      reportValue: false
    },
    {
      plan: "PLUS",
      price: "9",
      duration: "/month",
      user: "5 User",
      userValue: true,
      storage: "50GB",
      storageValue: true,
      project: "Unlimited public Project",
      projectValue: true,
      access: "Community Access",
      accessValue: true,
      private: "Unlimited Private Project",
      privateValue: true,
      support: "Dedicated Phone Support",
      supportValue: true,
      subdomain: "Free Subdomain",
      subdomainValue: true,
      report: "Monthly Status Report",
      reportValue: false
    },
    {
      plan: "PRO",
      price: "49",
      duration: "/month",
      user: "Unlimited User",
      userValue: true,
      storage: "150GB",
      storageValue: true,
      project: "Unlimited public Project",
      projectValue: true,
      access: "Community Access",
      accessValue: true,
      private: "Unlimited Private Project",
      privateValue: true,
      support: "Dedicated Phone Support",
      supportValue: true,
      subdomain: "Unlimited Free Subdomain",
      subdomainValue: true,
      report: "Monthly Status Report",
      reportValue: true
    }
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((e, i) => <Card key={i} data={e} />)}
        </div>
      </div>
    </section>
  );
}

export default App;
