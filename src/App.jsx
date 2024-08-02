import React from 'react';
import './App.css';

const plans = [
  {
    name: 'Free',
    price: '$0/month',
    features: {
      'Single user': true,
      '50GB storage': true,
      'Unlimited Public Projects': true,
      'Community Access': true,
      'Unlimited Private Projects': false,
      'Dedicated Phone Support': false,
      'Free Subscription': false,
      'Monthly Status Reports': false
    }
  },
  {
    name: 'Plus',
    price: '$9/month',
    features: {
      'Single user': true,
      '100GB storage': true,
      'Unlimited Public Projects': true,
      'Community Access': true,
      'Unlimited Private Projects': true,
      'Dedicated Phone Support': true,
      'Free Subscription': true,
      'Monthly Status Reports': true
    }
  },
  {
    name: 'Pro',
    price: '$29/month',
    features: {
      'Single user': true,
      '1TB storage': true,
      'Unlimited Public Projects': true,
      'Community Access': true,
      'Unlimited Private Projects': true,
      'Dedicated Phone Support': true,
      'Free Subscription': true,
      'Monthly Status Reports': true
    }
  }
];

function App() {
  const renderFeature = (feature, isAvailable) => (
    <li className="feature-item" key={feature}>
      {isAvailable ? '✓' : '✗'} {feature}
    </li>
  );

  return (
    <div className="main-container">
      <h1 className="text-center">Subscription Plans</h1>
      <div className="card-wrapper">
        {plans.map(plan => (
          <div className={`card ${plan.name.toLowerCase()}`} key={plan.name}>
            <div className="card-body">
              <h2 className="card-title">{plan.name}</h2>
              <p className="card-price">{plan.price}</p>
              <ul className="feature-list">
                {Object.entries(plan.features).map(([feature, isAvailable]) =>
                  renderFeature(feature, isAvailable)
                )}
              </ul>
              <button className="btn">Button</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
