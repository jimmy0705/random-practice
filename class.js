
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, 'Reed');

console.log(Object.getPrototypeOf(student1).constructor);

// console.log(Object.getPrototypeOf(Student).constructor);


class Student2 {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;      
  }  
    
  getStudentName() {
    return `Student: ${this.name}`  
  }
    
  addSubject() {}  
}

const student3 = new Student2(1, 'Reed');
// console.log(student3.getStudentName());


class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
     super(name, price, discountable);
     this.percentOff = percentOff; 
  }  
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(product1)