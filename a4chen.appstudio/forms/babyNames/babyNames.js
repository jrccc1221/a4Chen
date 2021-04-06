let Select1 = ["Chen", "Russell", "Simpsons", "Alex", "Greg", "Michael", "Arjun", "Riley", "Sam", "Tim", "Lauran", "Benny", "Hank", "Jeff", "Johnson"]
let favName = []
program3.onshow=function(){
  Select1.clear()
  for (i = 0; i < Select1.length; i++)
    Select1.addItem(Select1[i])
}
btn1.onclick=function(){
  favName.push(Select1.value)
  console.log(favName)
}

Button1.onclick=function(){
  ChangeForm(program3b)
}
