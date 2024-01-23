//id , brand , model , type , pricePerDay, available
 carBooking =[
        [1,'Toyota','Corolla','Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'SportsCar', 80 ,5],
        [4,'Jeep', 'Wrangler', 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan',45,12]
]


//1)print all car brands
console.log(`All car brands`);
carBooking.forEach(item => {
    console.log(item[1]);
});
console.log(`---------------------`);
//2)print total number of cars available
console.log(`total number of cars available`);
console.log(carBooking.length);

console.log(`---------------------`);
//3)print sedan car details
console.log(`details of sedan`);
carBooking.filter((item)=>item[3]=='Sedan').forEach(car=>console.log(car))

console.log(`---------------------`);
//4)print cars with price per day greater than 60
console.log(`car with price per day greater than 60`);
carBooking.filter((item)=>item[4]>60).forEach(item=>console.log(item[1]))

console.log(`---------------------`);
//5)print details of 'jeep wrangler'
console.log(`details of jeep wrangler`);
carBooking.filter((item)=>item[1]=='Jeep').forEach(car=>console.log(car))

console.log(`---------------------`);
//6)sort cars based on descending order of price per day
console.log(`cars based on descending order of price per day`);
carBooking.sort((item1,item2)=>item2[4]-item1[4]).forEach(item=>console.log(item[1]))

console.log(`---------------------`);
//7)sort cars based on ascending order of available car
console.log(`cars based on ascending order of availability`);
carBooking.sort((item1,item2)=>item1[5]-item2[5]).forEach(item=>console.log(item[1]))

console.log(`---------------------`);
//8)find the car  the most availability
console.log(`car which has most availability`);
av=carBooking.reduce((item1,item2)=>item1[5]>item2[5]?item1:item2);
console.log(av[1]);

console.log(`---------------------`);
//9)calculate the revenue if all cars are rented for a day
console.log(`revenue of all cars are rented for a day`);
revenue = carBooking.map(item=>item[4]).reduce((pri1,pri2)=>pri1+pri2)
console.log(revenue);

console.log(`---------------------`);
//10)count the numbr of sedan cars
console.log(`number of sedan car`);
sedan=carBooking.filter((item)=>item[3]=='Sedan')
console.log(sedan.length);

console.log(`---------------------`);
//11)print all car brands
console.log(`all car brands`);
carBooking.forEach(item => {
    console.log(item[1]);
});

console.log(`---------------------`);
//12)find the total number of available cars for all type(total no of available cAR)
console.log(`number of available cars`);
availability = carBooking.map(item=>item[5]).reduce((av1,av2)=>av1+av2)
console.log(availability);

console.log(`---------------------`);
//13)find THE CAR WITH least availability
console.log(`The car with least availability`);
least=carBooking.reduce((item1,item2)=>item1[5]<item2[5]?item1:item2);
console.log(least[1]);


console.log(`---------------------`);
//14)check if there is any car with a price per day exactly 55
console.log(`is any car with a price per day exactly 55`);
price=carBooking.some(item=>item[4]=55)
console.log(price?'yes':'no');