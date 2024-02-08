am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.create("grafRedeTransac", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

var tamanhoNodes = 10;

//Cores links

var corTransacAlert = am4core.color("#FF0000");

var corOutrasTransac = am4core.color("#2E75B6");

var corOpcSelec = am4core.color("#000");

var corOutrasInfo = am4core.color("#AFABAB");


//Cores clientes
var corRiscoMuitoAlto = am4core.color("#FF9797");

var corRiscoAlto = am4core.color("#FFC271");

var corRiscoModerado = am4core.color("#FFFF93");

var corRiscoBaixo = am4core.color("#92D050");

var corRiscoMuitoBaixo = am4core.color("#81FF84");

var corRiscoNaoCliente = am4core.color("#A6A6A6");

// Set data
series.data = [{
  "name": "Antônio",
  "children": [{
    "name": "Endereço", "value": tamanhoNodes, "image": "./icons/casa.png", "color": am4core.color("#AFABAB")
  }, {
    "name": "Número de Alertas: 16", "value": tamanhoNodes, "image": "./icons/lupa.png", "color": am4core.color("#AFABAB")
  }, {
    "name": "Mídias Desabonadoras", "value": tamanhoNodes, "image": "./icons/jornal.png", "color": am4core.color("#AFABAB")
  }, {
    "name": "Conta Corrente", "value": tamanhoNodes, "image": "./icons/ContaCorrente.png","color": am4core.color("#2E75B6"), "children":[{
        "name": "Beneficiário 1", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
      }, {
        "name": "Beneficiário 2", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoAlto
      }, {
        "name": "Beneficiário 3", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoBaixo
      }, {
        "name": "Beneficiário 4", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
      }, {
        "name": "Beneficiário 5", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoAlto
      }, {
        "name": "Beneficiário 6", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
      }, {
        "name": "Beneficiário 7", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoBaixo
      }, {
        "name": "Beneficiário 8", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
      }, {
        "name": "Beneficiário 9", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoBaixo
      }, {
        "name": "João - Parentesco: 3 Grau", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoMuitoAlto, "children":[{
            "name": "Beneficiário A", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
          }, {
            "name": "Beneficiário B", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoAlto
          }, {
            "name": "Beneficiário C", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoBaixo
          }, {
            "name": "Beneficiário D", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
          }, {
            "name": "Beneficiário E", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoAlto
          }, {
            "name": "Matheus - Parentesco: 1 Grau", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoMuitoAlto, "children": [{
                "name": "Beneficiário Z", "value": tamanhoNodes, "image": "./icons/user.png", "color": corRiscoNaoCliente
              }]
          }]
      }]
  }, {
    "name": "Poupança", "value": tamanhoNodes, "image": "./icons/Poupança.png","color": am4core.color("#2E75B6")
  },
  {
    "name": "Empréstimo", "value": tamanhoNodes, "image": "./icons/dinheiro.png","color": am4core.color("#2E75B6")
  },
  {
    "name": "Câmbio", "value": tamanhoNodes, "image": "./icons/globo.png","color": am4core.color("#2E75B6")
  },
  {
    "name": "Cartão de Crédito/Débito", "value": tamanhoNodes, "image": "./icons/cartaoCredito.png","color": am4core.color("#2E75B6")
  }],
  "value": tamanhoNodes,
  "off": true,
  "image": "./icons/user.png",
  "color": corRiscoMuitoAlto,
}];

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";
series.dataFields.collapsed = "off";
series.dataFields.color = "color";

series.nodes.template.expandAll = false;

// Close other nodes when one is opened
// series.nodes.template.events.on("hit", function(ev) {
//   var targetNode = ev.target;
//   if (targetNode.isActive) {
//     series.nodes.each(function(node) {
//       if (targetNode !== node && node.isActive && targetNode.dataItem.level == node.dataItem.level) {
//         node.isActive = false;
//       }
//     });
//   }
// });


series.nodes.template.tooltipText = "{name}";

// Add labels
// series.nodes.template.label.text = "{name}";
series.maxRadius = 30;
series.centerStrength = 1;
series.manyBodyStrength = -50;
series.links.template.strength = 2;

// Set link color
series.links.template.stroke = am4core.color("#FF0000"); // Defina a cor padrão dos links
series.links.template.strokeWidth = 10;

// Adicione tooltips para os links
// Set up tooltip
// series.tooltip.getFillFromObject = true;
// series.tooltip.label.propertyFields.fill = am4core.color("#00ff00");
// series.tooltip.background.propertyFields.stroke = am4core.color("#FF0000");
series.links.template.distance = 3;
series.links.template.interactionsEnabled = true; 
series.links.template.strokeOpacity = 1;


// Defina manualmente as cores dos links
series.links.template.adapter.add("stroke", function (stroke, target) {
  if (target.dataItem) {
    if(target.dataItem.name == 'Endereço' || target.dataItem.name == 'Número de Alertas: 16' || target.dataItem.name == 'Mídias Desabonadoras' || target.dataItem.name == 'Poupança' || target.dataItem.name == 'Empréstimo' || target.dataItem.name == 'Câmbio' || target.dataItem.name == 'Cartão de Crédito/Débito'){
        return corOutrasInfo;
    }

    else if(target.dataItem.name == 'Conta Corrente' || target.dataItem.name == 'João'|| target.dataItem.name == 'Matheus'){
        return corTransacAlert;
    }

    else if(target.dataItem.name == 'Beneficiário Z'){
        return corOpcSelec;
    }

    else{
        return corOutrasTransac;
    }

  }
  return stroke;
});

series.links.template.adapter.add("tooltipText", function (text, target) {  

  if (target.dataItem) {
    switch (target.dataItem.name) {
    case "Beneficiário 1":
        return `Enviou Pix de R$293,00 para ${target.dataItem.name}`;

    case "Beneficiário 2":
        return `Enviou DOC de R$2.293,90 para ${target.dataItem.name}`;

    case "Beneficiário 3":
        return `Enviou TED de R$1.923,12 para ${target.dataItem.name}`;

    case "Beneficiário 4":
        return `Recebeu TED de R$1.293,31 de ${target.dataItem.name}`;

    case "Beneficiário 5":
        return `Recebeu Pix de R$2.923,20 de ${target.dataItem.name}`;

    case "Beneficiário 6":
        return `Recebeu Pix de R$5.122,02 de ${target.dataItem.name}`;

    case "Beneficiário 7":
        return `Recebeu DOC de R$631,20 de ${target.dataItem.name}`;

    case "Beneficiário 8":
        return `Recebeu Pix de R$2.273,00 de ${target.dataItem.name}`;

    case "Beneficiário 9":
        return `Enviou Pix de R$913,00 para ${target.dataItem.name}`;

    case "Beneficiário A":
        return `Enviou DOC de R$1.257,90 para ${target.dataItem.name}`;
        
    case "Beneficiário B":
        return `Enviou DOC de R$9.549,00 para ${target.dataItem.name}`;

    case "Beneficiário C":
        return `Recebeu Pix de R$9.233,30 de ${target.dataItem.name}`;

    case "Beneficiário D":
        return `Enviou TED de R$1.103,24 para ${target.dataItem.name}`;

    case "Beneficiário E":
        return `Recebeu Pix de R$1.253,90 de ${target.dataItem.name}`;

    case "João":
        return `Enviou TED de R$30.000,00 para ${target.dataItem.name}`;

    case "Matheus":
        return `Enviou PIX de R$25.400,00 para ${target.dataItem.name}`;

    case "Beneficiário Z":
        return `Enviou PIX de R$9.233,79 para ${target.dataItem.name}`;

    default:
        return "Possui";
    }
  }
  return text;
}); 

series.nodes.template.events.on("hit", function (event) {
  var node = event.target;
  
    // Verifique se o nó possui dados associados
  series.links.each(function(link) {
    if ((link.target === node && node.dataItem.name === "Conta Corrente") || (link.target === node && node.dataItem.name === "João") || (link.target === node && node.dataItem.name === "Matheus")) {
      link.distance = 10;
      link.stroke = corOpcSelec;
    }
  });
});

//Zoom
chart.zoomable = true;
series.nodes.template.events.on("hit", function(event) {
  if (event.target.isActive) {
    chart.zoomToDataItem(event.target.dataItem, 1.5, true)
  }
  else {
    chart.zoomOut();
  }
});


// Configure icons
var icon = series.nodes.template.createChild(am4core.Image);
icon.propertyFields.href = "image";
icon.horizontalCenter = "middle";
icon.verticalCenter = "middle";
icon.width = 40;
icon.height = 40;