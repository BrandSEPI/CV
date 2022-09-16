const myJson = {
  default: "Cliquez sur un élément si vous souhaitez plus d'informations",
  profil:
    "En dehors du développement, je suis passionné de ski et de jeux vidéo",
  python:
    "Création de modèles de régression, classification et clustering via scikit-learn",
  js: "Création d'un bot discord en JS avec le module discord.js et utilisation de vueJS pour réaliser le front d'une web app",
  php: "Création d'une API pour une web app via Laravel",
  html: "Intégration et réalisation de site web responsive",
  sql: "Création de DB, débute dans l'utilisation de LAMP",
  git: "commandes de base",
  formLicence:
    "Formation de chirurgie expérimentale réalisée en alternance, dernière formation avant la transition avec le développement",
  formCodAc: "Apprentissage des bases du developpement web, AI engineer",
  formMSC: "toujours en cours, a appris a utilisé le framework CSS Materialize",
  proHypharm: `mois en tant quemployé et 1 an en tant qu'alternant, j'ai aidé a la gestion de l'élevage de lapin et je réalisais les injections et les prélevements de sang. Vous pouvez avoir plus d'informations sur le métier <a class="black-text" href="https://www.hellowork.com/fr-fr/metiers/technicien-animalier.html">ici</a>`,
  proNamsa: "application des études fournis par les clients",
  hadopiw:
    "Projet en vueJS et Laravel qui a pour but de garder un historique des prix des objets du jeu Dofus",
  collab: "Backtest de paramètres pour un bot de trading de cryptomonnaies",
};

document.addEventListener("DOMContentLoaded", (event) => {
  // select element
  const eye = document.querySelectorAll(".eyeBall");
  const arrowBox = document.querySelector(".arrow_box");
  const messageContent = document.querySelector(".content");
  const profilBox = document.querySelector(".profil");
  const robotBox = document.querySelector(".robot");
  const pythonBox = document.querySelector(".python");
  const javascriptBox = document.querySelector(".js");
  const phpBox = document.querySelector(".php");
  const htmlBox = document.querySelector(".html");
  const sqlBox = document.querySelector(".sql");
  const gitBox = document.querySelector(".git");
  const licenceBox = document.querySelector(".licence");
  const codAcBox = document.querySelector(".codAc");
  const mscBox = document.querySelector(".msc");
  const hypharmBox = document.querySelector(".hypharm");
  const namsaBox = document.querySelector(".namsa");
  const hadopiwBox = document.querySelector(".hadopiw");
  const collabBox = document.querySelector(".collab");
  const name = document.querySelector(".name");
  const nav = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const loading = document.querySelector(".loading");
  const goUp = document.querySelector(".up-arrowBtn");
  // materialize
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, true);
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, true);

  arrowBox.style.display = "block";
  messageContent.innerHTML = myJson.default;
  setTimeout(function () {
    arrowBox.style.display = "none";
  }, 5000);

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset <= 10) {
      name.classList.remove("nameTop");
      nav.classList.remove("navBarTop");
    } else {
      name.classList.add("nameTop");
      nav.classList.add("navBarTop");
    }

    // name.style.display = "none"
  });

  //move Eye robot
  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    let left = (clientX / innerWidth) * 45;
    let top = (clientY / innerHeight) * 100;

    left = left < 25 ? 25 : left;
    left = left > 50 ? 50 : left;
    top = top < 25 ? 25 : top;
    top = top > 65 ? 65 : top;

    eye.forEach((f) => {
      f.style.left = `${left > 45 && left < 55 ? 50 : left}%`;
      f.style.top = `${top > 45 && top < 90 ? 50 : top}%`;
    });
  });

  let messageFunction = (extension) => {
    messageContent.innerHTML = myJson[extension];
    arrowBox.style.display = "block";
    setTimeout(function () {
      arrowBox.style.display = "none";
      messageContent.innerHTML = myJson.default;
    }, 5000);
  };

  // profil click
  profilBox.addEventListener("click", (e) => {
    messageFunction("profil");
  });

  //robot click
  robotBox.addEventListener("click", (e) => {
    messageFunction("default");
  });

  //python click
  pythonBox.addEventListener("click", (e) => {
    messageFunction("python");
  });

  //js click
  javascriptBox.addEventListener("click", (e) => {
    messageFunction("js");
  });

  //php click
  phpBox.addEventListener("click", (e) => {
    messageFunction("php");
  });

  //html click
  htmlBox.addEventListener("click", (e) => {
    messageFunction("html");
  });

  //sql click
  sqlBox.addEventListener("click", (e) => {
    messageFunction("sql");
  });

  //gitHub click
  gitBox.addEventListener("click", (e) => {
    messageFunction("git");
  });

  //licence click
  licenceBox.addEventListener("click", (e) => {
    messageFunction("formLicence");
  });

  //codAc click
  codAcBox.addEventListener("click", (e) => {
    messageFunction("formCodAc");
  });

  //msc click
  mscBox.addEventListener("click", (e) => {
    messageFunction("formMSC");
  });

  //hypharm click
  hypharmBox.addEventListener("click", (e) => {
    messageFunction("proHypharm");
  });

  //namsa click
  namsaBox.addEventListener("click", (e) => {
    messageFunction("proNamsa");
  });

  //hadopiw click
  hadopiwBox.addEventListener("mouseover", (e) => {
    messageFunction("hadopiw");
  });

  //collab click
  collabBox.addEventListener("mouseover", (e) => {
    messageFunction("collab");
  });

  window.addEventListener("scroll", (e) => {
    sections.forEach((a) => {
      let opacity = 320 / Math.abs(window.scrollY - a.offsetTop);

      a.style.opacity = `${opacity}`;
    });

    let percentage =
      Math.round((window.scrollY * 100) / document.body.scrollHeight) + 20;
    loading.style.width = `${percentage}%`;
    console.log(percentage);
    if (percentage > 90) {
      goUp.style.display = "block";
    } else {
      goUp.style.display = "none";
    }
  });

  goUp.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
  });
});
