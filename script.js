document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  // Load expenses from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Function to calculate total
  function calculateTotal() {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
  }

  // Function to update total display
  function updateTotal() {
    const total = calculateTotal();
    totalAmountDisplay.textContent = total.toFixed(2);
  }

  // Function to save expenses to local storage
  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Function to add a single expense to the DOM
  function addExpenseToDOM(expense) {
    const li = document.createElement("li");
    li.setAttribute("data-id", expense.id); // Set data-id for easy deletion

    li.innerHTML = `
      <div class="expense-info">
        <span>${expense.name} - $${expense.amount.toFixed(2)}</span>
        <span class="expense-date">${expense.date}</span>
      </div>
      <button class="delete-btn">Delete</button>
    `;
    expenseList.appendChild(li);
  }

  // Function to render all expenses on initial load
  function renderExpenses() {
    expenseList.innerHTML = ""; // Clear existing list
    expenses.forEach((expense) => {
      addExpenseToDOM(expense);
    });
  }

  // --- Event Listeners ---

  // Handle form submission
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && amount > 0 && !isNaN(amount)) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        date: new Date().toLocaleDateString(), // Add the current date
      };

      // Update data, DOM, and local storage
      expenses.push(newExpense);
      addExpenseToDOM(newExpense); // Add only the new one to the DOM
      saveExpensesToLocal();
      updateTotal();

      // Clear input
      expenseAmountInput.value = "";
      expenseNameInput.value = "";
      expenseNameInput.focus();
    }
  });

  // Handle deleting expenses (using event delegation)
  expenseList.addEventListener("click", (e) => {
    // Check if the clicked element is a delete button
    if (e.target.classList.contains("delete-btn")) {
      const li = e.target.closest("li");
      const expenseID = parseInt(li.getAttribute("data-id"));

      // Update data
      expenses = expenses.filter((expense) => expense.id !== expenseID);

      // Update local storage
      saveExpensesToLocal();

      // Update DOM (remove the li directly)
      li.remove();

      // Update total
      updateTotal();
    }
  });

  // --- Initial Page Load ---
  renderExpenses();
  updateTotal(); // Calculate total on page load
});