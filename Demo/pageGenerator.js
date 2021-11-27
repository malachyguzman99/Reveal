const fs = require('fs');
const ejs = require('ejs');

/**
 * Creates the company data page from the ejs template
 * @author Malachy
 */

// let data = fs.readFileSync('data/data.json', 'utf8');
// let demoTemplate = fs.readFileSync('src/views/demo.ejs', 'utf8');
// var demo = JSON.parse(data);

//
// for (let i=1; i<demo.length; i++) {
//   let company = demo[i]
//   let companyName = company["Company_Name"]
//   let name = "build/" + companyName.split(" ").join("_") + ".html"
//
//   let page = ejs.render(demo, {
//     filename: __dirname + '/src/views/demo.ejs',
//     data: company,
//     companies: demo,
//     index: i
//   });
//
//   fs.writeFileSync(name, page, 'utf8');
// }


let data = fs.readFileSync('data/data.json', 'utf8');
let demoTemplate = fs.readFileSync('src/views/demo.ejs', 'utf8')

let demo = ejs.render(demoTemplate, {
  filename: __dirname + '/src/views/demo.ejs',
  companies: JSON.parse(data)
});

fs.writeFileSync("build/demo.html", demo, 'utf8');



/**
 * Prepares cause of data by converting the csv file to json
 * @author Malachy
 */
let fullData = [];
let demoData_csv = fs.readFileSync('data/data.csv', 'utf8');
let demoData = demoData_csv.split("\n");

demoData.forEach(function(cause) {
  let data_info = cause.split(',');
  let dataObj = {};
  dataObj["Company_Name"] = data_info[0];
  dataObj["B_Corp_Certification"] = data_info[1];
  dataObj["ESG_Sustainalytics_Score"] = data_info[2];
  dataObj["Pay_Ratio"] = data_info[3];

  fullData.push(dataObj);
});

fs.writeFileSync('data/data.json', JSON.stringify(fullData), 'utf8');
