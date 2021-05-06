function BoardMember(name, homeState, training){
        this.name = name;
        this.homeState = homeState;
        this.training = training;
    }

    // veto(){
    //     return "No, I must disagree";
    // }
    // approve(){
    //     return "You can do that!";
    // }
    // doCharity(){
    //     return "I like to help people."
    // }
    // releasePressStatement(){
    //     return "You will see great things from Scuber."
    // }
    // sayHi(){
    //     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    // }

BoardMember.prototype.veto = () => "No, I must disagree";
BoardMember.prototype.approve = () => "You can do that!";
BoardMember.prototype.doCharity = () => "I like to help people.";
BoardMember.prototype.releasePressStatement = () => "You will see great things from Scuber.";
BoardMember.prototype.sayHi = function(){
 return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}    
// let sayHi = function() {
//     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
// }
