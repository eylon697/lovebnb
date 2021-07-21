<template>
	<section class="profile">
		<h2>profile page</h2>
		<!-- <div class="header">
			<nav>
				<ul>
					<li @click="openProfile" :class="{ acitve: profileOpen }">Go to profile</li>
					<li @click="openDashboard" :class="{ acitve: dashboardOpen }">
						Dashboard
					</li>
					<li @click="openInbox" :class="{ acitve: inboxOpen }">inbox</li>
				</ul>
			</nav>
		</div>
		<profile-dashboard v-if="dashboardOpen" />
		<profile-inbox v-if="inboxOpen" />
		<section class="profile" v-if="loggedInUser && profileOpen">
			<section class="profile-card">
				<div>
					<section class="img-upload-container">
						<img
							v-if="isLoading"
							class="loading"
							src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif"
							alt=""
						/>
						<label v-else>
							<img :src="loggedInUser.imgUrl" alt="" />
							<input @change="onUploadImg" type="file" id="imgUpload" hidden />
							<p>update photo</p>
						</label>
					</section>
				</div>
				<div>
					<button class="add-stay" @click="openModal">Add New Stay</button>
				</div>
			</section>
			<stay-add v-if="isModalOpen" @close="closeModal" :stay="stay" />
			<section class="data" v-else>
				<section class="statistics">
					<p>
						Assets you own: <span>{{ staysLength }}</span>
					</p>
					<p>
						Sent orders: <span>{{ sentOrdersLength }}</span>
					</p>
					<p>
						Recieved orders: <span>{{ recievedOrdersLength }}</span>
					</p>
				</section>
				<section class="orders-table">
					<h2>Orders sent:</h2>
					<profile-filter :isStaysFilter="false" @filter="setFilter" />
					<profile-table v-if="sentOrders.length" :orders="sentOrders" />
				</section>
				<section class="orders-table">
					<h2>Orders recieved:</h2>
					<profile-filter :isStaysFilter="false" @filter="setFilter" />
					<profile-table
						v-if="recievedOrders.length"
						:orders="recievedOrders"
						:showActions="true"
					/>
				</section>
				<section class="stays-table">
					<h2>Stays:</h2>
					<profile-filter :isStaysFilter="true" @filter="setStaysFilter" />
					<profile-stay-table :stays="computedStays" @edit-stay="editStay" />
				</section>
			</section>
			<button @click="emitToBackend">emit to backend</button>
		</section> -->
	</section>
</template>
<script>


export default{

}
</script>
