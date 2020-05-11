<template>
	<view :class="isddrr?'dfsrtt':''">
		<van-tabs class="mt10" :active="dsfdsa" sticky>
			<van-tab title="备选督办件">
				<view class="row">
					<view class="col">
						<shwodown :xz="fdyucxdrea"></shwodown>
					</view>
					<view class="col">
						<shwodown :xz="fdyucxdreb"></shwodown>
					</view>
				</view>
				<view class="dfsdrttz">
					<list btntext="督办"></list>

				</view>
			</van-tab>
			<van-tab title="挂牌督办件">
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
	import list from "./components/list.vue"
	import shwodown from "@/components/shwodown.vue"
	export default {
		data() {
			return {
				dsfdsa: 0,
				value1: 0,
				value2: 0,
				isddrr: false,
				fdyucxdrea: ['全部', '村、社区', '单位', '企业'],
				fdyucxdreb: ['全部', '信访', '案件', '事故']
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
