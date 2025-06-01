<script setup>
	import { onMounted, ref, computed } from 'vue';
	import ClockSwitcher from './components/Clocks/ClockSwitcher.vue';
	import Themes from './components/Themes.vue'

	const date = ref(new Date());

	const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

	const clock = computed(() => {
		const currentDate = date.value;
		return {
			year: currentDate.getFullYear(),
			weekNumber: Math.ceil(((currentDate.getMonth() + 1) * 30) / 7),
			month: `${months[currentDate.getMonth()]} (${currentDate.getMonth() + 1})`,
			dayOfMonth: currentDate.getDate(),
			dayOfWeek:
				daysOfWeek[currentDate.getDay() - 1 === undefined ? currentDate.getDay() : daysOfWeek.length - 1],
			hours: currentDate.getHours(),
			minutes: currentDate.getMinutes(),
			seconds: currentDate.getSeconds()
		};
	});

	setInterval(() => (date.value = new Date()), 1000);
	onMounted(() => document.addEventListener('contextmenu', (e) => e.preventDefault()))
</script>

<template>
		<ClockSwitcher :clock="clock" />
		<Themes />
</template>

<style lang="scss" scoped></style>
