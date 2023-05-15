// Code your solution in this file!




const returnFirstTwoDrivers = function (array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    function innerfuc(fare){
        return fare * int
    }

    return innerfuc
}





const fareDoubler = (fare) => fare * 2
const fareTripler = (fare) => fare * 3


function selectDifferentDrivers(driverArray, theFunc ){

    if (theFunc === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(driverArray)
    }
    else if (theFunc === returnLastTwoDrivers){
        return returnLastTwoDrivers(driverArray)
    }

}
















