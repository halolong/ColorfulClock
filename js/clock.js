function loop() {
    var today=new Date();
    var H = getH(today);
    var M = getM(today);
    var S = getS(today);
    H = CheckFormat(H);
    M = CheckFormat(M);
    S = CheckFormat(S)
    var s1=H+" : "+M+" : "+S;
    var s2="#"+""+H+""+M+""+S;
    document.getElementById("time1").innerHTML=s1;
    document.getElementById("time2").innerHTML=s2;
    document.getElementById("body").style.backgroundColor=s2;

}
function getH(today) {
    return today.getHours();
}
function getM(today) {
    return today.getMinutes();
}
function getS(today) {
    return today.getSeconds();
}
function CheckFormat(i) {
    if(i < 10){
        i = "0"+i;

    }return i;
}