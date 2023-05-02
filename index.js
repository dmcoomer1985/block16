 // If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
 // If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
 // At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 


const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


//function for subscription

function subscriptionOnly(costPer, numRefills) {
    if (sarah.subscription == true) {
        return costPer * numRefills - costPer * numRefills * 0.25;
    }
}
const justSub = subscriptionOnly(sarah.pricePerRefill, sarah.refills);
console.log("Your grand total is $" + justSub);

// function for coupon

function withCoupon(costPer, numRefills) {
    if (timmy.coupon == true)  {
        return costPer * numRefills - 10
    }
}

const justCoupon = withCoupon(timmy.pricePerRefill, timmy.refills);
console.log("Your grand total is $" + justCoupon);


//function for both subscription and coupon.

function hasBoth(costPer, numRefills)  {
    if (rocky.coupon == true && rocky.subscription == true) {
        return costPer * numRefills - costPer * numRefills * 0.25 - 10;
    }
}

const doubleDeal = hasBoth(rocky.pricePerRefill, rocky.refills);
console.log("Your grand total is $" + doubleDeal);