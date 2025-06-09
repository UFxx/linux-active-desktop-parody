<script setup>
	import { onMounted, ref, computed } from 'vue';
	import ClockSwitcher from './components/Clocks/ClockSwitcher.vue';
	import Themes from './components/Themes.vue'

	const date = ref(new Date());

	const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

	function getWeekNumber(d) {
		const date = new Date(d);
		date.setHours(0, 0, 0, 0);
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		const week1 = new Date(date.getFullYear(), 0, 4);
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	}

	const clock = computed(() => {
		const currentDate = date.value;
		return {
			year: currentDate.getFullYear(),
			weekNumber: getWeekNumber(currentDate),
			month: `${months[currentDate.getMonth()]} (${currentDate.getMonth() + 1})`,
			dayOfMonth: currentDate.getDate(),
			dayOfWeek:
				daysOfWeek[currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1],
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
		<Themes :hours="clock.hours" />
</template>

<style lang="scss" scoped></style>
