<template>
    <view> 
     <view class="mt10" v-for="sd in 10">
     	<van-panel title="*****村、社区、单位、企业" @tap="dsfsdty">
     	  <view class="row fz30 z6 pt30 pm30 pd">
			  <view class="col">
			  	矛盾纠纷       100
			  </view>
			  <view class="col cen">
			  	治安问题       50
			  </view>
			  <view class="col tr">
			  安全隐患       89
			  </view>
		  </view>
     	</van-panel>
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
			dsfsdty(){
				console.log(111)
			}
		},
        mounted() {}
    }

</script>
<style  scoped>

</style>
