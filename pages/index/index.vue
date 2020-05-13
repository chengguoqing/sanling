<template>
	<view class="pm40">
		<view class="dsfstxer">
			<uni-nav-bar :fixed="false" color="#417CAC" background-color="#FFFFFF" left-icon="user" @clickLeft="hf('/pages/user/index')">
				<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
					<input confirm-type="search" class="nav-bar-input w100" type="text" placeholder="输入搜索关键词" @confirm="confirm">
				</view>
				<view class="kkjjddeerr">
				</view>
			</uni-nav-bar>
		</view>
		<view class="sdfsdtyttzer">
			<image src="../../static/img/banners.jpg" class="w100 cz"></image>
		</view>
		<view class="btm bgff mb20" v-for="(sd,idx) in listdata">
			<view class="pr" @tap="tabtz(sd.urls)">
				<uni-section :title="sd.title" type="line"></uni-section>
				<image src="../../static/img/right.png" class="rightxert" mode="widthFix"></image>
			</view>
			<view class=" pt20 jhgbnxdr pm20 cen">
				<view class="kkjjxeer" v-for="(sf,kl) in sd.subordinate"  @tap="tabtz(sd.urls,sf.ss,sf.xb,sf.text)">
					<view class="jhghxedrt" :style="{'background-color': sf.color}">
						<uni-icons type="user" color="#fff" :size="sf.size"></uni-icons>
						<text class="djkjhhxerr" v-if="sf.number>0">{{sf.number}}</text>
					</view>
					<view class="fz24 z3 mt10">
						{{sf.text}}
					</view>
				</view>
			</view>
		</view>

		<view class="sxdsfdsf bgff yj">
			<uni-icons type="add" color="#417CAC" size="42" @tap="showcaidan"></uni-icons>
		</view>


	</view>
</template>
<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniFab from '@/components/uni-fab/uni-fab.vue'
	export default {
		data() {
			return {
				pattern: {
					color: '#417CAC',
					backgroundColor: '#fff',
					selectedColor: '#417CAC',
					buttonColor: '#417CAC',
				},

				vertical: 'bottom',
				direction: 'vertical',
				content: [{
					text: '信访上报',
					active: false
				}, {
					text: '事故上报',
					active: false
				}, {
					text: '案件上报',
					active: false
				}, {
					text: '矛盾纠纷',
					active: false
				}, {
					text: '治安问题 ',
					active: false
				}, {
					text: '安全隐患',
					active: false
				}, ],
				listdata: [{
					title: '台账信息',
					urls:'/pages/dzxx/index',
					subordinate: [{
						ss:'三零台账',
						xb:0,
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '三零村',
						number: 10, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						ss:'三零台账',
						xb:1,
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '三零单位',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						ss:'三零台账',
						xb:2,
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '三零企业',
						number: 6, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '隐患',
						number: 6, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						ss:'非三零台账',
						xb:0,
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '非三零村',
						number: 6, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						ss:'非三零台账',
						xb:1,
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '非三零单位',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						ss:'非三零台账',
						xb:2,
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '非三零企业',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}]
				}, {
					title: '监测预警',
					urls:'/pages/jcyj/index',
					subordinate: [{
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '重大',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '大',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '较大',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '一般',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}]
				}, {
					title: '应急处置',
					urls:'/pages/yjcl/index',
					subordinate: [{
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '待响应',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '待处置',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '已处置',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}]
				}, {
					title: '跟踪督办',
					urls:'/pages/gzdb/index',
					subordinate: [{
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '备选督办',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '红牌督办',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '黄牌督办',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '橙牌督办',
						color: '#417CAC' // 图标的颜色
					}, {
						icon: 'user', // 图标
						size: '26', // 图标大小
						text: '已汇报',
						number: 0, // 有上角的角标
						color: '#417CAC' // 图标的颜色
					}]
				}]
			}
		},
		components: {
			uniNavBar,
			uniSection,
			uniFab
		},
		onShareAppMessage(res) {
			return {
				title: '三零',
				path: '/pages/index/index'
			}
		},
		methods: {
			showcaidan() {
				uni.showActionSheet({
					itemList: ['信访上报', '事故上报', '案件上报', '矛盾纠纷', '治安问题', '安全隐患'],
					success: function(res) {
						let urls = ''
						if (res.tapIndex ==0) {
							urls= "/pages/form/complaintReporting"
						}else if (res.tapIndex ==1) {
							urls= "/pages/form/accidentReport"
						}else if (res.tapIndex ==2) {
							urls= "/pages/form/caseReport"
						}else if (res.tapIndex ==3) {
							urls= "/pages/form/dispute"
						}else if (res.tapIndex ==4) {
							urls= "/pages/form/securityProblems"
						}else if (res.tapIndex ==5) {
							urls= "/pages/form/safetyloophole"
						}
						
						uni.navigateTo({
							url:urls
						})

					}
				});
			},
			tabtz(urls,ss,xb,text){
				let jhhsd ={}
				if (ss) {
					jhhsd.ss = ss
				} else {
					jhhsd.ss = text
				}
				if(xb){
					jhhsd.xb = xb
				}
				this.$store.commit("setcansu",jhhsd)
				uni.switchTab({
					url:urls
				})
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.sdfsdtyttzer {
		height: 220upx;
	}

	.sdfsdtyttzer image {
		height: 100%;
	}

	.jhgbnxdr {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 30upx;
	}

	.jhghxedrt {
		display: inline-block;
		width: 90upx;
		height: 90upx;
		line-height: 90upx;
		border-radius: 50%;
		position: relative;
	}

	.djkjhhxerr {
		border-radius: 50%;
		background: #F67429;
		color: #fff;
		width: 36upx;
		height: 36upx;
		text-align: center;
		line-height: 36upx;
		position: absolute;
		right: -10upx;
		top: -10upx;
		font-size: 24upx;
	}

	.rightxert {
		width: 36upx;
		position: absolute;
		right: 20upx;
		top: 23upx;
	}

	.sxdsfdsf {
		position: fixed;
		right: 20upx;
		bottom: 60upx;
		z-index: 10;
	}
</style>
