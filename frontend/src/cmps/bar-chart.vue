<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,

  data() {
    return {
      chartdata: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Total revenue',
            data: [1,2,3],
            fill: false,
            backgroundColor: '#ff385c',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    // this.renderChart(this.chartdata, this.options)
  },
  created() {
    // console.log('this.data', this.chartdata.datasets[0].data)
    console.log('this.chratdata', this.chartdata)
    console.log(this.orders)
  },
}
</script>