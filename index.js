const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRectangle(l, b){
    console.log('solving for rectangle with length = %d and breadth = %d', l, b);
    rectCallback = (err, rectCallback) => {
        if (err){
            console.log('ERROR: ', err.message);
        } else {
            console.log('   [y] area of a rectangle is %d', rect.area());
            console.log('   [y] perimeter of a rectangle is %d', rect.perimeter());
        }
    }
    rect(l, b , rectCallback);
}

solveRectangle(2,0);
solveRectangle(0,-4);
solveRectangle(2,3);