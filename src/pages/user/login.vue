<template>
	<div id="login">
		
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		data(){
			return{
				username:'',
				password:''
			}
		},
        watch:{

        },
		methods:{
			login(){
				let res = {
					user_name : this.username,
					passwd : this.password
				}
				axios.post(baseUrl+'/adconsole/login.json',res,{
					headers: {'Content-Type': "application/x-www-form-urlencoded"} 
				})
				.then((res)=>{
					console.log(res)
					res = res.data
					if(res.ret === 0){
						localStorage.setItem('login',true)
						this.$router.push({path:'/details'});
						this.$store.commit('login',true)
					}else{
						alert(res.msg)
					}
				},(err)=>{
					console.log(err)
				})
				
			}
		},
		created(){

		}
	}
</script>
<style lang="scss">

</style>