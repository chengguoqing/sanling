<template>
	<view class="pd bgff pt40 pm40">
		<view class="fz30 z3">
			<text class="red">*</text> 标题：
		</view>
		<view class="mt10">
			<input type="text" placeholder="请输入标题" value="" class="dsfdstytx" />
		</view>

		<view class="fz30 z3 mt30">
			<text class="red">*</text> 信访日期：
		</view>
		<view class="mt10">
			<picker mode="date" class="dsfdstytx" @change="dsfsdf">
				<view class="uni-input">
					{{date}} <text class="z9" v-if="!date">请输入信访日期</text>
				</view>
				<uni-icons type="rili" class="righticon" size="20" color="#999"></uni-icons>
			</picker>
		</view>


		<view class="fz30 z3 mt30">
			<text class="red">*</text>信访人：
		</view>
		<view class="mt10">
			<input type="text" placeholder="请输入信访人" value="" class="dsfdstytx" />
		</view>


		<view class="fz30 z3 mt30">
			<text class="red">*</text> 证件号码：
		</view>
		<view class="mt10">
			<input type="number" placeholder="请输入证件号码" value="" class="dsfdstytx" />
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
			<input type="number" placeholder="请输入详细地址" value="" class="dsfdstytx" />
		</view>
		
		
		<view class="fz30 z3 mt30">
			<text class="red">*</text> 村、社区/单位/企业：
		</view>
		<view class="mt10">
			<input type="number" placeholder="请输入村、社区/单位/企业" value="" class="dsfdstytx" />
		</view>
		
		<view class="fz30 z3 mt30">
			<text class="red">*</text> 分类：
		</view>
		<picker   class="mt10 dsfdstytx" :range="femjsd" @change="dsfdstty">
			<text v-if="fenlei">{{fenlei}}</text>
			<text v-else class="z9">请选择分类</text>
			<uni-icons type="down" class="righticon ab" size="16" color="#999"></uni-icons>
		</picker>
		
		
		<view class="fz30 z3 mt30">
			<text class="red">*</text> 简要概述：
		</view>
		<view class="mt10">
			<textarea value=""  class="w100 br yj4 pt20 pl20 fz30" placeholder="请输入简要概述" />
		</view>
		
		
		
		
		<view class="fz30 z3 mt30">
			<text class="red">*</text> 备注：
		</view>
		<view class="mt10">
			<input type="number" placeholder="请输入备注" value="" class="dsfdstytx" />
		</view>
		<view class="mt40">
			<button type="default" class="fz32 bgls">提交</button>
		</view>

		<simpleaddress ref="dfdtyty" @onConfirm="onConfirm"></simpleaddress>

	</view>
</template>
<script>
	import simpleaddress from "@/components/simple-address/simple-address.vue"
	export default {
		data() {
			return {
				date: '',
				dizhi: '',
				fenlei:'',
				femjsd:['村（社区）','学校（含幼儿园）','医院','景区','商（市）场','厂矿','车站','机场','营业网点','宗教场所','其他']
			}
		},
		components: {
			simpleaddress
		},
		methods: {
			dsfsdf(e) {
				console.log(e.target.value)
				this.date = e.target.value
			},
			ioksd() {
				this.$refs.dfdtyty.open()
			},
			onConfirm(e) {
				this.dizhi = e.label
			},
			dsfdstty(e){
				this.fenlei = this.femjsd[e.detail.value]
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>
