const navLinks = document.querySelectorAll("nav ul li a");
const sections = {
  home: document.getElementById("home"),
  characters: document.getElementById("characters"),
  movie: document.getElementById("movie"),
  more: document.getElementById("more"),
};

function hideAllSections() {
  Object.values(sections).forEach(sec => {
    sec.classList.add("hidden");
  });
}

function showSection(name) {
  if (sections[name]) {
    sections[name].classList.remove("hidden");
  }
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.forEach(nav => nav.classList.remove("active"));
    hideAllSections();

    link.classList.add("active");

    const clicked = link.textContent.trim().toLowerCase();
    showSection(clicked);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById("nav-links").classList.remove("show");
  });
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

function showMovieDetail(movieId) {
  document.getElementById("movie-list").style.display = "none";
  document.getElementById("movie-detail").style.display = "block";

  let detailHTML = "";

  if (movieId === "ta") {
    detailHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/eOrNdBpGMv8?si=upjrzhDYXBxNRA8x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2>The Avengers</h2>
      <p>United they stand, divided they fall.</p>
    `;
  } else if (movieId === "aou") {
    detailHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tmeOjFno6Do?si=RnWEFsurFAHiz2Kq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2>Avengers Age Of Ultron</h2>
      <p>The end of the path I started us on.</p>
    `;
  } else if (movieId === "iw") {
    detailHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8?si=svUCkcjTYIQHra9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2>Avengers Infinity War</h2>
      <p>We’re in the endgame now.</p>
    `;
  } else if (movieId === "eg") {
    detailHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c?si=s6bZhfr6xgrGeRiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2>Avengers End Game</h2>
      <p>Whatever it takes.</p>
    `;
  } 

   document.getElementById("movie-detail-content").innerHTML = detailHTML;
}

function backToMovieList() {
  document.getElementById("movie-detail").style.display = "none";
  document.getElementById("movie-list").style.display = "block";
}