<template>
	<view :class="isddrr?'dfsrtt':''">
		<van-tabs class="mt10" :active="dsfdsa" sticky>
			<van-tab title="待响应" name="待响应">
				<view class="row">
					<view class="col">
						<shwodown :xz="fdyucxdrea"></shwodown>
					</view>
					<view class="col">
						<shwodown :xz="fdyucxdreb"></shwodown>
					</view>
				</view>
				<view class="dfsdrttz">
					<list btntext="响应"></list>

				</view>
			</van-tab>
			<van-tab title="待处置" name="待处置">
				<view class="row">
					<view class="col">
						<shwodown :xz="fdyucxdrea"></shwodown>
					</view>
					<view class="col">
						<shwodown :xz="fdyucxdreb"></shwodown>
					</view>
				</view>
				<view class="dfsdrttz">
					<list btntext="处置"></list>

				</view>

			</van-tab>
			<van-tab title="已处置" name="已处置">
			<view class="row">
				<view class="col">
					<shwodown :xz="fdyucxdrea"></shwodown>
				</view>
				<view class="col">
					<shwodown :xz="fdyucxdreb"></shwodown>
				</view>
			</view>
				<view class="dfsdrttz">
					<list btntext="查看"></list>

				</view>

			</van-tab>
		</van-tabs>
	</view>
</template>
<script>
	import list from "../gzdb/components/list.vue"
	import shwodown from "@/components/shwodown.vue"
	export default {
		data() {
			return {
				dsfdsa: '待响应',
				value1: 0,
				value2: 0,
				isddrr: false,
				fdyucxdrea:['全部','重大','大','较大','一般'],
				fdyucxdreb:['全部','村、社区','单位','企业'],
			}
		},
		components: {
			list,
			shwodown
		},
		methods: {
			sdfstyz() {
				this.isddrr = true
			},
			dddrrtta() {
				this.isddrr = false
			}

		},
		onShow(e) {
			this.kjhjsd = true
			let hj = this.$store.state.cansu
			if (hj){
				this.dsfdsa = hj.ss
			}
		},
		mounted() {
			console.log(6666999)
		}
	}
</script>
<style scoped>
	.dfsdrttz {
		position: relative;
		z-index: 2;
	}
</style>
