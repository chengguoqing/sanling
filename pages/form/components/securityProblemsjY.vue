<!-- 矛盾纠纷 简要纠纷-->
<template>
	<view class="pd pt40 bgff">
		<view class="fz30 pm40">
			 <radio-group @change="radioChange" >
			<label class="radio">
				<radio value="1" color="#417CAC"/><text>重大预警</text>
			</label>
			<label class="radio ml20">
				<radio value="2" color="#417CAC"/><text>黄牌督办</text>
			</label>
			</radio-group>
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 标题：
			</view>
			<view class="mt10">
				<input type="text" placeholder="请输入标题" value="" class="dsfdstytx" />
			</view>
			
			
			
		
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 问题发生地：
			</view>
			<view class="mt10 dsfdstytx" @tap="ioksd">
				<text v-if="dizhi">{{dizhi}}</text>
				<text v-else class="z9">请选择问题发生地</text>
				<uni-icons type="down" class="righticon ab" size="16" color="#999"></uni-icons>
			</view>
			
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 详细地址：
			</view>
			<view class="mt10">
				<input type="text" placeholder="请输详细地址" value="" class="dsfdstytx" />
			</view>
			
			
		
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 问题表现：
			</view>
			<view class="mt10">
				<textarea value=""  class="w100 br yj4 pt20 pl20 fz30" placeholder="请输入问题表现" />
			</view>
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 已采取整治措施：
			</view>
			<view class="mt10">
				<textarea value=""  class="w100 br yj4 pt20 pl20 fz30" placeholder="请输入已采取整治措施" />
			</view>
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text>目前状况：
			</view>
			<view class="mt10">
				<textarea value=""  class="w100 br yj4 pt20 pl20 fz30" placeholder="请输入目前状况" />
			</view>
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 附件：
			</view>
			<view class="mt20">
				<view class="jdsfdstyxzr yj4 cz" v-for="(sd,idx) in upsdd" v-if="upsdd.length>0">
					<image :src="sd" class="yj4  w100 h100 " ></image>
					<icon type="clear" color="red" size="18" class="dsfdstyxer" @tap="cladert(idx)"></icon>
				</view>
				<view class="jdsfdstyxzr yj4 cz" @tap="upssd">
					<image src="https://testcheng.oss-cn-shanghai.aliyuncs.com/xhwy/upicon.png" class="yj4 cz" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="mt40">
				<button type="default" class="fz32 bgls">提交</button>
			</view>
		</view>
		
		<simpleaddress ref="dfdtyty" @onConfirm="onConfirm"></simpleaddress>
	</view>
</template>
<script>
	import simpleaddress from "@/components/simple-address/simple-address.vue"
	export default {
		data() {
			return {
				dizhi:'',
				upsdd:[]
			}
		},
		components: {
			simpleaddress
		},
		methods: {
			radioChange(e){
				
			},
			ioksd() {
				this.$refs.dfdtyty.open()
			},
			onConfirm(e) {
				this.dizhi = e.label
			},
			upssd(){
				uni.chooseImage({
					success: (e) => {
						this.upsdd.push(e.tempFilePaths[0])
					}
				})
			},
			cladert(idx){
				uni.showModal({
					title:"确定删除吗",
					success: (e) => {
						if (e.confirm){
							this.upsdd.splice(idx,1)
						}
					}
				})
			}
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
