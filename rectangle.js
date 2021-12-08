module.exports = (x, y, callback) => {
    if (l <= 0 || b <= 0 ){
        setTimeout(() => {
            callback(new Error('   [x] invalid dimensions for rectangle with length = %d and breadth = %d', x, y), null)
        , 2000});
    } else {
        setTimeout(() => {
            null, 
            {
                permimeter:(x,y) => (2*(x+y)),
                area: (x,y) => (x*y)
            }
            , 2000});
    }
}




