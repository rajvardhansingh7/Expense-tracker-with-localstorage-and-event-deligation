# 💰 Expense Tracker

A simple and responsive **Expense Tracker** built with **HTML, CSS, and JavaScript**.  
It allows users to add, delete, and persist expenses using **Local Storage**, all in a clean, dark-themed interface.

---

## 🚀 Features

- 🧾 Add new expenses with name, amount, and date  
- 💾 Automatically saves data in browser local storage  
- ❌ Delete individual expenses easily  
- 📊 Displays running total of all expenses  
- 🌙 Modern dark UI design  

---

## 🖥️ Demo

![Expense Tracker Demo](demo.png)

---

## 🧩 Project Structure

expense-tracker/

│
├── index.html # Main HTML file (app structure)
├── styles.css # Styling (dark theme + animations)
├── script.js # Functionality (add/delete, local storage)
└── README.md # Project documentation

---

## ⚙️ How to Run

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
Open index.html in your browser:

bash
Copy code
open index.html
(or simply double-click the file)

Start adding your expenses!

🧠 How It Works
When a user adds an expense, it’s stored in local storage.

On reload, the script retrieves stored data and re-renders the expense list.

Total is auto-calculated based on the current list.

