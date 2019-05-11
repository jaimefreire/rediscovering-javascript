const purchaseItems = (essential1 = "milk", essential2 = "bread", ...optionals) => {
    return essential1 + ", " + essential2 + ", " + optionals.join(", ")
}

purchaseItems("bread", "milk")
purchaseItems("bread", "milk", "jelly");

const mustHaves = ["bread", "milk"];
const andAlso = ["eggs", "donuts", "tea"];

//call purchaseItems so it prints bread, milk, eggs, donuts, tea
purchaseItems(mustHaves, ...andAlso);

const items=["cheese", "milk"]

purchaseItems("cheese");
purchaseItems(...items);
purchaseItems();

purchaseItems(undefined, undefined, ...andAlso)

