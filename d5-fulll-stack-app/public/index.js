window.addEventListener("DOMContentLoaded", (e) => {
	const form = document.querySelector("form");
	form.addEventListener("submit", transaction);

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetApp);
});

async function transaction(e) {
	e.preventDefault();
	const type = document.getElementById("transaction-type").value;
	const amount = document.getElementById("transaction-amount").value;
	const account = document.getElementById("transaction-account").value;
	console.log(type, amount, account);
	// Configure fetch request to send values
	const res = await fetch("/transactions", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ type, amount, account }),
	});

	createTransaction({ type, amount, account, id: 1 });
	if (res.ok) {
		const transaction = await res.json();
	}

	const error = document.getElementById("error");
}

async function resetApp() {
	const res = await fetch("/reset");
}

async function initialLoad() {
	const res = await fetch("/transactions");

	const transactions = await res.json();

    if (transactions.length > 0) {
        const transactionList = document.getElementById('transaction-list');
        transactionList.innerHTML = ""
    }

	transactions.forEach((transaction) => {
		createTransaction(transaction);
	});
}

function createTransaction(transaction) {
	const transactionList = document.getElementById("transaction-list");
	const transactionDiv = document.createElement("div");
	transactionDiv.addEventListener("click", async (e) => {
		if (
			confirm(`Delete the transaction:
        ${transaction.account} - ${transaction.type} - ${transaction.amount}`)
		) {
			const res = await fetch("/transactions", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});

            if (res.ok) {
                const transactionId = await res.json();
                const doomedTransaction = document.querySelector(`div[data-id=${transactionId}]`);
                doomedTransaction.remove();
            }
		}
	});
	transactionDiv.setAttribute("data-id", transaction.id);
	transactionDiv.innerText = `${transaction.account} - ${transaction.type} - ${transaction.amount}`;
	transactionList.append(transactionDiv);
}
