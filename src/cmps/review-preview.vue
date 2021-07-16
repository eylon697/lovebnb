
<template>
	<section class="review-preview">
		<section class="user">
			<img src="@/assets/img/user/1.png" />
			<div>
				<h2>{{ review.by.fullname }}</h2>
			</div>
			<i class="el-icon-star-on"></i>
			<p>
				{{ review.rate }}
			</p>
		</section>
		<p>{{ review.txt }}</p>
	</section>
</template>

<script>
export default {
	props: {
		review: Object,
	},
}
</script>
