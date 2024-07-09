window.onload=function(){
    localStorage.clear()
    simple()
}
function simple(){
    var a = document.getElementById("ideas")
    a.innerHTML = " "
    var something =""
    Object.keys(localStorage).forEach(function(key,index){
      var c = localStorage.getItem(key)
      something+=(index+1)+": "+c+"<br>"
}
)
a.innerHTML = something

}
function welcome(){
    var e = document.getElementById("fan").value
    var f = localStorage.length
    localStorage.setItem(f,e)


simple()
}
