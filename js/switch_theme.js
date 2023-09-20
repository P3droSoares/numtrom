export default function () {
  const primaryKey = document.querySelectorAll(".primary-key");
  const functionKey = document.querySelectorAll(".function-key");
  const keys = document.querySelectorAll(".key");

  if (document.getElementById("switch_theme").checked) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#DEE3EA";
    document.getElementById("viewfielder").style.color = "#394148";

    document.getElementById("result-key").style.backgroundColor = "#dee3ea";
    document.getElementById("result-key").style.color = "#33363b";
    document.getElementById("result-key").style.boxShadow =
      "5px 5px 10px #C8CCD1, -1px -1px 1px #F0F0F0";

    document.getElementById("light-mode").style.opacity = 0.7;
    document.getElementById("dark-mode").style.opacity = 0.3;
    document.querySelector(".switch_theme_box > label").style.backgroundColor = "#d3d8df"

    keys.forEach((key) => {
      key.style.backgroundColor = "DEE3EA";
      key.style.boxShadow = "5px 5px 10px #C8CCD1, -1px -1px 1px #F0F0F0";
    });
    primaryKey.forEach((key) => {
      key.style.color = "#3A4249";
    });

    functionKey.forEach((key) => {
      key.style.color = "#007E86";
    });
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#33363b";
    document.getElementById("viewfielder").style.color = "#dfe2e6";

    document.getElementById("result-key").style.backgroundColor = "#ee8147";
    document.getElementById("result-key").style.color = "#33363b";
    document.getElementById("result-key").style.boxShadow =
      "5px 5px 10px #212327, -1px -1px 1px #3A4249";

    document.getElementById("light-mode").style.opacity = 0.3;
    document.getElementById("dark-mode").style.opacity = 0.7;
    document.querySelector(".switch_theme_box > label").style.backgroundColor = "#7d8083"

    keys.forEach((key) => {
      key.style.backgroundColor = "#33363B";
      key.style.boxShadow = "5px 5px 10px #212327, -1px -1px 1px #3A4249";
    });
    primaryKey.forEach((key) => {
      key.style.color = "#DFE2E6";
    });

    functionKey.forEach((key) => {
      key.style.color = "#EE8147";
    });
  }
}
