<script setup>
	import { computed, ref } from 'vue';
	import ClockItem from './ClockItem.vue';

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

	const propNames = computed(() => Object.keys(clock.value));
	const formatTime = computed(() => (time) => time.toString().length === 1 ? `0${time}` : time.toString());
	const isLastProp = computed(() => (name) => name === propNames.value[propNames.value.length - 1]);
	const isString = computed(() => (prop) => /[a-zа-яё]/i.test(prop));

	setInterval(() => (date.value = new Date()), 1000);
</script>

<template>
	<div class="clock">
		<p>
			<span class="clock-declaration">const</span> <span class="clock-variable-name">Clock </span>
			<span class="clock-equal">=</span> <span class="clock-brackets">{</span>
		</p>
		<div class="clock-content">
			<ClockItem
				v-for="name in propNames"
				:objectPropName="name"
				:propValue="formatTime(clock[name])"
				:isLastProp="isLastProp(name)"
				:isString="isString(clock[name])"
			/>
		</div>
	<p><span class="clock-brackets">}</span><span class="clock-semicolon">;</span></p>
	</div>
</template>

<style lang="scss" scoped>
	.clock {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		&-content { margin-left: 35px; }

		p {
			font-size: 24px;
			line-height: 36px;
			cursor: context-menu;

			& * { @include tr(0.3, text-shadow, color); }
			&:hover * { text-shadow: 0px 0px 20px currentColor; }
		}

		&-declaration { @include var(color, declaration); }
		&-variable-name { @include var(color, variableName); }
		&-prop-name { @include var(color, propName) }
		&-equal { @include var(color, equal) }
		&-brackets { @include var(color, brackets) }
		&-semicolon { @include var(color, semicolon) }
	}
</style>
