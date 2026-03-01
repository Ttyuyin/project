function showTime(){
    let d = new Date();
    document.getElementById('time').innerHTML = d.toLocaleString('zh-CN');
}
showTime();
setInterval(showTime,1000)
