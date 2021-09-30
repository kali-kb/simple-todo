btn = document.getElementById("btn")
btn.addEventListener('click', addTodo);

function addTodo(e){
  const form = document.getElementById("form")
  const input = document.querySelector("#input")
  var label = document.createElement("label")
  var tickbox = document.createElement("input")
  //var value = item.value
 
  var item = document.createElement("span")
  item.textContent = input.value
  if (item.textContent.length > 0){
    form.appendChild(label)
    tickbox.setAttribute("type", "checkbox")
    label.appendChild(tickbox)
    label.appendChild(item)
    var br = document.createElement("br")
    form.appendChild(br)
    if (!tickbox.checked){
      tickbox.addEventListener("click", function(e){
      const textStyle =tickbox.nextSibling.style
      textStyle.textDecoration = 'line-through'
      textStyle.color = "gray";
     })
    }
  }
  else{
    input.placeholder = "Cant be Empty Type something"
  }

}