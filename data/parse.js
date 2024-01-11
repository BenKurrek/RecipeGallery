"use strict";
exports.__esModule = true;
exports.parseData = void 0;
var fs = require("fs");
var csv = require("csv-parser");
var parseData = function (dataType) {
    switch (dataType) {
        case "raw_data":
            readCSV("./data/exported_raw_data.csv");
            break;
        case "input_data":
            readCSV("./data/exported_input_data.csv");
            break;
    }
};
exports.parseData = parseData;
var readCSV = function (filename) {
    fs.createReadStream(filename)
        .pipe(csv())
        .on("data", function (row) {
        // Process each row (recipe) here
        console.log("ROW: ", row); // Each 'row' is an individual recipe
    })
        .on("end", function () {
        console.log("CSV file successfully processed");
    });
};
(0, exports.parseData)("raw_data");
