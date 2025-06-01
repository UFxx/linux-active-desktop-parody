<script setup>
	import { computed } from 'vue';

	const props = defineProps(['hours', 'minutes', 'seconds']);

	const hoursIndicators = [];

	for (let i = 0; i < 12; i++) {
		hoursIndicators.push({ rotate: `rotate(${i * 30}deg)` })
	}

	const isExpandedIndicator = computed(() => (idx) => idx % 3 ? '' : 'expanded')
</script>

<template>
	<div class="analog-clock__container">
		<div class="analog-clock">
			<div
				v-for="(indicator, i) in hoursIndicators"
				:class="['analog-clock__hours-indicator-item', isExpandedIndicator(i)]"
				:style="{ transform: indicator.rotate }"
			/>
			<div
				:class="['analog-clock__hours-arrow', 'analog-clock__time-arrow']"
				:style="{ transform: `rotate(${props.hours * 30}deg)` }"
			/>
			<div
				:class="['analog-clock__minutes-arrow', 'analog-clock__time-arrow']"
				:style="{ transform: `rotate(${props.minutes * 6}deg)` }"
			/>
			<div
				:class="['analog-clock__seconds-arrow', 'analog-clock__time-arrow']"
				:style="{ transform: `rotate(${props.seconds * 6}deg)` }"
			/>
			<div class="analog-clock__center-circle" />
		</div>
	</div>
</template>

<style lang='scss' scoped>
	.analog-clock {
		position: relative;
		width: 610px;
		height: 620px;
		border: 10px solid;
		border-radius: 100%;
		opacity: 0.7;
		@include var(border-color, number);
		@include tr(0.3, border-color, opacity);

		&:hover { opacity: 1;}

		&__hours-indicator-item {
			position: absolute;
			top: 0;
			left: 50%;
			width: 6px;
			height: 20px;
			z-index: -1;
			transform-origin: 50% 300px;
			margin-left: -3px;
			opacity: 0.5;
			@include var(background-color, number);
			@include tr(0.3, opacity);

			&.expanded {
				height: 35px;
				width: 8px;
			}
		}

		&__time-arrow {
			position: absolute;
			bottom: 50%;
			left: 50%;
			transform-origin: bottom;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			@include tr(0.3, transform, background-color);
		}

		&__hours-arrow {
			height: 100px;
			width: 15px;
			margin-left: -7.5px;
			z-index: 3;
			@include var(background-color, declaration);
		}

		&__minutes-arrow {
			width: 10px;
			height: 120px;
			margin-left: -5px;
			z-index: 2;
			@include var(background-color, text);
		}

		&__seconds-arrow {
			width: 5px;
			height: 170px;
			z-index: 1;
			@include var(background-color, variableName);
		}

		&__center-circle {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 30px;
			height: 30px;
			border-radius: 100%;
			z-index: 4;
			box-shadow: 0 0 10px gray;
			@include var(background-color, propName);
		}
	}
</style>