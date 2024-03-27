require("dotenv").config()

const m = require('masto')

const masto = m.createRestAPIClient({
    url: "https://networked-media.itp.io/",
    accessToken: process.env.TOKEN
})

async function makeStatus(text){
    
    let rand = Math.floor(Math.random() * 224) +1
    const url = "https://api.adviceslip.com/advice" + rand;
    let response = await fetch(url);

    let jsonData = await response.json().then(success, err);

    jsonData.then(success, err);
}

async function success(response){
    const status = await masto.v1.statuses.create({
        status: response.slip.advice,
        visibility: "public"
    })

    console.log(status.url)
}

// makeStatus()
setInterval(()=>{
    // let emo = [":)",":(",":'(",":P"]
    // let message = emo[rand]
    makeStatus()
}, 5000)
//604800000

function err(error) {
    console.log(error);
}