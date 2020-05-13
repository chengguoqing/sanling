
<template>
	<view>
		<van-tabs class="mt10" sticky>
			<van-tab title="简要情况">
				<securityProblemsjY></securityProblemsjY>
			</van-tab>
			<van-tab title="应急处置">
				<yjcz></yjcz>
			</van-tab>
			<van-tab title="跟踪督查">
				2
			</van-tab>
		</van-tabs>
	</view>
</template>
<script>
	import securityProblemsjY from "./components/securityProblemsjY.vue"
	import yjcz from "./components/yjcz.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			securityProblemsjY,
			yjcz
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
