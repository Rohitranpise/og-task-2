const btn1 = document.querySelector(".post_btn");
const btn2 = document.querySelector(".album_btn");

//photosData
btn1.addEventListener("click", () => {
  photosData();
});
const photosData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((ele) => {
      let ele1 = "";
      ele.map((value) => {
        ele1 += `<div class="album"
          <p>id: ${value.id}</p>
          <p>title: ${value.title}</p>
          <p>body: ${value.body}</p>
          </div>`;
      });
      document.querySelector(".displayPosts").innerHTML = ele1;
    });
};

//albumsData
btn2.addEventListener("click", () => {
  albumsData();
});
const albumsData = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => {
      return res.json();
    })
    .then((ele) => {
      let ele1 = "";
      ele.map((value) => {
        ele1 += `<div class="posts"
          <p>id: ${value.id}</p>
          <p>title: ${value.title}</p>
          </div>`;
      });
      document.querySelector(".displayPosts").innerHTML = ele1;
    });
};
