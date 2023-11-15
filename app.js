const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const productDescription = document.getElementById("productDescription");

const products = [
  {
    id: 1,
    title: "Ice Milk",
    price: 25000,
    colors: [
      {
        code: "brown",
        img: "BAHAN-WEBSITE/FNB/SUSU-COKLAT3.png",
      },
      {
        code: "hotpink",
        img: "BAHAN-WEBSITE/FNB/SUSU-ST2.png",
      },
      // {
      //   code: "green",
      //   img: "BAHAN-WEBSITE/FNB/SUSU-MELON.png",
      // },
    ],
    description: "MCQUNNES adalah Usaha kuliner yang menyediakan minuman susu segar. Kami menawarkan beragam varian rasa, termasuk original, cokelat, dan strawberry. Minuman ini cocok sebagai pendamping santai dengan ciri khas rasa ringan dan kemasan yang modern. Ide bisnis ini muncul dari pengamatan terhadap potensi bisnis minuman segar di wilayah UNNES , menjadikan minuman susu segar sebagai pilihan yang diminati oleh banyak mahasiswa. Untuk tujuan pengenalan dan pemasaran produk, kami aktif dalam berbagai platform media sosial, terutama melalui akun Instagram resmi kami @mcqunnes. Informasi tentang Pemilik Usaha dapat menghubungi (Whatsapp:089509518100) (alvinfg@gmail.com)"
  },
  {
    id: 2,
    title: "Jersey",
    price: 500000,
    colors: [
      {
        code: "yellow",
        img: "BAHAN-WEBSITE/CLOTHING/adidas-kuning.png",
      },
      {
        code: "black",
        img: "BAHAN-WEBSITE/CLOTHING/nike-hitam.png",
      },
    ],
    description: "Pathzmon Sport, kami merupakan reseller terpercaya yang menawarkan koleksi eksklusif dari brand-brand olahraga ternama seperti Nike, Adidas, dan brand terkenal lainnya. Kami menghadirkan jersey olahraga asli dan resmi, mulai dari sepak bola, badminton, ataupun basket dari skala klub hingga tim nasional, memberikan pelanggan pengalaman berbelanja yang tidak hanya mudah tetapi juga memuaskan. Dengan fokus pada keaslian produk, pilihan yang luas, pelayanan pelanggan yang ramah, dan pengiriman yang cepat, kami hadir untuk memenuhi kebutuhan pencinta olahraga yang menginginkan jersey resmi berkualitas tinggi. Informasi tentang Pemilik Usaha dapat menghubungi (Whatsapp:089577623450) (reyhan@gmail.com)"
  },
  {
    id: 3,
    title: "Service",
    price: 20000,
    colors: [
      {
        code: "black",
        img: "BAHAN-WEBSITE/SERVICES/gambar-mobil.png",
      },
      {
        code: "silver",
        img: "BAHAN-WEBSITE/SERVICES/motor.png",
      },
    ],
    description: "Anjemin Aja adalah sebuah layanan transportasi berbasis sepeda motor dan mobil yang ditujukan untuk mahasiswa di wilayah kampus dan sekitarnya di Semarang. Layanan ini didesain untuk memberikan alternatif transportasi yang nyaman, aman, dan terjangkau bagi mereka yang memerlukan layanan antar-jemput. Anjemin Aja menawarkan tarif yang kompetitif, lebih terjangkau dibandingkan dengan layanan ojek online lainnya. Dengan adanya layanan kami, mahasiswa dapat dengan mudah mengakses transportasi di dalam kampus atau perjalanan ke lokasi-lokasi di sekitar Semarang. Informasi tentang Pemilik Usaha dapat menghubungi (Whatsapp:0877277334123) (bahrum@gmail.com)"
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
// const currentProductDesc = document.querySelectorAll(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    // currentProductPrice.textContent = "Rp. " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    productDescription.textContent = choosenProduct.description;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
