const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const firstTwoDrivers = drivers.slice(0,2)
const lastTwoDrivers = drivers.slice(-2)
function returnFirstTwoDrivers() {
    return firstTwoDrivers
}
function returnLastTwoDrivers() {
    return lastTwoDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(fare) {
    return function() {
        return fare*fare
    }
}
function fareDoubler(fare) {
    return fare*2
}
function fareTripler(fare) {
    return fare*3
}
function selectDifferentDrivers(drivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return firstTwoDrivers
    } 
    else if (selectingDrivers === returnLastTwoDrivers) {
        return lastTwoDrivers
    }
}