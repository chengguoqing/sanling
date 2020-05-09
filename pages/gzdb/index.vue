<template>
	<view :class="isddrr?'dfsrtt':''">
		<van-tabs class="mt10" :active="dsfdsa" sticky>
			<van-tab title="备选督办件">
				<view class="bbm ">
						<van-dropdown-menu>
							<van-dropdown-item v-model="value1" :options="option1" @close="sdfstyz" @open="dddrrtta" />
							<van-dropdown-item v-model="value2" :options="option2" @close="sdfstyz" @open="dddrrtta" />
						</van-dropdown-menu>
				</view>
				<view class="dfsdrttz">
				<list btntext="督办"></list>

				</view>
			</van-tab>
			<van-tab title="挂牌督办件">
				<view class="bbm">
					<van-dropdown-menu>
						<van-dropdown-item v-model="value1" :options="option1" @close="sdfstyz" @open="dddrrtta" />
						<van-dropdown-item v-model="value2" :options="option2" @close="sdfstyz" @open="dddrrtta" />
					</van-dropdown-menu>
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
	export default {
		data() {
			return {
				dsfdsa: 0,
				value1: 0,
				value2: 0,
				isddrr: false,
				option1: [{
						text: '全部',
						value: 0
					},
					{
						text: '村、社区',
						value: 1
					},
					{
						text: '单位',
						value: 2
					},
					{
						text: '企业',
						value: 3
					},
				],
				option2: [{
						text: '全部',
						value: 0
					},
					{
						text: '信访',
						value: 1
					},
					{
						text: '案件',
						value: 2
					},
					{
						text: '事故',
						value: 3
					},
				],
			}
		},
		components: {
list
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
