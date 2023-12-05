export class HelloOOP{
        name
    constructor(value: string){
        this.name = value
    }

    getName(){
        return this.name
    }
}

let hello = new HelloOOP('vue.js')
let name = hello.getName()
console.log(name)
