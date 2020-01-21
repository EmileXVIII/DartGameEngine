class Source{
    input:NodeJS.ReadStream;
    output:NodeJS.WriteStream;
    readline;
    constructor(input:NodeJS.ReadStream=process.stdin,output:NodeJS.WriteStream=process.stdout){
        this.input = input;
        this.output = output;
        this.readline = require('readline').createInterface({
            input: this.input,
            output: this.output
          })
    }
    toto(){
        this.readline.question("toto",(name)=>name)
    }
}