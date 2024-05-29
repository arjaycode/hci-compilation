const sampleData = {
  labels: ["January", "February", "March", "April", "May", "June"],

  datasets: [
    {
      label: "Monthly Contribution",
      data: [12, 57, 84, 23, 68, 31],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

let btnBar = document.getElementById("bar");
let btnLine = document.getElementById("line");
let btnPie = document.getElementById("pie");

btnBar.onclick = renderBarChart;
btnLine.onclick = renderLineChart;
btnPie.onclick = renderPieChart;

let ctx = document.getElementById("myChart").getContext("2d");
let myChart = null;

function renderBarChart() {
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "bar",
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function renderLineChart() {
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: "line",
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function renderPieChart() {
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: "pie",
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

renderBarChart();
