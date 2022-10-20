let person = {
 name: "pursalane",
 age: 11, 
 gender: "Female",
 haircolor: "Black",
personality: "Not Existant",
};

for (const propertyName in person) {
 const value = person[propertyName];
 console.log(propertyName, value);
}