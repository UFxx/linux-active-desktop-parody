<script setup>
	import { computed } from 'vue';

	const props = defineProps(['objectPropName', 'propValue', 'isLastProp', 'propType'])

	const getPropType = computed(() => props.propType ? 'prop-value__text' : 'prop-value__number')
	const formattedPropValue = computed(() => props.propType ? `"${props.propValue}"` : props.propValue)
</script>

<template>
	<div class="item">
			<p class="prop-name">{{ objectPropName }}:</p>
			<p class="prop-value" :class="getPropType">&nbsp;{{ formattedPropValue }}</p>
			<p class="comma" v-if="!props.isLastProp">,</p>
	</div>
</template>

<style lang='scss' scoped>
	.item
	{
		display: flex;
		line-height: 36px;
		font-size: 24px;
		cursor: context-menu;

		p { color: white; }

		&:hover .prop-value {
			text-shadow: 0px 0px 20px currentColor;
		}
	}

	.prop-name {
		&::first-letter { text-transform: capitalize; }
	}

	.prop-value {
		transition: .3s ease text-shadow;

		&__text {
			color: $text !important;
		}

		&__number {
			color: $number !important;
		}
	}
</style>