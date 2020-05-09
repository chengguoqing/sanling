<template>
    <view> 
     <view class="mt10" v-for="sd in 10">
     	<van-panel title="1、吕梁市********* " status="2020/6/6" use-footer-slot>
     	    <view class=" fz30 z6 pt30 pm30 pd">
     			    吕梁市**区***街道***  吕梁市**区***街道*** 吕梁市**区***街道*** 吕梁市**区***街道*** 
     		  </view>
			  
			    <view slot="footer" class="tr">
			      <van-button size="small">{{btntext}}</van-button>
			    </view>
     	</van-panel>
     </view>
        
    </view>
</template>
<script>
    export default {
		props:['btntext'],
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
