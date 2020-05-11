<template>
	<view class="bbm cen pt20 pm20 bgff" @tap="showcaidan">
		{{jjsdd}} <uni-icons type="down" size="14"></uni-icons>
	</view>
</template>
<script>
	export default {
		props:['xz','xb'],
		data() {
			return {
				jjsdd:'全部'
			}
		},
		components: {

		},
		methods: {
			showcaidan() {
				let th=this
				uni.showActionSheet({
					itemList: this.xz,
					success: function(res) {
						th.jjsdd = th.xz[res.tapIndex]
					}
				});
			}
		},
		mounted() {
			this.jjsdd = this.xz[this.xb]
		}
	}
</script>
<style scoped>

</style>
