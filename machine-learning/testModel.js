const spawn = require('await-spawn');
const text = "I think the saddest people always try their hardest to make people happy. Because they know what it’s like to feel absolutely worthless and they don’t want anybody else to feel like that"
let savee ='';
async function tagroba(theText) {
 
  
  const process = await spawn('python',["predict.py",theText]);
 

  savee+= process.toString();

  return savee;

}
 const bateekh =tagroba(text);


 bateekh.then(function(result) {
  console.log(result) 
})


 //console.log(process.toString())
 /* savee = process+"";
  } catch (e) {
    console.log(e.stderr +"")
  }*/
 

  //console.log(process.toString());
//let theData = []
/////////////////////////////////////////////
//process.stdout.on('data', (data) => {
   
 // theData += data;
  // console.log(`stdout: ${data}`);
  //console.log(theData);
  //console.log(data.toString());
  //save += data.toString();
//});
  
 /* process.stderr.on('data', (data) => {
    //console.error(`stderr: ${data}`);
  });
  
  process.on('close', (code) => {
    //console.log(`child process exited with code ${code}`);
  });

  return{
    data:theData
  }
  */