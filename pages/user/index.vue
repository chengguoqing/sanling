<template>
	<view>
		<view class="kjjdsdff pd pt40 pm40 cen">
			<view class="" v-if="uinfo">
				<image :src="uinfo.avatarUrl" class="yj useertty"></image>
				<view class="fz32 cf mt20">
					{{uinfo.nickName}}
				</view>
			</view>
			<view class="pr" v-else>
				<image src="../../static/img/user.png" class="yj useertty"></image>
				<view class="fz32 cf mt20">
					点击登录
				</view>
				
				<button open-type="getUserInfo" @getuserinfo="dfsgdtyy" class="dsfttsewer"></button>
			</view>
		</view>
		<uni-list class="mt20">
			<uni-list-item title="修改密码" @tap="hf('/pages/user/changePassword')"></uni-list-item>
		</uni-list>
	</view>
</template>
<script>
	export default { 
		data() {
			return {
				isjhbdd: false
			}
		},
		components: {

		},
		computed:{
			uinfo(){
				return this.$store.state.userinfo
			}
		},
		methods: {
			dfsgdtyy(e){
				uni.setStorageSync("userinfo",e.detail.userInfo)
				this.$store.commit('setuserinfo', e.detail.userInfo)
			}
		},
		mounted() {
		
		}
	}
</script>
<style scoped>
	.kjjdsdff {
		background: #417CAC;
	}

	.useertty {
		width: 160upx;
		height: 160upx;
	}
	.dsfttsewer{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
