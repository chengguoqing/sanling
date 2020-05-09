<template>
    <view> 
     <view class="mt10" v-for="sd in 10">
     	<van-panel title="*****村、社区、单位、企业" >
     	  <view class="row fz30 z6 pt30 pm30 pd">
			  <view class="col">
			  	事故       50
			  </view>
			  <view class="col cen">
			  	信访       50
			  </view>
			  <view class="col tr">
			  案件       50
			  </view>
			  <view class="col tr">
			  隐患       89
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
        methods: {},
        mounted() {}
    }

</script>
<style  scoped>

</style>
