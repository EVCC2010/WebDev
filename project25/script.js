const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgd = document.querySelectorAll(".animated-bg");
const animated_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1663660374106-87adf01ae522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" alt=""/>';
  title.innerHTML = "Lorem ipsum dolor sit.";
  excerpt.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, excepturi?";
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2022";

  animated_bgd.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

// https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80
