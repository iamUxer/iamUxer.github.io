# JS

# 2018년 11월 10일 2주차 복습

## Truthy, Falsy
> Truthy 값은 Boolean 논리적 연산자를 통해 값이 참으로 간주되는 것.

> Falsy 값은 Boolean 논리적 연산자를 통해 값이 거짓으로 간주되는 것.
``` 
- Falsy -
    if (false)
    if (null)
    if (undefined)
    if (0)
    if (NaN)
    if ('')
    if ("")
    if (document.all)
```
## AND, OR
> AND는 좌항과 우항이 모두 TRUE 일 때 우항 값을 반환한다. 
모든 항이 TRUE 인지 검사를 해야하기 때문에 마지막 값 까지 체크하고 마지막 값을 반환하는 것.
```
var andBoolean = 123 && 456;
console.log(andBoolean)

> 456
```
> OR는 좌항 또는 우항 중, 하나라도 TRUE 일 때 첫 번째 TRUE 값 피연산자를 반환한다. 하나의 항이라도 TRUE 값이 나오면 되기 때문에 첫 번째로 체크된 TRUE 값을 반환한다.
```
var orBoolean = 123 || 456;
console.log(orBoolean);
> 123
```
> AND와 OR 모두 논리 값이 존재할 때는 TRUE 또는 FALSE로 반환


## declaration
> 데이터를 할당하기에 앞서 변수명으로 선언하는 것

> 함수는 생성 자체로 선언과 할당이 동시에 일어남
```
var variation;
```
## assign
> 선언한 변수에 값을 할당하는 것
```
var variation = 'value';
var funcDeclaration = function (){

}
```

## hoisting
> 자바스크립트는 선언을 코드가 생성된 위치와 상관없이 위로 끌어올려 해석한다.
```
- 실제 코드
    a = 1;

    console.log(a);
    newFunc();

    var a; <------*****선언이 반드시 존재해야한다.

    function newFunc(){
        console.log('hoisting');
    }

- 코드 해석
    var a;
    function newFunc(){
        console.log('hoisting');
    }
    //선언 부분을 끌어올림 한다.

    a = 1;

    console.log(a);
    newFunc();

    //실행결과
    > 1
    > hoisting
```

## setInterval
> 일정 시간마다 반복하는 함수
```
setInterval(function() {
    구현 로직
}, 지연시간);
```

#### 2018년 11월 10일 3주차 예습

## 값 (value)
> 값은 데이터고 타입이 있다.
```
1. undefined
2. null
3. boolean - true, false
4. number - 1, 2, 0.3, NaN, infinity, -infinity..
5. string - a, b, \n..
6. symbol
7. object - function(){}, [], {}, /a/
```
## 식 (expression)
> 연산을 실행했을 때 값을 반환하는 표현식? 그 값은 변수에 할당될 수 있다.
```
console.log(a+1);
```
## 문 (statement)
> 변수에 할당 될 수 없는 연산이 아닌 구문
```
1.변수 선언문
    var a;
2.변수 할당문
    a = 0;
3.함수 선언문
    function x(){}
4.조건문
    if(a < 1){}
5.반복문
    for(a > -3){}
6.함수 호출문
    x();
7. ...
```

## Value Type, Reference Type
> Value Type은 메모리상의 주소 값을 따로 가지지 않고 그저 값으로만 존재한다.
```js
let a = 1;
let b = a; //b는 a의 1을 값으로써 대입받는다.

a = 2;

console.log(b); //b는 a를 참조한 것이 아니라 값만 대입받았기 때문에 값에 변화가 없다.
> 1
```
```
- num, string, boolean, undefined, NaN, null이 해당
```
> Reference Type은 메모리상의 주소 값을 가지고 그것을 참조할 수 있다.
```js
const animals = [ "dog", "cat" ];
const mypets = animals;

animalls.push("bird");

console.log(mypets);
> ["dog", "cat", "bird"] //배열은 참조 타입의 데이터로 참조하는 주소값의 메모리에 적용된 변화값을 그대로 보여준다.
```
```
- Array, function, Object가 해당
```

# 2018년 11월 17일 3주차 복습

## var
> 선언하고자 하는 이름으로 변수를 선언함, 값의 재할당이 가능하다.
```
var variation;
```


## null & undefined
> null은 선언과 할당이 되었지만, 값이나 자료형이 없다.
```
var foo = null;
fool

> null
```
> undefined는 선언은 되었지만 값이 할당되지 않았다.
```
var foo;
foo;

> undefined
```
> null과 undefined의 차이점
```
* 동등연산자 == 는 형변환을 일으키는 것에 주의

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```



## TDZ(temporal dead zone)
> 



# 2018년 11월 28일 4주차 복습

## This
> 일반적으로 메소드를 호출한 객체가 저장되어 있는 속성, 함수를 호출한 방법이 결정한다. 함수를 호출할 때 마다 다를 수 있다.
## Prototype
> 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 Prototype 객체와 연결되어 있고 프로퍼티 또는 매소드를 상속받아 사용할 수 있다.
자신의 부모 객체를 가리키고 있다. 프로토타입은 객체가 생성될 때 결정된다. 

## this의 모든 케이스 만들기 (http://beomy.tistory.com/6)
```
전역공간에서 > window/ global
함수내부에서 > window/ global
메소드 호출시 메소드 호출 주체(메소드명 앞)
명시적인 this 바인딩 - call / apply / bind???
callback에서 - 기본적으로는 함수내부에서와 동일
생성자함수에서 - 인스턴스
내부함수에서의 우회법 - 상위스코프에서 'var self = this'
이벤트 함수에서 - 발생 이벤트
```

> 일반 함수에서 this > window 전역객체
```
function sum(a, b){
    console.log(this === window);
    this.myNumber = 20;
    return a + b;
}

console.log(sum(15, 16));
window.myNumber;

>true
> 31
> 20
```
> 일반 중첩 함수에서 this > window
```
var data = 10;
function outer(){
    function inner(){
        this.data = 20; //== window.data
        data = 30; // 선생님 질문.. 이해 안됨..호이스팅?

        console.log("1. data = " + data);
        console.log("2. this.data = " + this.data);
        console.log("3. window.data = " + window.data);
    }
    inner();
}

outer();

>1. data = 
>2. this.data = 
>3. window.data =

var data = 10;

```

> 이벤트 리스너의 this > 이벤트 객체
```
var data = 10;
$("#myButton").click(function(){
    this.data = 20; // #myButton
    data = 30; // window

    console.log("1. data = " + data);
    console.log("2. this.data = " + this.data);
    console.log("3. window.data = " + window.data);
});

>1. data = 30
>2. this.data = 20
>3. window.data = 30
```
> 메소드에서 this > 메소드 객체
```
var data = 10; //30
function MyClass (){
    this.data = 0; // 이게 20으로 바뀌는 건가?
}
MyClass.prototype.method1 = function (){
    this.data = 20;
    data = 30;

    console.log("1. data = " + data);
    console.log("2. this.data = " + this.data);
    console.log("3. window.data = " + window.data);
}

var my1 = new MyClass();
my1.method1();

>1. data = 30
>2. this.data = 20
>3. window.data = 30
```

> 메소드 내부의 중첩 함수에서 this > window
```
var data = 10;
function MyClass(){
    this.data = 0;
}
MyClass.prototype.method1 = function(){
    function inner(){
        this.data = 20;
        data = 30;

        console.log("1. data = " + data);
        console.log("2. this.data = " + this.data);
        console.log("3. window.data = " + window.data);
    }
    inner(); 
}

var my1 = new MyClass();
my1.method1();

>1. data = 30
>2. this.data = 30
>3. window.data = 30
```
## prototype 메서드 만들기
```
var string = {};
string.__proto__.myname = function(){
    console.log('Gu yuri');
}
           
string.myname();

> Gu yuri
```
# 2018년 12월 15일 5주차 예습

## call / apply / bind
> call 메서드는 함수의 this 객체를 원래 컨텐스트에서 지정해준 새로운 객체로 변경할 수 있다. 서로 다른 this객체가 기존 함수를 호출 할 때 할당될 수 있다.
```
func.call([지정객체][, 인수1[, 인수2[, ...]]])

func : 가져다 쓸 메소드
지정객체(선택사항) : 현재 객체로 사용될 객체
인수1, 인수2, 인수N(선택사항) : 메소드에 전달될 인수 목록
```

> apply 메서드는 call 메서드와 용도는 같지만 여러 개의 인자를 받는 대신 인자 배열 하나를 받는다.

> bind 메서드는 .....

## Closure
> 클로저 = 함수 + 함수의 렉시컬 환경(선언할때 결정되는 > 범위 안에 있는 여러 지역 변수)

> 내부함수 vs. 클로저
```
1. 내부함수

function outer() {
    var outerText = "내부 함수";
    function inner() { 
        console.log(outerText);
    }
    inner();
}
outer();

> 내부 함수

2. 클로저

function outer() {
    var outerText = "클로저";
    function inner() {
        console.log(outerText);
    }
    return inner; //실행이 아닌 함수를 리턴
}
//함수 안의 지역 변수들은 그 함수가 수행되는 동안에만 존재한다.

var myClosure = outer();
myClosure(); //inner 함수를 실행한 결과 저장

outer(); // inner함수를 리턴한다.

> 클로저

```

