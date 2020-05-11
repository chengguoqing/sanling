<template>
	<view>
		<view class="row cen pt20 pm20">
			<view class="col" v-for="(sd,idx) in jkdskft" @tap="dsfsdfdsg(idx)">
				<view class="dfsgdtydrrt fz26 z6" :class="iddf==idx?'bgls':''">
					{{sd}}
				</view>
			</view>
		</view>
		<uni-list>
			<uni-list-item title="1、*************" v-for="sd in 10"></uni-list-item>
		</uni-list>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				iddf:0,
				jkdskft:['总量','矛盾纠纷','安全隐患','治安问题',]
			}
		},
		components: {},
		methods: {
			dsfsdfdsg(idx){
				this.iddf = idx
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.dfsgdtydrrt{
		border-radius: 60upx;
		width: 150upx;
		line-height: 50upx;
		display: inline-block;
		background: #e0e0e0;
	}
</style>
