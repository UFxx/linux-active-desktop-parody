<script setup>
	import Clock from './components/Clock.vue';
	import Themes from './components/Themes.vue'
</script>

<template>
	<div class="clock-container">
		<Clock />
		<Themes />
	</div>
</template>

<style lang="scss" scoped>
	.clock-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
