// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    return Math.abs(value-42);

}
function distanceFromHqInFeet(value) {
    return (distanceFromHqInBlocks(value)*264);
}

function distanceTravelledInFeet(start, dest) {
    return (Math.abs(start-dest)*264);

}

function calculatesFarePrice(start, destination) {
    let tot = distanceTravelledInFeet(start, destination) ;
    if (tot < 400)
        return 0;
    if ((tot => 400) && (tot <= 2000 ))
        return ((tot - 400) * 0.02 ) ;
    if ((tot > 2000) && (tot < 2500))
        return 25;
    if (tot > 2500)
        return 'cannot travel that far';
        
}