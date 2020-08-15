var __search_check = 0;
var expressionMode = false;
var __range = 1;

function keyTyped() {
  if (key == 'c') {
		searcher.setting(ps[0], ps[1]);
		tempC();
  }
	if (key == 'f') {
		searcher.setting(ps[1], ps[2]);
		tempC();
  }
	if (key == 'g') {
		searcher.setting(ps[0], ps[2]);
		tempC();
  }
	/*
	if (key == 'a') {
		searcher.setting(ps[1], ps[2]);
		tempC();
		searcher.setting(ps[2], ps[0]);
		tempC();
  }
	*/
  if (key == 'd') {
    expressionMode = !expressionMode;
    console.log(expressionMode);
  }
}

function Searcher() {
  this.memory = [];
  this.r = 1;
	this.p1 = null;
	this.p2 = null;

	this.setting = function(p1, p2) {
		this.p1 = p1;
		this.p2 = p2;
	}

  this.searching = function(n) {
		this.memory = [];
    let index = 0;
		this.lambda = this.p1.lambda;
		let d4 = this.lambda / 2
		console.error("d4 : ", d4);
    for (let i = 0; i < __wid; i++) {
      for (let j = 0; j < __hei; j++) {
        this.x = i;
        this.y = j;
		let d1 = dist(this.x, this.y, this.p1.x, this.p1.y)
		let d2 = dist(this.x, this.y, this.p2.x, this.p2.y)
		let d3 = abs(d1 - d2);
        //원 반경안에 있는 spot 수 세기. -> 두 ps까지 거리가 n파장 차이나는지 확인하기
		for(let k = 1; k <= n; k++) {
			 if (d4 * k - __range <= d3 && d3 <= d4 * k + __range) {
				//console.log("x : " + this.x + " y : " + this.y + " finding");
				//this.memory[index++] = new Circle(this.x, this.y, this.r, count);
				this.memory[index++] = {'x':this.x, 'y':this.y, 'k':k};
			}
		  }
	  }
    }
		console.log("Searching DONE!");
		console.log(index + "개 찾았습니다.");
		return this.memory;
  }
}

function tempC() {
	console.error(results[__search_check] = searcher.searching(__N) );
	colors[__search_check] = color(130 * __search_check, 0, 0);
	__search_check++;
}