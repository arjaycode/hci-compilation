'use strict';

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('You Have Successfully Signed Up', 'success')
  })
}

const sampleData = {
    labels: ["January", "February", "March", "April", "May", "June"],
  
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80, 81, 56, 55],
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

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));