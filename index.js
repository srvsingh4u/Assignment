const icon = document.querySelector(".icon");
const popup = document.querySelector(".popup");
const cut = document.querySelector(".close");

icon.addEventListener("click", function () {
  popup.style.display = "flex";
 
});

cut.addEventListener("click", function () {
  popup.style.display = "none";
});

const commonBtn = document.querySelector("#common");
const sportsBtn = document.querySelector("#sports");
const technologyBtn = document.querySelector("#technology");
const entertainmentBtn = document.querySelector("#entertainment");
const businessBtn = document.querySelector("#business");

const category = document.querySelector("#category");
const para = document.querySelectorAll(".wholepara");

const apiKey = "8e4a101bc8754a228d8f1052a10757e6";
commonBtn.addEventListener("click", async function () {
  category.textContent = "Common News";
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`
  );

  printData(res.data);

  // console.log(res.data);
  //   console.log(res.data.articles[0].title);
  //   console.log(res.data.articles[0]);
  //   console.log(res.data.articles[0].description);
});

sportsBtn.addEventListener("click", async function () {
  del();
  category.textContent = "Sports News";
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`
  );
  printData(res.data);
});
technologyBtn.addEventListener("click", async function () {
  category.textContent = "Technology News";
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=${apiKey}`
  );
  printData(res.data);
});
entertainmentBtn.addEventListener("click", async function () {
  category.textContent = "Entertainment News";
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`
  );
  printData(res.data);
});
businessBtn.addEventListener("click", async function () {
  category.textContent = "Business News";
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
  );

  printData(res.data);
});

const printData = (d) => {
  //   console.log(d);

  d.articles.map((m) => {
    // console.log(m);

    const po = document.createElement("p");
    po.classList.add("wholepara");
    po.innerText = m.title;
    document.body.append(po);
    const description = document.createElement("p");
    description.innerText = `Description-${m.description}`;
    po.append(description);
    const readmore = document.createElement("a");
    readmore.classList.add("buttonnmore");
    readmore.innerText = "Read more";
    readmore.href = m.url;
    description.append(readmore);
  });
};

const del = function () {
  let a = document.body;
  para.innerText = " ";
};
