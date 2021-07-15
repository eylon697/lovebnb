  
<template>
	<section class="review-list">
		<review-preview v-for="review in reviews" :key="review.id" :review="review" />
	</section>
</template>

<script>
import reviewPreview from './review-preview'
export default {
	components: { reviewPreview },
	props: { reviews: Array },
}
</script>