<style>
	
</style>
<template>
	<div>
		<Button type="primary" @click='get'>Primary</Button>
		<AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px"></AutoComplete>
	</div>
	

</template>

<script>
	export default{
		data () {
			return {
				value3: '',
				data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
			}
		},
		methods: {
			filterMethod (value, option) {
				return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
			},
			get(){
				this.$http.get('/data.json').then(function(response){
					alert('aa')
				}, function(response){
					alert('bb');
				});
			}

		}
	}
</script>