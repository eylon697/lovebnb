<template>
	<form action="" class="review-add" @click.stop="stopProp">
		<h2>Add a review</h2>
		<textarea
			name="review"
			cols="38"
			rows="10"
			v-model="review.txt"
			placeholder="How was your stay?"
		>
		</textarea>
		<div class="block">
			<span class="rate-stay">Rate your stay</span>
			<el-rate v-model="review.rate"></el-rate>
		</div>
		<el-button type="danger" @click="addReview">Add Review</el-button>
		<el-button @click="toggleReview">Cancel</el-button>
	</form>
</template>

<script>
// import { showMsg } from '@/services/event-bus.service.js'
export default {
	data() {
		return {
			review: {
				txt: '',
				rate: null,
			},
		}
	},
	methods: {
		addReview(ev) {
			ev.preventDefault()
			this.review.by = {
				imgUrl: this.loggedInUser.imgUrl,
				fullname: this.loggedInUser.fullname,
			}
			this.review.at = Date.now()
			this.$emit('add-review', this.review)
		},
		toggleReview(ev) {
			ev.preventDefault()
			this.$emit('toggle-review')
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