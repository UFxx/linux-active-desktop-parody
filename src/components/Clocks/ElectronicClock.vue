<script setup>
	import { computed } from 'vue';

	const props = defineProps(['hours', 'minutes', 'seconds']);

	const formatNumbers = computed(() => (time) => time.toString().length === 1 ? `0${time}` : time);
</script>

<template>
	<div class="electronic-clocks__container">
		<p>
			<span>{{ formatNumbers(props.hours) }}</span>:<span>{{ formatNumbers(props.minutes) }}</span>:<span>{{ formatNumbers(props.seconds) }}</span>
		</p>
	</div>
</template>

<style lang='scss'>
	.electronic-clocks__container {
		p {
			font-family: 'Digital Numbers', sans-serif !important;
			font-size: 128px;
			cursor: context-menu;

			span {
				opacity: 0.7;
				@include var(color, number);
				@include tr(0.3, color);

				&:hover {
					opacity: 1;
					@include tr(0.3, opacity);
				}
			}
		}
	}
</style>