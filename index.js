/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
function createEmployeeRecord(array){
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    
    }
    return employee;
    }
    function createEmployeeRecords(employeeRecords){
        const result = []
        for(const employee of employeeRecords){
            result.push(createEmployeeRecord(employee));
    
        }
        return result;
    
    }
    function createTimeInEvent(record, timeStamp){
        const timeObj = {
            type: "TimeIn",
            date: timeStamp.split(" ")[0],
            hour: parseInt(timeStamp.slice(-4), 10)
        }
        record.timeInEvents.push(timeObj)
        return record;
    
    }
    function createTimeOutEvent(record, timeStamp){
        const timeObj = {
            type: "TimeOut",
            date: timeStamp.split(" ")[0],
            hour: parseInt(timeStamp.slice(-4), 10)
        }
        record.timeOutEvents.push(timeObj)
        return record;
    
    }
    function hoursWorkedOnDate(record, date){
        const timeIn = record.timeInEvents.find(e => {
            return e.date === date
        }).hour
        const timeOut = record.timeOutEvents.find(e => {
            return e.date === date
        }).hour
        return (timeOut - timeIn) / 100
    
    }
    function wagesEarnedOnDate(record, date){
    let pay = 0
    const hours = hoursWorkedOnDate(record, date)
    pay += hours * record.payPerHour
    return pay
    }
    // function allWagesFor(record){
    //     let pay = 0;
    
    //     for (let i = 0; i< record.timeInEvents.length; i++){
    //         let payday = wagesEarnedOnDate(record, record.timeInEvents[i].date)
    //         pay += payday
    //     }
    //     return pay}
    
    const calculatePayroll = (arr) => {
        const totalPay = arr.reduce((acc,record) =>{
            const totalPayForEmployee = allWagesFor(record)
            return acc + totalPayForEmployee
        }, 0)
        return totalPay
    }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

