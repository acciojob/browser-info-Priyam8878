//your JS code here. If required.
const para = document.createElement("div");
para.innerHTML = "You are using "+browserName + "  " + versionName
document.getElementById("browser-info").appendChild(para);