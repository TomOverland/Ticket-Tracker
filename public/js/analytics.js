var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Total','Resolved', 'Unresolved'],
        datasets: [{
            label: 'Requests by Department',
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',],
            data: [77, 41, 36]
        }]
    },
    
    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        responsive: false,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                
                }
            }]
        }
    }
    });





var donut = document.getElementById('chart2').getContext('2d');
// And for a doughnut chart
var myDoughnutChart = new Chart(donut, {
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ['Accounting','Customer Service', 'Human Resources', 'Marketing', 'Operations', 'R&D', 'Sales', 'Security', 'Technology'],
        datasets: [{
          label: 'Total Requests by department',
          data: [12, 19, 3, 5, 6, 7, 14, 9, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(128,0,0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(128, 0, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 128, 128, 1)',
            'rgba(241, 90, 34, 1)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, .5)',
            'rgba(255, 206, 86, .5)',
            'rgba(128,0,0, .5)',
            'rgba(0, 255, 0, .5)',
            'rgba(128, 0, 128, .5)',
            'rgba(0, 255, 255, .5)',
            'rgba(0, 128, 128, .5)',
            'rgba(241, 90, 34, .5)',
          ],
          borderWidth: 1
        }]
      },
      //additional options
      options: {
        cutoutPercentage: 40,
        responsive: false,
    
      }
    });