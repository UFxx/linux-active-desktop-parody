<script setup>
	const props = defineProps({
		path: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: 'medium',
			validator: (value) => ['small', 'medium'].includes(value)
		},
		class: { type: String }
	})
</script>

<template>
	<img :class="[props.class, props.size]" :src="`/src/assets/icons/${props.path}`" alt="icon">
</template>

<style lang='scss' scoped>
	img {
		opacity: 0.5;
		@include tr(0.3, opacity);

		&:hover { opacity: 1; }
	}

	.clickable { cursor: pointer; }

	.small {
		width: 24px;
		height: 24px;
	}

	.medium {
		width: 48px;
		height: 48px;
	}
</style>