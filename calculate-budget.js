const calculateBudget = (totalIncome) => {
  if (isNaN(totalIncome) || totalIncome <= 0) {
    alert("Please enter a valid total income.");
    return;
  }

  const percentages = {
    savings: 20,
    personalExpenses: 30,
    monthlyExpenses: 50,
  };

  const budget = {};
  for (const category in percentages) {
    budget[category] = ((totalIncome * percentages[category]) / 100).toFixed(2);
  }

  return budget;
};