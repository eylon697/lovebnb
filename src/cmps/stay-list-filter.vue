<template>
	<form class="filter" v-if="stays">
		<div class="type-filter">
			<el-dropdown :hide-on-click="false">
				<el-button
					>{{stays.propertyType}}Entire place<i class="el-icon-arrow-down el-icon--right"></i 
				></el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>
						<el-checkbox-group class="type-list"> 
                            <!-- TODO:V-model filter types -->
							<el-checkbox
								v-for="(type, idx) in stays.propertyType"
								:key="idx"
								:label="type"
								class="checkbox"
								>{{ type }}</el-checkbox
							>
						</el-checkbox-group>
						<div class="filter-buttons">
							<el-button type="sucsess" >Save</el-button>
                            <!-- TODO:@click setFilter -->
						</div>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>

        <el-dropdown :hide-on-click="false">
			<el-button>Price<i class="el-icon-arrow-down el-icon--right"></i></el-button>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item
					>filter
					<div>
						<el-slider style="color:black"  range :max="1500"> </el-slider>
                        <!-- TODO:V-MODEL FILTER PRICE -->
					</div>

					<div class="price">
						<el-input placeholder="Min price"  type="text"></el-input>
                        <!-- TODO:V-MODEL FILTER PRICE -->
						<el-input placeholder="Max price" type="text"></el-input>
                        <!-- TODO:V-MODEL FILTER PRICE -->
						<div class="filter-buttons">
							<el-button type="sucsess" >Save</el-button>
                            <!-- TODO:@click setFilter -->
						</div>
					</div>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<div class="type-filter">
			<el-dropdown :hide-on-click="false">
				<el-button
					>Rooms and Beds{{ stays.amenities }}<i class="el-icon-arrow-down el-icon--right"></i
				></el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>
						<el-checkbox-group class="type-list">
                             <!-- TODO:v-modelfilterBy -->
							<el-checkbox

								v-for="(amenity, idx) in stays.amenities"
								:key="idx"
								:label="amenity"
								class="checkbox"
								>{{ stays.amenity }}</el-checkbox
							>
						</el-checkbox-group>
						<div class="filter-buttons">
							<el-button type="sucsess" >Save</el-button>
                            <!-- TODO:@click setFilter -->
						</div>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<el-button>Clear</el-button>
        <!-- TODO:@click clearFilter -->
	</form>
</template>

<script>
export default {
	props: {
		stays: Array,
	},
    created(){
        // console.log(stays);
    },
	data(){
		return {

		}
	}
	


}
</script>

<style></style>