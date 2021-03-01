#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');
const table = require('markdown-table')


program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
 
  program
  .command('mopar')
   .description('List the top horsepower cars in order from greatest to least') 

//   .option('-k, --key <string>', 'String|phrase Key to Use')
  .action(function (password, options) {
    console.log("")
    console.log(colors.red('Greatest Muscles Car'));
    console.log("") 
console.log(

  table([
    ['Model', 'Horsepower'],
    ['Dodge Srt Demon', '840hp'],
    ['Dodge Srt SuperStock', '807hp']
    ['Dodge SRT Hellcat Redeye', '797hp']
    ['Dodge SRT Hellcat Durango', '710hp']
    ['Dodge SRT Hellcat', '710hp']
    ['Jeep SRT Trackhawk', '710hp']
    ['Dodge SRT 392 Scatpack', '485hp']
  ])
)
 console.log('')

   });

   program
   .command('buildyourown')
    .description('Follow the website to build your own mopar car!') 
 
 //   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function () {
     console.log("")
    
     console.log(colors.red('Websites to build your own'));
     console.log("") 
 console.log(
 
   table([
     ['Model', 'Website'],
     ['Dodge Srt Demon', ''],
     ['Dodge Srt SuperStock', '']
     ['Dodge', '']
   ])
 )
  
    });
 
//   program
//   .command('encrypt <password>')
//   .description('Encrypt a plain text password')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
//   .action(function (password, options) {
//     debug('encrypt command');
//     if( options.key == undefined ){
//       console.log();
//       // console.log('  -k, --key option is required');
      
//       console.log('  ');
//       process.exit(1);
//     } else {
//       let ciphertext = CryptoJS.AES.encrypt(password,options.key);
//       console.log();
//       console.log(' Encrypted Password: ' + ciphertext);
//       console.log();
//     }
 
//   });

program.on('--help', function(){
    console.log();
    console.log('Extra Help Text');
    console.log('');
    console.log('');
    console.log('');
  });


// program.on('--help', function(){
//     console.log();
//     console.log('Examples:');
//     console.log('');
//     console.log('  $ pass encrypt mypassword -k oneWordPass');
//     console.log("  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('  $ pass decrypt encryptedstring -k oneWordPass');
//     console.log("  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('Notice: ')
//     console.log('  For special characters in passwords/keys,');
//     console.log('  please use single quotes around each');
//     console.log('');
//     console.log('');
//   });


  program.parse(process.argv);

  if (!program.args.length) program.help();
