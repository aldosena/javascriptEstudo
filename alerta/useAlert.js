export class useAlert{
  constructor(){
      const alert = document.createElement('div');
      alert.classList.add('alert', 'alert-warning');
      alert.setAttribute('id', 'main-alert');
      if (!document.getElementById('main-alert')){
          document.body.appendChild('alert');
      }
      this.alert = document.getElementById('main-alert');
  }// constructor

  clear(inSeconds = 0){
    if(inSeconds){
        setTimeout(() => this.alert.style.display = "none", inSeconds * 1000);
    }else{
       this.alert.style.display = "none";
    }
    return this;
}

  loading(){
    this.alert.classList.remove("alert-danger", "alert-success");
    this.alert.classList.add("alert-warning");
    this.alert.innerHTML = `<b> Carregando informações... </b>`; 
    this.alert.style.display = "flex";
    this.alert.style.alignItems = "center";
    this.alert.style.gap = "lem";
    return this;
  }

  perigo(avi){
    this.alert.classList.remove("alert-danger", "alert-success");
    this.alert.classList.add("alert-warning");
    this.alert.innerHTML = `<p class="aviso"> ${avi} </p>`; 
    this.alert.style.display = "flex";
    this.alert.style.alignItems = "center";
    this.alert.style.gap = "lem";
    return this;
  }


  render(status, message){
        // this.alert.display = "block";
        this.alert.classList.remove("alert-warning", "alert-success", "alert-danger");
        this.alert.classList.add((status) ?  "alert-success" : "alert-danger");
        this.alert.innerHTML = message;
        return this;
  }// render
  

}