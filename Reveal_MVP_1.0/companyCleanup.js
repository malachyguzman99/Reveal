// Removes + standardizes company names in a database
// Original code from here: https://www.addaptive.com/blog/using-algorithms-normalize-company-names/
// Edited by Oliver



const fs = require('fs');
const caverphone = require('./caverphone');
var _ = require('./lodash');



//app.get('/companies/:companyname', function(request, response) {

//     let totalData = JSON.parse(fs.readFileSync('postgres/data.json', 'utf8'));
//     let companyname = request.params.companyname;
//     let companyinfo;
  
//     for(let i in totalData){
//       if(totalData[i].name==companyname){
//         companyinfo = totalData[i];
//       }
//     }
  
//     response.status(200);
//     response.setHeader('Content-Type', 'text/html')
//     response.render("company", {
//         data: companyinfo
//     });
// //  });



// let company = "Mc Donald's Corp.";
// let company = "McDonalds";
var companies = ['1Mc Donald\'s Corp.', 'McDonalds'];
var simplifiedCompanies = [];

var phoneticIndexMap = new Map();



console.log(companies);

function simplifyCompanies(company, indexMap) {

    // copy original
    var original = _.clone( company );
    
    // Manual cleanup rules to provide a phonetically legible string
    var c = company;
    c = _.trimEnd( c, '"' );
    c = _.trimStart( c, '"' );
    c = _.deburr( c );
    c = _.replace( c, new RegExp( '-[0-9]{12}$', 'i' ), '' );
    c = _.replace( c, new RegExp( '^_(private|public)_', 'g' ), '' );
    // c = splitBy( c, '-- ' );
    // c = splitBy( c, '--' );
    // c = splitBy( c, ' - - ' );
    // c = splitBy( c, '__' );
    c = _.trimStart( c, '_' );
    c = _.trimStart( c, '-' );
    c = _.trimStart( c, '.' );
    c = _.trimStart( c, '1 - ' );
    c = _.trimStart( c, '0' );
    c = _.trimStart( c, '- - ' );
    c = _.trimEnd( c, ' -' );
    c = _.replace( c, new RegExp( ' - ', 'g' ), ' ' );
    c = _.replace( c, new RegExp( '_', 'g' ), ' ' );
    c = _.trim( c );
    
    // Determine phonetic index using clean 'c' string
    var strictIndex = caverphone( c );
    console.log(strictIndex);
    //var strictIndex = algorithms.phonetics[ algorithm ].call( algorithms, line );

    // Most phonetic index specificity increases with each 
    // additional character so we can reduce the size of our
    // index to provide a looser match
    var looseIndex = strictIndex.slice( 0, 6 );
        

    // Map has looseIndexes as keys and their  
    if (indexMap.has(looseIndex)) {
        indexMap.set(looseIndex, indexMap.get(looseIndex).push(original))
    } else {
        indexMap.set(looseIndex, [original]);
    };

    console.log(indexMap);
    console.log('index ^ ');


    //indexMap.set(looseIndex, []);

    // map1.has();

    // if it doesn't exist, create it
    // if it does, add it to the list of aliases and take the first one.
    // populate the list at first with known correct company names, 
    // then any new ones added will find those correct names


    // Save to companies array, grouped by phonetic index
    // this represents the output of our normalize company names
    // routine
    var group = _.get( companies, looseIndex, {
        'in': [],
        'out': []
    } );
    group.in.push( original );
    group.out.push( c );

    console.log(group);

    simplifiedCompanies.push(group);
    
    // Use the shortest company name as the final company value
    // ...
};


for (let i = 0; i < companies.length; i++) {
    simplifyCompanies(companies[i], phoneticIndexMap);
};
console.log(simplifiedCompanies);