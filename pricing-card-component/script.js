function createCard(title, price, features) {
  const card = document.createElement('div');
  card.classList.add('pricing');
  card.innerHTML = `
    <h2 class="title">${title}</h2>
    <p class="price">${price}</p>
    <ul class="features">
      ${features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <button class="btn">Start Trial</button>
  `;
  card.querySelector('.btn').addEventListener('click', () => {
    alert(`You selected the ${title}!`);
  });
  return card;
}
const plans = [
  { title: 'Basic Plan', price: '$9.99 / month', features: ['1 GB Storage', 'Basic Support', 'All Core Features'] },
  { title: 'Pro Plan', price: '$19.99 / month', features: ['10 GB Storage', 'Priority Support', 'Advanced Analytics'] },
  { title: 'Premium Plan', price: '$29.99 / month', features: ['Unlimited Storage', '24/7 Support', 'Team Management'] },
];
const container = document.getElementById('pricing-cards');
plans.forEach(plan => container.appendChild(createCard(plan.title, plan.price, plan.features)));
