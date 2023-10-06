// chapter 31-34
// var date = new Date();
// document.write(date)

// var date = new Date();
// var month = date.getMonth();
// var arr = ["Jan",
//   "Feb",
//    "Mar",
//    "Apr",
//    "May",
//    "Jun",
//    "July",
//    "Aug",
//    "Sep",
//    "Oct",
//    "Nov",
//    "Dec",]


// document.write(arr[month])


// var arr1 = ["Sunday","Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday"]
// var day = date.getDay()
// document.write("Today is: \n\n",arr1[day])

// var arr1 = ["Funday","Monday", "Tuesday","Wednesday","Thursday", "Friday", "Funday"]
// var day = date.getDay()
// document.write(" It's: \n\n",arr1[day])

// var date = new Date();
// var date1 =  date.getDate()

//  if (date1<16)
//  document.write('Its First fifteen days of month')
// else 
// document.write('No')

//  var date = new Date();
// var time = date.getHours()
// document.write(time)
// if(time>11.9)
// document.write('Its Pm')
// else
// document.write("Its AM")

// var new1 = new Date("Thu Dec 31 2022 00:00:00 GMT+0500 PKT");

// var age = prompt("Enter Age:")
// var age1 = 2023-age;
// document.write("Age: \n", age)
// document.write("Birth Year: \n", age1)


var name = prompt("Enter Name:")
document.write("Customer Name: \n", name, "<br>")
var date = new Date();
var month = date.getMonth();
var arr = ["Jan",
  "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "July",
   "Aug",
   "Sep",
   "October",
   "Nov",
   "Dec",]


document.write("Month:\n",arr[month],"<br>")
document.write("Number of Units:\n","140 <br>")
document.write("Charges per Unit:\n","16 <br><br><br><br>")


document.write("Net Amount Payable within Duedate:\n","6560 <br>")
document.write("Late Payment Surcharge:\n","350 <br>")
document.write("Gross Amount Payable after Duedate:\n","6910 <br>")