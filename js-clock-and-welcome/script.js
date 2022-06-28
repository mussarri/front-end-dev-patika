
const name = prompt("İsminiz nedir")
console.log(name)
function getTime(){
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes()
    m = addZero(m);
    let s = today.getSeconds()
    s = addZero(s);
    const d = today.getDay();
    const days = ["Pazar","Pazartesi","Salı"
    , "Çarşamba", "Perşembe", "Cuma", "Cumartesi"
    ]
    document.querySelector("body").innerHTML = ` 
        
    <span>Kodluyoruz</span>
    <h1>Hosgeldin ${name}</h1>

    <div class="clock">
        <!-- HOUR -->
        <div class="numbers">
        <p class="hours">${h}</p>
        <p class="placeholder"></p>
        </div>
        <div class="colon">
        <p>:</p>
        </div>
        <!-- MINUTE -->
        <div class="numbers">
        <p class="minutes">${m}</p>
        <p class="placeholder"></p>
        </div>
        <div class="colon">
        <p>:</p>
        </div>
        <!-- SECOND -->
        <div class="numbers">
        <p class="seconds">${s}</p>
        <p class="placeholder"></p>
        </div>        
    </div>
    <p>tarihinde Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.</p>
  `

    setInterval(getTime ,1000)
}

function addZero(x){
    if(x < 10){ x = "0" + x}
    return x;
}


getTime()

