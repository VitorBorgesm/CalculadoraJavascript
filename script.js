function ExibirOperacoes() {
  var X = 10;
  var y = 100;
  var soma = x + y;
  var subtracao = x - y;
  var multiplicacao = x * y;
  var divisao = x / y;
  alert(
    "Valores: " +
      x +
      ", " +
      y +
      "\n" +
      "\nSoma: " +
      soma +
      "\nSubtração: " +
      subtracao +
      "\nMultiplicação: " +
      multiplicacao +
      "\nDivisão: " +
      divisao
  );
}

function tabuadacinco() {
  for (var num = 1; num < 11; num++) {
    document.getElementById("tabuada5").innerHTML +=
      num + " X 5 =" + num * 5 + "<br>" + "\n";
  }
}

function ExibirTabuadaNum() {
  var num = prompt("Digite um número: ");
  if (num == undefined || num == "") {
    alert("Insira um número");
    document.getElementById.innerHTML = "";
  } else {
    for (var i = 1; i < 11; i++) {
      document.getElementById("tabuada").innerHTML +=
        i + " X " + num + " = " + i * num + "<br>" + "\n";
    }
  }
}

document.getElementById("btnCalcular").onclick = function () {
  var radios = document.getElementsByName("operacao");
  Calculadora();
};

function Calculadora() {
  var valor1 = document.getElementById("textinput1").value;
  var valor2 = document.getElementById("textinput2").value;

  if (document.getElementById("multiplicacao").checked) {
    alert(valor1 * valor2);
  } else if (document.getElementById("divisao").checked) {
    alert(valor1 / valor2);
  } else if (document.getElementById("soma").checked) {
    alert(parseInt(valor1) + parseInt(valor2));
  } else if (document.getElementById("subtracao").checked) {
    alert(valor1 - valor2);
  } else {
    alert("Selecione uma das operações!");
  }
}

function Array() {
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var numerosPares = [];

  numeros.forEach(function (numero) {
    if (numero % 2 == 0) {
      var adicionar = numerosPares.push(numero);
    }
  });

  alert(
    "Array:" +
      "\n" +
      numeros +
      "\n\n" +
      "Números pares do array: " +
      "\n" +
      numerosPares
  );
}

function CustoCarro() {
  var custoFabrica = prompt("Custo de fábrica:");
  var percDistribuidor = prompt("Percentual do distribuidor:");
  var percImpostos = prompt("ercentual de impostos:");
  var valorfinal =
    parseInt(custoFabrica) +
    parseInt(custoFabrica) * (parseInt(percDistribuidor) / 100) +
    parseInt(custoFabrica) * (parseInt(percImpostos) / 100);
  alert("Valor final:" + "\nR$ " + valorfinal);
}
