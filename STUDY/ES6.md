# ES6

# 2018년 11월 10일 2주차

## default parameter
> 함수 몸통에 전달시킬 매개 변수, 값이 없을 때는 undefined로 간주된다.
```
function tossParameters(param1, param2 = 123){
    구현 로직
};
```

## template literals
> 따옴표 대신 grave accent를 사용해서 코드상에 문자 표현 및 문자 보간 기능을 사용 할 수 있다. 표현식을 허용한다 >> ${expression interpolation}
```
var user = 'yuri';

console.log(`My name is ${user}`);

> My name is yuri
```

# 2018년 11월 17일 3주차 복습

## let & const
> 두 타입 모두 재선언이 불가능하다.
> let은 선언 후에 할당이 가능하고, 재할당 또한 가능하다.
```js
let foo;
foo = 1; //선언 후 할당
foo = 2; //재할당
```
> const는 선언과 동시에 할당을 해야한다. 재할당은 불가능하고, 메소드를 통한 값의 변형만 가능하다.
```js
const foo = [];
foo.push(1); //값의 변형
foo

> [1]
```
> 
## arrow function
> ES6 이전 버전
```js
// 기명 즉시 실행 함수
function foo(params){
    return 'abc';
}
// 변수 기명 즉시 실행 함수
var x = function foo(params){
    return 'abc';
}
// 익명 함수
function (params){
    return 'abc';
}   
```
> ES6 버전
```js
// 기명 즉시 실행 함수
foo = params => { 
    return 'abc'
};
// 변수 기명 즉시 실행 함수
const x = (foo = params => { 
    return 'abc'
});
// 익명 함수
params => { 
    return 'abc'
};
```
> 매개변수가 하나 일 때, 괄호는 생략 가능.

## 블록 레벨 scope
> {} 중괄호 단위로 유효 범위를 갖는다.

# 2018년 11월 28일 4주차 복습

## Lexical scope
> 어휘적 유효 범위 지정이 변수가 선언된 위치를 사용하여 변수의 사용 가능한 위치를 결정한다. 중첩된 함수들은 그들의 외부 유효 범위에서 선언된 변수들에 접근할 권한을 가진다.