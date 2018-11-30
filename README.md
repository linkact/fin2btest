# fin2btest
Fin2B Online Test

## Install dependencies
```
$ npm install
```

## Run the service
```
$ npm start
```

## Web browser
```
http://ip:3000
```
<img src="https://user-images.githubusercontent.com/2908488/49200497-753dac00-f3e0-11e8-864f-74c459ef38a3.png" width="90%"  />

## 참고사항
* 비밀번호 Validation - RegExp로 제약조건 적용.
```
var matches = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\S+$).{8,}/;
```

* 구글 검색 - Google Search API를 활용하는 방향은 공식적으로 제공을 중단하여, 간단한 링크 방식으로 구현.

* 피보나치 - n이 증가할수록 처리시간이 급격히 증가하는 이슈가 있어서, function caching의 구조를 차용. (Underscore의 memoize를 활용)
```
var fibonacci2 = _.memoize(function(num) {
	var answer = 0;
	if( num <= 1 ) {
		return num;
	}
	else if( num > 1 ) {
		answer = fibonacci2(num-1) + fibonacci2(num-2);
	}
	return answer;
});
```
