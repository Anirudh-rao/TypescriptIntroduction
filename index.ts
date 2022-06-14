//1.Basic Types

let  id:Number = 5  //Integers
let company:string =  "EY" //Strings
let isPublished:boolean = true //Boolean
let x:any =  'Hello' //Any depends on Datatype
let age :number  // Declaration and Later Initalization
age= 5

//2.Array
let ids :number[] =  [1,2,3,4,5] //array of Number
ids.push(6) //Push Used to Push elements into the array

let arr: any[] = [1,true,'Hello'] //we cann have a Mixed Array

//3. Tuple - Tuples Store in the Datatype order that we Specify
let person:[number, string, Boolean] = [1,'Brad',true] 

let employee:[number,  string][]
employee =[
    [1,'Brad'],
    [2,'John'],
    [3,'Jill'],
]
//4. Union - Union can be either of the datatype
let pid:string | number 
pid = '22'

//5. Enum - 
enum  Direction1{
    Up, 
    Down, 
    Left,
    Right,
}
console.log(Direction1.Up)

//6. Object: We can Type assert Objects in TypeScript
type user = {
    id:Number,
    name:string
}
const user = {
    id:1,
    name :'John'
}

//7.Type assertion
let cid:any = 1
//Now CustomerId is a Should Be a Number
let customerID =  <number>cid
let customerID2 =  cid as  number



//8.functions:The AddNumber Function Now accepts only Numbers and Return a Number
function addNum(x:number, y:number):number{
    return x+y
}
//We can Specify Void as a return Statement
function log(messaage: string|number):void{
    console.log(messaage)
}

//9.Interface :Similar to Object
interface User {
    //readonly properties can only read 
    readonly id:Number,
    name:string
    //by adding '?' we can say that age is optional
    age ?:number
}
const User:User = {
    id:1,
    name :'John'
}

//11.Classes  with interfaces
interface PersonalUser {
    //readonly properties can only read 
    id:Number,
    name:string
    register() :string
}
class Person2 implements PersonalUser{
    //private will only be accessable inside the class
    id:number
    name:string
    //For the class to work we need Constructor
    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registerd`
    }
}

class Person {
    //private will only be accessable inside the class
    private id:number
    //protected allows only class and its children
    protected name:string
    //For the class to work we need Constructor
    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registerd`
    }
}

//13.Class properties
class Employee extends Person{
    position:string
    constructor(id:number, name:string,position:string){
        //With Super Keyword we can extend Parent Parameters
        super(id,name) 
        this.position  = position
    }
}
const emp = new Employee(2, 'Smith','HR')


//14.Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray =  getArray<number>([1,2,3,4])
let strArray =  getArray<string>(['brad','John','JIll'])

