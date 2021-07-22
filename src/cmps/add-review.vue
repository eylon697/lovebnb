<template>
	<form action="" class="review-add" @click.stop="stopProp">
		<h2>Add a review</h2>
		<textarea
			name="review"
			cols="50"
			rows="5"
			v-model="review.txt"
			placeholder="How was your experience at the stay?"
		>
		</textarea>
		<div class="rate">
			<span class="rate-stay">Rate your stay</span>
			<el-rate v-model="review.rate"></el-rate>
		</div>
		<el-button type="danger" @click="addReview">Add Review</el-button>
		<el-button @click="changeReview">Cancel</el-button>
	</form>
</template>

<script>
// import { showMsg } from '@/services/event-bus.service.js'
import { stayService } from '@/services/stay.service.js'
export default {
	data() {
		return {
			review: stayService.getEmptyReview(),
		}
	},
	methods: {
		addReview() {
      this.$emit('addReview', this.review)
      this.review = stayService.getEmptyReview()
    },
		changeReview(ev) {
			ev.preventDefault()
			this.$emit('openAddReview')
		},
		stopProp() {},
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
	},
}
</script>