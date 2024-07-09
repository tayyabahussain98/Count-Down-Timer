#! /usr/bin/env node
//Getting Current Date & Time as YYYY-MM-DD hh:mm:ss
//new Date object
let date_ob = new Date();
//current date
//adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
//current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
//current year
let year = date_ob.getFullYear();
//current hours
let hours = date_ob.getHours();
//current minutes
let minutes = date_ob.getMinutes();
//current seconds
let seconds = date_ob.getSeconds();
//prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);
//prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
//prints time in HH:MM format
console.log(hours + ":" + minutes);
//Getting Current Timestamp
let ts = Date.now();
//timestamp in milliseconds
console.log(ts);
//timestamp in seconds
console.log(Math.floor(ts / 1000));
//Getting Date & Time from Timestamp
//current timestamp in milliseconds
let ts1 = Date.now();
let date_obj = new Date(ts1);
let date1 = date_obj.getDate();
let month1 = date_obj.getMonth() + 1;
let year1 = date_obj.getFullYear();
//prints date & time in YYYY-MM-DD format
console.log(year1 + "-" + month1 + "-" + date1);
export {};
