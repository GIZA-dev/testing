// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Экстраверсия', 'Согласие', 'Открытость', 'Сознательность', 'Нейротизм'],
        datasets: [{
            
            data: [0.5, 0.1, 0.5, 0.6, 0.8],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Базовые личностные характеристики',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    }
});











// radar chart1
var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["Душа", "Аналитик", "Исполнитель", "Исследователь", "Генератор", "Модератор", "Координатор", "Завершитель"],
  datasets: [{
    label: "Студент",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [0,0.3,0.4,0.6,0.2,0.3,0.2,0.5]
  
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  options: {
      legend: false,
      title: {
        display: true,
        text: 'Роль',
        position: 'top',
        fontSize: 16,
        padding: 20
    }
  }
});














// radar chart2
var marksCanvas1 = document.getElementById("marksChart1");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var marksData1 = {
  labels: ["Душа", "Аналитик", "Исполнитель", "Исследователь", "Генератор", "Модератор", "Координатор", "Завершитель"],
  datasets: [{    
    backgroundColor: "transparent",
    borderColor: "rgba(200,0,0,0.2)",
    fill: false,
    radius: 6,
    pointRadius: 2,
    pointBorderWidth: 5,
    pointBackgroundColor: "orange",
    pointBorderColor: "rgba(200,0,0,0.6)",
    pointHoverRadius: 4,
    data: [0,0.3,0.4,0.6,0.2,0.3,0.2,0.5]  
  }]
};



var radarChart1 = new Chart(marksCanvas1, {
  type: 'radar',
  data: marksData1,
  options: {
    scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 1,
          stepSize: 0.2
        },
        pointLabels: {
          fontSize: 14
        }
      },
      legend: {
        position: 'centre'
      },
      title: {
        display: true,
        text: 'Роль',
        position: 'top',
        fontSize: 16,
        padding: 20
    }
  }
});







// radar chart3

var marksCanvas2 = document.getElementById("marksChart2");

var marksData2 = {
  labels: ["Планомерность", "Противоборство", "Соц. Поддержка"],
  datasets: [{
    label: "Студент",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [1,0.29,0.33]
  
  }]
};

var radarChart2 = new Chart(marksCanvas2, {
  type: 'radar',
  data: marksData2,
  options: {
    scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 1,
          stepSize: 0.2
        },
        pointLabels: {
          fontSize: 18
        }
      },
      legend: false,
      title: {
        display: true,
        text: 'Роль',
        position: 'top',
        fontSize: 16,
        padding: 20
    }
  }
});




// polar chart

var birdsCanvas = document.getElementById("birdsChart");

var birdsData = {
  labels: ["Душа", "Аналитик", "Исполнитель", "Исследователь", "Генератор", "Модератор", "Координатор", "Завершитель"],
  datasets: [{
    data: [0.2, 0.3,0.4,0.6,0.2,0.3,0.2,0.5],
    backgroundColor: 
      "rgba(255, 0, 0, 0.5)"    
  }]
};

var polarAreaChart = new Chart(birdsCanvas, {
  type: 'polarArea',
  data: birdsData,
  options: {legend:{display: false},
  title: {
    display: true,
    text: 'Роль',
    position: 'top',
    fontSize: 16,
    padding: 20
}}
});





// pie chart
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Общие лидерские способности", "Тразакционное лидерство", "Трансформационное лидерство"],
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [10,20,40]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Лидерство',
        position: 'top',
        fontSize: 16,
        padding: 20
      }
    }
});