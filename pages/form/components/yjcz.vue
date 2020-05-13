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
				<text class="red">*</text> 处置指令：
			</view>
		<picker   class="mt10 dsfdstytx" :range="femjsd" @change="dsfdstty">
			<text v-if="zhiling">{{zhiling}}</text>
			<text v-else class="z9">请选择处置指令</text>
			<uni-icons type="down" class="righticon ab" size="16" color="#999"></uni-icons>
		</picker>
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 处置要求：
			</view>
			<view class="mt10">
				<input type="text" placeholder="请输入处置要求" value="" class="dsfdstytx" />
			</view>
			
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 限办时间：
			</view>
			<view class="mt10">
				<picker mode="date" class="dsfdstytx" @change="dsfsdf">
					<view class="uni-input">
						{{date}} <text class="z9" v-if="!date">请输入发生日期</text>
					</view>
					<uni-icons type="rili" class="righticon " size="20" color="#999"></uni-icons>
				</picker>
			</view>
			
			
			<view class="fz30 z3 mt30">
					<text class="red">*</text> 接收单位：
				</view>
			<picker   class="mt10 dsfdstytx" :range="danwei" @change="dsfdsttyb">
				<text v-if="danweids">{{danweids}}</text>
				<text v-else class="z9">请选择接收单位</text>
				<uni-icons type="down" class="righticon ab" size="16" color="#999"></uni-icons>
			</picker>
			
			
		
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 备注：
			</view>
			<view class="mt10">
				<textarea value=""  class="w100 br yj4 pt20 pl20 fz30" placeholder="请输入备注" />
			</view>
			
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 处置结果
			</view>
			<view class="mt10">
				<textarea value=""  class="w100 br yj4 pt20 pl20 fz30" placeholder="请输入处置结果" />
			</view>
			<view class="fz30 z3 mt30">
				<text class="red">*</text> 处置时间：
			</view>
			<view class="mt10">
				<picker mode="date" class="dsfdstytx" @change="dsfsdfb">
					<view class="uni-input">
						{{dateb}} <text class="z9" v-if="!dateb">请输入处置时间</text>
					</view>
					<uni-icons type="rili" class="righticon " size="20" color="#999"></uni-icons>
				</picker>
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
				upsdd:[],
				femjsd:[1,2,3],
				danwei:[1,2,3,4,5,6],
				zhiling:'',
				danweids:'',
				date:'',
				dateb:''
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
			},
			
			dsfdstty(e){
				this.zhiling = this.femjsd[e.detail.value]
			},
			dsfdsttyb(e){
				this.danweids = this.danwei[e.detail.value]
			},
			dsfsdf(e) {
				this.date = e.target.value
			},dsfsdfb(e) {
				this.dateb = e.target.value
			},
			
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	
</style>
