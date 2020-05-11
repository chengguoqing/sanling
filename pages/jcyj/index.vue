<template>
	<view>
		<van-tabs class="mt10" :active="dsfdsa" sticky>
			<van-tab title="重大" name="重大">
				<page></page>
			</van-tab>
			<van-tab title="大" name="大">
				<page></page>
			</van-tab>
			<van-tab title="较大" name="较大">
				<page></page>
			</van-tab>
			<van-tab title="一般" name="一般">
				<page></page>
			</van-tab>
		</van-tabs>
	</view>
</template>
<script>
	import page from "./components/page.vue"
	export default {
		data() {
			return {
				dsfdsa:'重大'
			}
		},
		components: {
			page
		},
		onShow(e) {
			this.kjhjsd = true
			let hj = this.$store.state.cansu
			if (hj){
				this.dsfdsa = hj.ss
			}
		},
		methods: {},
		mounted() {}
	}
</script>
<style scoped>

</style>
