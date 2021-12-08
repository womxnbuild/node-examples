module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0 ){
        setTimeout(() =>
            callback(new Error("   [x] invalid dimensions for rectangle with length = " +
             x + " and breadth = " + y), null)
        , 2000);
    } else {
        setTimeout(() =>
            null, 
            {
                permimeter:(x,y) => (2*(x+y)),
                area: (x,y) => (x*y)
            }
            , 2000);
    }
}




