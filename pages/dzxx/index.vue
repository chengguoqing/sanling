<template>
	<view v-if="kjhjsd">
		<van-tabs class="mt10" :active="dsfdsa" sticky>
			<van-tab title="三零台账" name="三零台账">
			   <shwodown :xz="jjhder" :xb="xbsdf"></shwodown>
				<view class="dfsdrttz">
					<van-search placeholder="请输入搜索关键词" show-action action-text="更多">
					</van-search>
					<list></list>
				</view>
			</van-tab>
			<van-tab title="非三零台账" name="非三零台账">
				 <shwodown :xz="jjhder" :xb="xbsdf"></shwodown>
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
	import shwodown from "@/components/shwodown.vue"
	export default {
		data() {
			return {
				kjhjsd:false,
				dsfdsa: '三零台账',
				dsfdsb: 0,
				dsfdsc: 0,
				value1: 0,
				isddrr:false,
				injsd:0,
				kjjsd:'',
				xbsdf:0,
				jjhder:['全部', '单位', '企业']
			}
		},
		components: {
			list,
			lister,
			shwodown
		},
		methods: {
			sdfstyz() {
				this.isddrr = true
			},
			dddrrtta(){
				this.isddrr = false
			},
		},
		onLoad(e) {
			console.log(e)
		},
		onShow(e) {
			this.kjhjsd = true
			let hj = this.$store.state.cansu
			if (hj){
				this.dsfdsa = hj.ss
				this.xbsdf = hj.xb
			}
		},
		onHide(){
			this.kjhjsd = false
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
