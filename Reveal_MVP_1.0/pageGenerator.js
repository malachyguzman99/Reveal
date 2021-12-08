const fs = require('fs');
const ejs = require('ejs');

/**
 * Converts the csv file to json
 * @author Malachy
 */
let fullData = [];
  let demoData_csv = fs.readFileSync('postgres/testdata.csv', 'utf8');
  let demoData = demoData_csv.split("\n");

 console.log(demoData)


demoData.forEach(function(company) {
  let data_info = company.split(',');

  // console.log(data_info[3])

  let dataObj = {
        "name": data_info[0].trim(),
        "info": {
            "Parent_Company": data_info[1],
            "Industry" : data_info[2],
            "B_Corp_Certification" : data_info[3],
            "Climate_Neutral" : data_info[4],
            "Pay_Ratio" : data_info[5],
            "UN_Global_Compact" : data_info[6],
            "Open_Secrets_cont_lobby" : data_info[7],
            "Open_Secrets_cont_lean" : data_info[8],
            "Open_Secrets_lobby" : data_info[9],
            "Open_Secrets_sup_bill" : data_info[10],
            "LGBTQ" : data_info[11],
            "Sustainalytics_overall" : data_info[12],
            "Sustainalytics_industry" : data_info[13],
            "Sustainalytics_companies" : data_info[14],
            "3-metric" : data_info[15]
          }
  	}

 fullData.push(dataObj);
});


fs.writeFileSync('postgres/data.json', JSON.stringify(fullData), 'utf8');
//
// let data = fs.readFileSync('postgres/data.json', 'utf8');
// var demo = JSON.parse(data);
//
// let spec = "Timex";
//
// for(let i in demo){
//   if(demo[i].name==spec){
//     console.log(demo[i].name);
//   }
// }





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

//
// let data = fs.readFileSync('data/data.json', 'utf8');
// let demoTemplate = fs.readFileSync('src/views/demo.ejs', 'utf8')
//
// let demo = ejs.render(demoTemplate, {
//   filename: __dirname + '/src/views/demo.ejs',
//   companies: JSON.parse(data)
// });
//
// fs.writeFileSync("build/demo.html", demo, 'utf8');
