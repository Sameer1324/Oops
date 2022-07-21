var s1
var s2
function setup() {
  createCanvas(400, 400);
  s1 = new Student("Vivan", 9, 99.9)
  s1.display()
  s2 = new Student("Crishtin", 10, 90)
  s2.display()
}

function draw() {
  background(30);

}