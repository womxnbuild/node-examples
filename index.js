var rect = require('./rectangle');

function solveRectangle(l, b){
    console.log('solving for rectangle with length = %d and breadth = %d', l, b);
    if (l <= 0 || b <= 0 ){
        console.log('   [x] invalid dimensions for rectangle with length = %d and breadth = %d', l, b);
    } else {
        console.log('   [y] area of a rectangle is %d', rect.area(l,b));
        console.log('   [y] perimeter of a rectangle is %d', rect.perimeter(l,b));
    }
}

solveRectangle(2,0);
solveRectangle(0,-4);
solveRectangle(2,3);