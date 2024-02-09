const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// Exercises :
// 1) Get a list of the orders(items) for the customer with the ID 234 that have not been delivered.
const orderList = [];

orders
  .filter((eachOrder) => eachOrder.customerId === "234" && !eachOrder.delivered)
  .map((filteredOrders) => orderList.push(...filteredOrders.items));
console.log(orderList);

// 2) Create a new property on each order with the total price of items ordered.

// If u want to manipulate The Original Array :
// orders.map(
//   (eachOrder) =>
//     (eachOrder.totalPrice = eachOrder.items.reduce(
//       (acc, curr) => acc + curr.price,
//       0
//     ))
// );
// console.log(orders);

// If u don't wanna manipulate The Original Array :
const newOrders = orders.map((eachOrder) => ({
  ...eachOrder,
  totalPrice: eachOrder.items.reduce((acc, curr) => acc + curr.price, 0),
}));
console.log(newOrders);

// 3) Have all the orders been delivered?
const isAllOrdersDelievered = orders.every((eachOrder) => eachOrder.delivered);
console.log(isAllOrdersDelievered);

// 4) Has the customer with ID '123' made any orders?
const isAnyOrderPlaceBy123 = orders.some(
  (eachOrder) => eachOrder.customerId === "123" && eachOrder.items.length > 0
);
console.log(isAnyOrderPlaceBy123);

// 5) Have any products with an id of 123 been sold?
const isProductSold = orders.some(
  (eachOrder) =>
    eachOrder.delivered &&
    eachOrder.items.some((eachItem) => eachItem.productId === "123")
);
console.log(isProductSold);
