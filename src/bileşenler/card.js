import axios from "axios";
const Card = makale => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("card");
  containerCard.addEventListener("click", e => console.log(makale.anabaslik));

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale.anabaslik;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  const spanYazar = document.createElement("span");
  spanYazar.textContent = makale.yazarAdi + " tarafından";

  imgDiv.append(img);
  author.append(imgDiv, spanYazar);
  containerCard.append(headline, author);

  return containerCard;
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
};

const cardEkleyici = secici => {
  axios.get("http://localhost:5001/api/makaleler").then(res => {
    const data = res.data.makaleler;
    for (let bolum in data) {
      //console.log(makaleler[bolum]);
      data[bolum].forEach(makale => {
        document.querySelector(secici).append(Card(makale));
      });
    }
  });

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
