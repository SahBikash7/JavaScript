const accountId = 1234567;
let accountEmail = "Bikash@google.com";
var accountPass = "Bikash#234";
accountCity = "KTM";
let accountState;

// accountId=3456789; Not allowed since we cannot change constant..

accountEmail = "Ayush@google.com";
accountPass = "Ayush#234";
accountCity = "Lalitpur";

console.table([
  accountId,
  accountEmail,
  accountPass,
  accountCity,
  accountState,
]);

/* 1.OK so we can reassign let and var but prefer not using var because of issue in block scope and functional scope..
2.Also even if we don't use any keyword to declare any variable, it will store the value but this not a good practice..
3.Also variable define garera matrai rakhdim bhane the value stored in it is undefined..*/
