<template>
	<section class="profile">
	

	<div class="inbox-container">
		<div class="title" >All messages</div>

	</div>
		
	</section>
</template>
<script>


export default{
    data(){
        return{
             orders: [
            {
                _id: '',
                dates: [],
                guests: 0,
                created: '0123456789123',
                status: 'pending',
                stay: {
                    _id: '',
                    name: '',
                    imgUrl: ''
                },
                guest: {
                    _id: '',
                    name: '',
                    imgUrl: ''
                },
            },
            {
                _id: '',
                dates: [],
                guests: 0,
                created: '0123456789123',
                status: 'pending',
                stay: {
                    _id: '',
                    name: '',
                    imgUrl: ''
                },
                guest: {
                    _id: '',
                    name: '',
                    imgUrl: ''
                },
            }
        ]

        }
    }

}

</script>  