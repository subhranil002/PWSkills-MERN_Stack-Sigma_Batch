let deposit = (customer, money) => {
    console.log("\n");
    console.log(`Got a request from ${customer.name} to deposit ${money}Rs`);
    customer.balance += money;
    console.log(`Money Deposit Successful for ${customer.name}`);
    console.log("\n");
}

let withdrawl = (customer, money) => {
    console.log("\n");
    console.log(`Got a request from ${customer.name} to Withdrawl ${money}Rs`);
    if (customer.balance < money) {
        console.log("Insufficient Balance");
        console.log("\n");
    }
    else {
        customer.balance -= money;
        console.log(`Money Withdrawl Successful for ${customer.name}`);
        console.log("\n");
    }
}

let showBalance = (customer) => {
    console.log("\n");
    console.log(`${customer.name}'s Bank Balance = ${customer.balance}`);
    console.log("\n");
}

let bank = (customer, action, money) => {
    switch (action) {
        case "deposit":
            deposit(customer, money);
            break;

        case "withdrawl":
            withdrawl(customer, money);
            break;

        case "showBalance":
            showBalance(customer);
            break;
    
        default:
            console.log("Invalid Action");
            break;
    }
}

let customer1 = {name: "Subhranil", balance: 5000};
bank(customer1, "showBalance");
bank(customer1, "deposit", 4000);
bank(customer1, "showBalance");
bank(customer1, "withdrawl", 3000);
bank(customer1, "showBalance");