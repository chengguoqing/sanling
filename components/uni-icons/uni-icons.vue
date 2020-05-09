<template>
	<text :style="{ color: color, 'font-size': size + 'px' }" class="uni-icons" @click="_onClick">{{icons[type]}}</text>
</template>

<script>
	import icons from './icons.js';
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('./iconfont.ttf')
	});
	// #endif
	export default {
		name: 'UniIcons',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
			}
		},
		data() {
			return {
				icons: icons
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	/* #ifndef APP-NVUE */
	@font-face {
		font-family: uniicons ;
		src: url('./iconfont.ttf')
	}

	/* #endif */

	.uni-icons {
		font-family: uniicons !important;
		text-decoration: none !important;
		text-align: center !important;
	}
</style>