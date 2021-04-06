babyNames.onshow=function(){
  for(let j = 0; j < favName.length; i++) {
  favBabys.addItem(favName[i])
  }
  
}
favbtn.onclick=function(){
  overallFav = favBabys.value
  lbl3.value = `Your favorite is ${overallFav}`
  
}