
    const transactions = [];

    function addTransaction() {
      const descriptionInput = document.getElementById('description');
      const amountInput = document.getElementById('amount');

      const description = descriptionInput.value;
      const amount = parseFloat(amountInput.value);

      if (description && !isNaN(amount)) {
        transactions.push({ description, amount });
        updateTransactionsList();
        updateTotalAmount();
        descriptionInput.value = '';
        amountInput.value = '';
      }
    }

    function updateTransactionsList() {
      const transactionsList = document.getElementById('transactionsList');
      transactionsList.innerHTML = '';
      transactions.forEach(transaction => {
        const item = document.createElement('div');
        item.textContent = `${transaction.description}: R$ ${transaction.amount.toFixed(2)}`;
        transactionsList.appendChild(item);
      });
    }

    function updateTotalAmount() {
      const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
      document.getElementById('totalAmount').textContent = `R$ ${totalAmount.toFixed(2)}`;
    }
