var rect = require('./rectangle');

function solveRectangle(l, b){
    console.log('solving for rectangle with length = %d and breadth = %d', l, b);

    rect(l, b , (err, rectCallback) => {
        if (err) {
            console.debug('ERROR: ', err.message);
        } else {
            console.log('   [y] area of a rectangle is %d', rect.area());
            console.log('   [y] perimeter of a rectangle is %d', rect.perimeter());
        }
    });
    console.log('** This concludes the end of operations\n');
}

solveRectangle(2,0);
solveRectangle(0,-4);
solveRectangle(2,3);