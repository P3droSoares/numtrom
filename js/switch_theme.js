export default function () {
  const primaryKey = document.querySelectorAll(".primary-key");
  const functionKey = document.querySelectorAll(".function-key");
  const keys = document.querySelectorAll(".key");

  if (document.getElementById("switch_theme").checked) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#DEE3EA";
    document.getElementById("viewfielder").style.color = "#394148";

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
    document.getElementById("viewfielder").style.color = "#DFE2E6";

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
