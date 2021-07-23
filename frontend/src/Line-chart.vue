  
<script>
import { Line } from 'vue-chartjs'
import { utilService } from '@/services/util-service.js'
export default {
	extends: Line,
	props: { orders: Array, stays: Array },
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
				datasets: this.stays
					.map((stay, idx) => {
						if (stay.host._id === this.$store.getters.loggedinUser._id) {
							return {
								label: stay.name,
								data: this.orders
									.map(order => (order.stay._id === stay._id ? order?.total : undefined))
									.filter(t => t),
								fill: false,
								borderColor: utilService.getPredefinedColor(idx),
								tension: 0.1,
							}
						}
					})
					.filter(s => s),
			},
		}
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
	mounted() {
		this.renderChart(this.chartdata, this.options)
	},
}
</script>