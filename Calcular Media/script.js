function media(){
  const num1 = Number(document.querySelector("input#num1").value);
  const num2 = Number(document.querySelector("input#num2").value);
  const resultado = document.querySelector('div#resultado')
  const media = (num1 + num2)/2;
  resultado.innerHTML = `a media dos valores e: ${media}`;
}
