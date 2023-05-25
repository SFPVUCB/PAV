const username = 'Sergio'
const sum = (a:number,b: number) =>
{
  return a+b;
}
sum (1,2);

class Person
{
  private age: number;
  lastName: string;

  constructor(age:number,lastName:string)
  {
    this.age =age;
    this.lastName=lastName;
  }
}
const persona = new Person(1,'Prudencio');
