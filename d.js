let os = document.getElementById('num');
function input(nu){
  os.value = os.value+nu;
}
function calculate(){
    try{
      os.value = eval(os.value);
    }
    catch(err){
      alert("Invalid input");
    }
  }
  function allclear(){
    os.value='';
  }
  function del(){
    os.value = os.value.slice(0,-1);
  }