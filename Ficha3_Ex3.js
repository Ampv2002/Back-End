function started(){
    console.log("Starting download");    
}
function update(){
    for (i=0; i<=100; i++){
        console.log(i,"% of Donwload")
    }
}
function completed(){
    console.log("Download completed");
}
function performDownload(){
    started();
    update();
    completed();
}
performDownload(started,update,completed)