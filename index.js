/* day에서 특정일 만큼 더하는 함수 */
function addDay(day, toAdd) {
	return new Date(day.setDate(day.getDate() + toAdd))
}

/* day에서 특정일 만큼 빼는 함수 */
function subDay(day, toSub) {
	return new Date(day.setDate(day.getDate() - toSub))
}

/* day에서 date를 빼는 함수 */
function subDate(day, toSub) {
	var dayM = 86400552.963539 // 하루 = 86400552.963539 밀리초
	return Math.round(Math.abs(day - toSub) / dayM); // day에서 date를 뺀 후(abs 함수) round 함수로 반올림
}

////////////////////////////////////////////////////////////

/* 문자열에서 ~일 뒤와 같은 문자열에서 숫자만 파싱해오는 함수 */
function parse(string) {
	var re = /(\d*) *일 *(?:뒤|후|이따)/gi
	return re.exec(string)[1] // 숫자 파싱
}

/* 최종적으로 시차를 구함 */
function getPal(day, string) {
	return subDate(addDay(day, parseInt(parse(string))), new Date())
}

//////////
// 예시 : 만약 메모를 오늘의 5일 전에 등록했고, 등록 당일 날 12 일뒤 놀기라고 입력했고, 오늘과 등록 당일 날의 12일 후의 차이를 구한다.
// 만약 등록 당일 날이 5일이면 17일에 노는 것이다. 오늘은 10일이고 7일 차이가 나게 된다.  
console.log(getPal(subDay(new Date(), 5), "12 일뒤 놀기"))