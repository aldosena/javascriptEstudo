export class myAlert {
  constructor() {
    this.alert = document.createElement("div");
    this.alert.className = "myAlert";
    this.alert.style.display = "none";
    this.alert.style.position = "fixed";
    this.alert.style.top = "50%";
    this.alert.style.left = "50%";
    this.alert.style.transform = "translate(-50%, -50%)";
    this.alert.style.backgroundColor = "#fff";
    this.alert.style.border = "1px solid #ccc";
    this.alert.style.padding = "20px";
    this.alert.style.zIndex = 1000;
    document.body.appendChild(this.alert);
  }

  show(message) {
    this.alert.innerHTML = message;
    this.alert.style.display = "block";
  }