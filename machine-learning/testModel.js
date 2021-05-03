const spawn = require('await-spawn');
//const text = "“I used to think the worst thing in life was to end up all alone, it’s not. The worst thing in life is to end up with people that make you feel all alone. Sometimes, you need to be alone. Not to be lonely, but to enjoy your free time being yourself. Standing alone is better than standing with people who don’t value you. You smile, but you wanna cry. You talk, but you wanna be quiet. You pretend like you’re happy, but you aren’t Standing alone doesn’t mean I am alone. It means I’m strong enough to handle things all by myself You may feel lost and alone. But God knows where you are and has a good plan for your future"
let savee ='';
async function pythonExcute(theText) {
 
  try {
  const process = await spawn('python',["predict.py",theText]);
 

  savee+= process.toString();
  return savee;
}catch(e){
  console.log(e.stderr.toString())
 
}
}
 const personality =pythonExcute(text);


 personality.then(function(result) {
  console.log(result) 
})

module.exports = {
  pythonExcute,
};

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