# fin2btest
Fin2B Online Test

# Install dependencies
```
$ npm install
```

# Run the service
```
$ npm start
```

# In your web brower
```
http://ip:3000
```
<img src="https://user-images.githubusercontent.com/2908488/49200497-753dac00-f3e0-11e8-864f-74c459ef38a3.png" width="90%"  />

# 기타사항
* 피보나치 문제는 n이 증가할수록 처리시간이 급격히 증가하는 이슈가 있어서, function caching의 구조를 차용함. (Underscore의 memoize를 활용)
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
