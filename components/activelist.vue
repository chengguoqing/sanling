<template>
	<view class="mt20 bgff dsfdsrtze">
		<view class="row">
			<view class="col dian fz32">
				《一次体验活动》
			</view>
			<view class="pr">
				<button class="sdfdsrtt" open-type="share"></button>
				<image class="ml10 cttxeert cz" src="../static/img/fenxiang.png" mode="widthFix" @tap="fx"></image>
			</view>
		</view>
		<view class="fz24 z6 dianer mt20">
			_六年级语文_语文_小学教育_教育专区
		</view>
		<view class="jkhhsdr mt20">
			<view class="" v-for="sd in 3">
				<image src="https://testcheng.oss-cn-shanghai.aliyuncs.com/banner.png" mode="aspectFill" class="sdfsdrtyd w100"></image>
			</view>
		</view>
		<view class="mt20 row">
			<view class="">
				<image src="../static/img/hzhsda.png" mode="widthFix" class="ikxeert cz"></image>
				<text class="fz32 z3 cz ml5">6</text>
			</view>
			<view class=" ml20">
				<image src="../static/img/hzhsdb.png" mode="widthFix" class="ikxeert cz"></image>
				<text class="fz32 z3 cz ml5">6</text>
			</view>
			<view class="col tr">
				<view class="sfdsdttx">
					进行中
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			fx() {
				
			}
		},
		
		mounted() {}
	}
</script>
<style scoped>
	.dsfdsrtze {
		border-radius: 8upx;
		padding: 20upx;
		position: relative;
		z-index: 1;
	}

	.cttxeert {
		width: 138upx;
	}

	.jkhhsdr {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 10upx;
		grid-row-gap: 10upx;
	}

	.sdfsdrtyd {
		height: 200upx;
		border-radius: 8upx;
	}

	.ikxeert {
		width: 48upx;
		height: 48upx;
	}

	
	.sdfdsrtt{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 100;
	}
</style>
