<template>
	<view :class="isddrr?'dfsrtt':''">
		<van-tabs class="mt10" :active="dsfdsa" sticky>
			<van-tab title="三零台账">
				<view class="bbm">
					<van-dropdown-menu>
						<van-dropdown-item v-model="value1" :options="option1" @close="sdfstyz" @open="dddrrtta"/>
					</van-dropdown-menu>
				</view>
				<view class="dfsdrttz">
					<van-search placeholder="请输入搜索关键词" show-action action-text="更多">
					</van-search>
					<list></list>
				</view>
			</van-tab>
			<van-tab title="非三零台账">
				<view class="bbm">
					<van-dropdown-menu>
						<van-dropdown-item v-model="value1" :options="option1" @close="sdfstyz" @open="dddrrtta"/>
					</van-dropdown-menu>
				</view>
				<van-search placeholder="请输入搜索关键词" show-action action-text="更多">
				</van-search>
				<lister></lister>
			</van-tab>
		</van-tabs>
	</view>
</template>
<script>
	import list from "./components/list.vue"
	import lister from "./components/lister.vue"
	export default {
		data() {
			return {
				dsfdsa: 0,
				dsfdsb: 0,
				dsfdsc: 0,
				value1: 0,
				isddrr:false,
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
			}
		},
		components: {
			list,
			lister
		},
		methods: {
			sdfstyz() {
				this.isddrr = true
			},
			dddrrtta(){
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
