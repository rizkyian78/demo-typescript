
const angka: number = 12
console.log(angka)
const huruf: string = 'halo'
console.log(huruf)
let masih = 0

interface MyObject{
    firstName: string
    lastName: string

}

type AddFunction = (x: number, y: number) => number

class Person {
    public walk(firstName: string,lastName: string ) {
        return `${firstName} ${lastName}`
    }
    public showPassword(value: string) {
        return this.password(value)
    }
    private password(code: string) {
        return `${code} ini password`
    }
}

const add = (x: number, y: number): number => {
    return x + y
}

const add2 = (nums: {a: number, b:number}): number => {
    return nums.a + nums.b
}

console.log(add(2, 3))
console.log(add2({a: 4, b: 4}))

const theHandsome: MyObject = {
firstName: 'Handsome',
lastName: 'Indiarto'
}
console.log(theHandsome.firstName, theHandsome.lastName)

const ian = new Person()
console.log(ian.walk('Handsome', 'Indiarto'))
console.log(ian.showPassword('Handsome'))

console.log(angka)
console.log(huruf)
console.log(masih)

// Union
interface Dog {
    njenggong: string
}
interface Cat {
    ngeong: string
}

type Pet = Dog & Cat

const pet: Pet = {
    ngeong: "ngeong",
    njenggong: "guk"
}
console.log(pet)

// casting
add(pet.ngeong as any, pet.njenggong as any)

// generic
const last = <X, E>(arr: X[], output: E[]): X => {
    return arr[arr.length -1]
}
console.log(last<number, string>([3,2,1,3,4], ["okee"]))

// extend Generic

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {

  return {
    ...obj,
    fullname: obj.firstName + " " + obj.lastName 
    }
}
console.log(makeFullName({firstName: "handsome", lastName: 'indiarto', sapa: "halo"}))

// generic interface
interface Tab<T> {
    id: string
    position: number
    data: T
}


type NumberTab = Tab<Person>

const test = (x: NumberTab) => {
  console.log(x.data.showPassword("halo"))
   return x.data.walk("haloo", "Okee")
}

class Point {
    readonly name: string = 'oke'
    x?: number
    y?: number
    public static nama = "handsome"
    constructor(x: number) {
        this.x = x
        this.y = 0
    }
    protected getName() {
        return `hi ${Point.nama}`
    }
    public getNameResult() {
        return this.getName()
    }
}
console.log(Point.nama)
const point = new Point(10)
console.log(point.x)
console.log(point.name)
console.log(point.getNameResult())
point.x = 3
console.log(point.x)

class C<Type> {
    _length = 0;
    test: Type
    constructor(value: Type) {
        this.test = value
    }
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }
type MyInstance = InstanceType<typeof Point>

const c = new C("Siapp")
console.log(c.test)
c.length = 10
console.log(c.length)
console.log(test({id: "sasadsadd",position: 1, data: new Person}))

class Box<Type> {
    contents: Type;
    _length: number
    constructor(value: Type) {
      this.contents = value;
      this._length = 0
    }
  }
  
  const b = new Box("false");
  console.log(b.contents)

  interface Options {
    test: () => void
    [x: string]: any;
  }
  function processOptions(opts: Options) {
    // Notice we're *intentionally* accessing `excludes`, not `exclude`
    const x = opts['okee']
    console.log(x, "ini x")
    }

      type SomeConstructor = {
        new (s: string): string;
      };
      function fn(ctor: SomeConstructor) {
        return new ctor("hello");
      }

      interface X {
        x: number
      }
      let rx: Readonly<X> = { 
        x: 1
      }

      let useConst = [1, 2, 3] as const //jadi readonly
      // useConst = [...useConst, 2]
      // useConst.push(4)
      
      // function
      function greeter(fn: (a: string) => void) {
        fn("Halo ganteng");
      }
      
      greeter(function printToConsole(s: string) {
        console.log(s);
      })

      // function Generic
      function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
        return arr.map(func);
      }
      const parsed = map(["1", "2", "3"], (n) => parseInt(n));
      class MyClass {
        [s: string]: boolean | ((s: string) => boolean);
        check(s: string) {
          return this[s] as boolean;
        }
      }
      const classes = new MyClass().check("j")
      console.log(classes)



      
      interface Pingable {
        ping(): void;
      }

      class Sonar implements Pingable {
        ping() {
          return "okee"
        }
      }
      const sonar = new Sonar().ping()

      interface Todo {
        title: string;
        description: string;
      }
      
      function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
      }
      
      const todo1 = {
        title: "organize desk",
        description: "clear clutter",
      };
      
      const todo2 = updateTodo(todo1, {
        description: "throw out trash",
      });



      interface Todo3 {
        title: string;
        description: string;
        completed: boolean;
      }
      
      type TodoPreview = Pick<Todo3, "title" | "completed">;
      
      const todo3: TodoPreview = {
        title: "Clean room",
        completed: false,
      };

      interface Todo4 {
        title: string;
        description: string;
        completed: boolean;
        createdAt: number;
      }
      
      type TodoPreview2 = Omit<Todo4, "completed">;
      
      const todo: TodoPreview2 = {
        title: "Clean room",
        description: "okeee",
        createdAt: 1615544252770,
      };
      
      todo;
      // ^ = const todo: TodoPreview
      
      type TodoInfo = Omit<Todo4, "completed" | "description">;
      
      const todoInfo: TodoInfo = {
        title: "Pick up kids",
        createdAt: 32,
      };
      
      todoInfo;

      enum UserResponse {
        No = "okee",
        Yes = "tidak oke",
        raguRagu = "Ragu Ragu",
      }

      const obj = {
        no: 'No',
        yes: "Yes",
        raguRagu: "Ragu Ragu"
      }

      function respond(recipient: string, message: UserResponse): void {
        console.log(recipient, message)
      }
      respond("Ian Indiarto", UserResponse.Yes)

      class Point2 {
        x = 10;
        y = 10;
      
        scale(n: number): void {
          this.x *= n;
          this.y *= n;
          console.log(this.x, this.y)
        }
      }
      class Point3 implements Point2 {
        x = 11
        y = 12
        scale(s: number): void {
          console.log("pkee")
        }
        scala(s: number): void {
          console.log("okee")
        }
      }
      
      class Point4 extends Point2 {
        scala(s: number): void {
          console.log("okee")
        }
        scale(s: number): void {

        }
      }


      new Point2().scale(3)
      // type function
      // type DescribableFunction = {
      //   description:object;
      //   (someArg: number): boolean;
      // };
      // function doSomething(fn: DescribableFunction) {
      //   console.log(fn.description + " returned " + fn(6));
      // }
      // doSomething()
    // console.log(processOptions({["okee"]: "okeee"}))
//   declare function doStuff(...args: [...names: string[], shouldCapitalize: boolean]): void;
//   doStuff("fee", "fi", "fo", "fum", /*shouldCapitalize:*/ true);
//   abstract class Base {
//     abstract getName(): string;
  
//     printName() {
//       console.log("Hello, " + this.getName());
//     }
//   }
  
//   const bs = new Base();