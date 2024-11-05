window.onload = () =>{
    console.log("iu")
    "use strict"
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js")
    }
}