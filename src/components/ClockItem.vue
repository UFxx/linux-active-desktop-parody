<script setup>
	import { computed } from 'vue';

	const props = defineProps(['objectPropName', 'propValue', 'isLastProp', 'isString'])

	const getClassBasedOnPropType = computed(() => props.isString ? 'prop-value__text' : 'prop-value__number')
	const formattedPropValue = computed(() => props.isString ? `"${props.propValue}"` : props.propValue)
</script>

<template>
	<div class="item">
			<p class="prop-name">{{ objectPropName }}:</p>
			<p class="prop-value" :class="getClassBasedOnPropType">&nbsp;{{ formattedPropValue }}</p>
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
		@include transition($prop: text-shadow);

		p { color: white; }

		&:hover .prop-value,
		&:hover { text-shadow: 0px 0px 20px currentColor; }
	}

	.prop-name {
		&::first-letter { text-transform: capitalize; }
	}

	.prop-value {
		@include transition($prop: text-shadow);

		&__text { color: $text !important; }
		&__number { color: $number !important; }
	}
</style>