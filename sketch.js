var ps = []; //점파원
var __wid = 500;
var __hei = 500;
var searcher;
var __N = 5;

var results = [];
var colors = [];

function setup() {
  noFill();
  createCanvas(__wid, __hei)
  ps.push(new P(200, 200, 50));
  ps.push(new P(80, 100, 50));
  ps.push(new P(400, 100, 50));
  
  searcher = new Searcher();
  searcher.setting(ps[0], ps[1])
}

function draw() {
	background(220);
  for (let i = 0; i < ps.length; i++) {
    ps[i].showP(color(65));
    ps[i].showCir(__N);
  }
	
	
  if(expressionMode) {
    for (let i = 0; i < results.length; i++) {
			tempDraw(i);
		}
	}
}

function P(x, y, lambda) {
  this.x = x;
  this.y = y;
  this.lambda = lambda; //1파장

  this.showP = function(c) {
    push();
    stroke(c);
    circle(this.x, this.y, 5);
    pop();
  }
  this.showCir = function(n) {
    for (let i = 1; i <= n; i++) {
			stroke(0);
      circle(this.x, this.y, this.lambda * i);
    }
  } 
}


function tempDraw(N) {
	stroke(colors[N]);
	for (let i2 = 0; i2 < results[N].length; i2++) {
		let px = results[N][i2]['x'];
		let py = results[N][i2]['y'];
		point(px, py);
	}
	//console.error("N : ", N);
}