// 'zzzzzzzz'.sayName();
// 프로토타입으로 만들기

// const string = 'zzzzzzz';

// string.__proto__

// 생성자 함수, constructor function !!함수로 객체 타입을 정의
// function Person(name){
//     Person.prototype.name = name;
// }

// // sayName이라는 기능을 메서드(__proto__)로 Person 함수에 내장
// Person.prototype.sayName = function(){ 
//     console.log('my name is ' + Person.prototype.name);
// };

// // 이로써 Person 함수에는 sayName이라는 메소드가 내장되었다.

// const name = 'zzz'

// // new 연산자를 통해 string이라는 이름으로 Person의 인스턴스 객체 생성함.
// const string = new Person(`${name}`);

// string.sayName();
// // Person의 인스턴스 객체인 string에도 또한, sayName이라는 메서드가 내장되어 있다.

function Person(name){
    Person.this.name = name;
}
Person.prototype.sayName = function(){
    console.log('my name is ' + Person.this.name);
}

const string = 'zzz';