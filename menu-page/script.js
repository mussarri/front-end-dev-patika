let foods = [
    {
        id:0,
        title: "Doroyaki",
        price: "10.99$",
        category: "japon",
        img: "assets/Dorayaki-recipe-red-bean.jpg",
        desc: "Dorayaki Imagawayaki'nin bir değişik versiyonudur. Ama o daha incedir."
    },
    {
        id:1,
        title: "Sushi",
        price: "9.99$",
        category: "japon",
        img: "assets/sushijpg.jpg",
        desc: "Pirinç sirkesinde haşlanan pirincin çeşitli deniz mahsulleri ile sunulduğu bir yemektir."
    },
    {
        id:2,
        title: "Ramen",
        price: "14.99$",
        category: "japon",
        img: "assets/Ramen-1-1068x561.jpg",
        desc: "Çorba içinde sunulan erişte, Japonya’da ramen olarak isimlendiriliyor. Genellikle et suyundan yapılıyor ve içine kurutulmuş deniz yosunu, yeşil soğan, mısır gibi malzemeler ekleniyor."
    },
    {
        id:3,
        title: "Onigiri",
        price: "8.99$",
        category: "japon",
        img: "assets/onigiri.jpg",
        desc: "Görüntü olarak sushiye oldukça benzeyen Onigiri, etrafı kurutulmuş yosun ile kaplı olan, sushi pilavı ile yapılan oldukça popüler bir Japon yiyeceği. "
    },
    {
        id:4,
        title: "Gyoza",
        price: "4.99$",
        category: "japon",
        img: "assets/gyoza.jpg",
        desc: "İçerisinde bol sarımsağın, çeşitli sebzelerin ve et karışımının olduğu hamurun ızgarada kızartılması ile yapılıyor.  "
    },
    {
        id:5,
        title: "Tempura",
        price: "6.99$",
        category: "japon",
        img: "assets/tempura.jpg",
        desc: "Aslen bir Portekiz yemeği olduğu düşünülen ancak tüm dünyada Japon yemeği olarak nam salan tempura, ekmek kırıntılarına batırılmış deniz mahsullerinin ve sebzelerin tavada kızgın yağ ile kızartılması ile yapılıyor. "
    },
    {
        id:6,
        title: "Bibimbap",
        price: "12.99$",
        category: "korea",
        img: "assets/Bibimbap-768x432.jpg",
        desc: "Pirinç eşliğinde servis edilen çeşitli sebzelerden oluşan bu yemek Güney Kore yemek kültürü için mihenk taşlarından biri olarak kabul edilmektedir. "
    },
    {
        id:7,
        title: "Bulgogi",
        price: "6.99$",
        category: "korea",
        img: "assets/Bulgogi-1068x712.jpg",
        desc: "Sığır eti kullanılan yemek içinde yoğun bir şekilde sos ve sarımsak da kullanılmaktadır."
    },
    {
        id:8,
        title: "Tempura",
        price: "6.99$",
        category: "japon",
        img: "assets/Dorayaki-recipe-red-bean.jpg",
        desc: "Aslen bir Portekiz yemeği olduğu düşünülen ancak tüm dünyada Japon yemeği olarak nam salan tempura, ekmek kırıntılarına batırılmış deniz mahsullerinin ve sebzelerin tavada kızgın yağ ile kızartılması ile yapılıyor. "
    },
    {
        id:9,
        title: "Ramen",
        price: "5.99$",
        category: "korea",
        img: "assets/Ramen-1-1068x561.jpg",
        desc: "Bildiğimiz uzun makarnanın Güney Kore yemekleri içindeki adı ramen. Bu makarna çeşitli baharatların eklenmesiyle pişiriliyor. "
    },
    {
        id:10,
        title: "Galbi",
        price: "3.99$",
        category: "korea",
        img: "assets/Galbi.jpg",
        desc: "Genelde domuz etiyle hazırlanan bu ızgarada pişmiş etleri dana etiyle hazırlanmış bir şekilde bulabiliyorsunuz."
    },
    {
        id:11,
        title: "Çin Pilavı",
        price: "11.99$",
        category: "china",
        img: "assets/çinpilavıindex.jpg",
        desc: "Çin mutfağında sık sık kullanılan pirinç, kimi zaman pilav, kimi zaman deniz ürünleri yapımında kullanılır. Bizdeki sebzeli pilava çok benzeyen Çin pilavı, havuç, bezelye, yumurta gibi garnitürlerle zenginleştirilmiştir."
    },
    {
        id:12,
        title: "Spring Rolls",
        price: "8.99$",
        category: "china",
        img: "assets/spingrollersindex.jpg",
        desc: "Spring rolls olarak da bilinen Çin böreği, sebzeli harç ile doldurulur. Galeta ununa batırılan börek, fırında pişirildikten sonra çayla birlikte servis edilir. Çıtır çıtır çin böreğini, farklı iç harçlarla da deneyebilirsiniz."
    },
    {
        id:13,
        title: "Kardiesli Noodle",
        price: "5.99$",
        category: "china",
        img: "assets/karideslinoodle.jpg",
        desc: "Çin eriştesi olarak da bilinen noodle, deniz ürünleriyle birlikte sunulduğunda ortaya nefis bir yemek çıkar."
    },
    {
        id:14,
        title: "Çin Usulü Sebzeli Bonfile",
        price: "7.99$",
        category: "china",
        img: "assets/çinusülüsebzelibonfile.jpg",
        desc: "Ülkemizde et yemeklerinin yeri bir başkadır. İşte, tarif defterinize ekleyebileceğiniz nefis bir yemek. Özel sosla harmanlanan bonfileleri, sotelenmiş sebze ile birlikte servis edebilirsiniz."
    },
    {
        id:15,
        title: "Ballı Susamlı Tavuk",
        price: "6.99$",
        category: "china",
        img: "assets/ballısısamlıtavuk.jpg",
        desc: "Klasik tavuk yemeklerden sıkılanlar için bal, susam ve soya sosu ile hazırlanan enfes bir önerimiz var. Sadece görünümü bile karnınızı acıktırmaya yetiyorsa, hiç beklemeden bu tarifi denemenizi öneriyoruz."
    }
]

const cardItems = document.getElementById("items")
const buttons = document.getElementById("groups")
let filtered = foods;
filtered.forEach(item => {
    loadCards(item)
})


buttons.addEventListener("click", learnCategory)

function makeCard(item){
    let card = `
            <div class="rounded mt-4" style="min-width:150px; width: 150px; height:100px; overflow: hidden; border: 4px solid black; background-image: url(${item.img});">
                <img src="${item.img}" alt="" style="width:110%; height:auto; margin:auto 0; ">
            </div>
            <div class="text-left ml-3">
                <div class="border-bottom mb-2 p-2 d-flex justify-content-between" >
                    <div>${item.title}</div>
                    <div class="btn-link" >${item.price}</div>
                </div>
                <div class="small-text" >${item.desc}</div>
            </div>
            `;
    return card;
}

function learnCategory(e){
    cardItems.innerHTML = ""
    const category = e.target.id
    if(category == "all"){
        filtered = foods
    }else{
        filtered = foods.filter(item => item.category == category);    
    }
    filtered.forEach(item => {
        loadCards(item)
    });
        
} 

function loadCards(item){
    let div = document.createElement("div") 
    div.className = "d-flex col-12 col-md-6 mt-3"
    div.innerHTML = makeCard(item)
    cardItems.appendChild(div)
}
 
