const express = require('express');
const router = express.Router();

let transactions = [
	{
		id: 1,
		type: "deposit",
		account: "checking",
		amount: "100",
	},
	{
		id: 2,
		type: "deposit",
		account: "checking",
		amount: "200",
	},
];

router.get('/', async (req, res) => {
    res.json(transactions);
    // res.redirect('/transactions/hey');
})

router.get('/hey', (req, res) => {
    res.json({ hey: "hello" });
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const { account, type, amount } = req.body;
    const id = transactions.length + 1;
    const transaction = {
        id,
        account,
        type,
        amount
    }
    transactions.push(transaction);
    res.json(transaction);
});

module.exports = router;