<script setup>
	import { computed } from 'vue';

	const props = defineProps(['objectPropName', 'propValue', 'isLastProp', 'isString']);

	const getClassBasedOnPropType = computed(() => props.isString ? 'prop-value__text' : 'prop-value__number');
	const formattedPropValue = computed(() => props.isString ? `"${props.propValue}"` : props.propValue);
</script>

<template>
	<div class="item">
		<p class="prop-name">{{ objectPropName }}:</p>
		<p class="prop-value" :class="getClassBasedOnPropType">&nbsp;{{ formattedPropValue }}</p>
		<p class="comma" v-if="!props.isLastProp">,</p>
	</div>
</template>

<style lang='scss' scoped>
	.item {
		display: flex;
		line-height: 36px;
		font-size: 24px;
		opacity: 0.7;
		cursor: context-menu;
		@include tr(0.3, text-shadow, opacity);

		&:hover .prop-value,
		&:hover {
			text-shadow: 0px 0px 20px currentColor;
			opacity: 1;
		}
	}

	.prop-name {
		&::first-letter { text-transform: capitalize; }
	}

	.prop-value {
		@include tr(0.3, text-shadow, color);

		&__text { @include var(color, text) }
		&__number { @include var(color, number) }
	}
</style>