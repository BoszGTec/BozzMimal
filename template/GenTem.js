function genTem(tem,key,value){
  for(let i=0;i<key.length;i++){
    tem = tem.replace("{{"+key[i]+"}}",value[i])
  }
  document.body.innerHTML+=tem
}

let button='<input type="button" value="wow" />\n\
    <input type="button" class="fill" value="wow" />\n'
for(let i=1;i<12;i++){button+=button}
