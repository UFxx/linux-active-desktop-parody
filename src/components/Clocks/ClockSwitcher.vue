<script setup>
	import { ref, reactive, computed, onMounted } from 'vue';
	import CodeClock from './CodeClock.vue';
	import ElectronicClock from './ElectronicClock.vue';
	import AnalogClock from './AnalogClock.vue';

	const props = defineProps(['clock']);

	const activeClocks = ref('code');
	const itemsContainerExpanded = ref(false);

	const clockTypes = reactive([
		{
			name: 'code',
			isActive: true
		},
		{
			name:'electronic',
			isActive: false
		},
		{
			name: 'analog',
			isActive: false
		}
	]);

	const clockSwitcher = (clockType) => {
		activeClocks.value = clockType
		localStorage.setItem('activeClocks', clockType);
	};

	function changeActiveClockType(clockType, idx) {
		clockTypes.forEach(clockType => clockType.isActive = false);
		clockTypes[idx].isActive = true;
		itemsContainerExpanded.value = false;
		clockSwitcher(clockType.name);
	}

	const unactiveItems = computed(() => clockTypes.filter((type) => type.name !== activeClocks.value));

	onMounted(() => {
		if (!localStorage.getItem('activeClocks'))
			localStorage.setItem('activeClocks', 'code');
		else
			activeClocks.value = localStorage.getItem('activeClocks');
	})
</script>

<template>
	<div class="clock-container">
		<CodeClock
			v-if="activeClocks === 'code'"
			:clock="props.clock"
		/>
		<ElectronicClock
			v-if="activeClocks === 'electronic'"
			:hours="props.clock.hours"
			:minutes="props.clock.minutes"
			:seconds="props.clock.seconds"
		/>
		<AnalogClock
			v-if="activeClocks === 'analog'"
			:hours="props.clock.hours"
			:minutes="props.clock.minutes"
			:seconds="props.clock.seconds"
		/>
	</div>
	<div class="clock-switcher__container">
		<div
			:class="['clock-switcher__selected', 'clock-switcher__item', 'active']"
			@click="itemsContainerExpanded = !itemsContainerExpanded"
		>
			<p>{{ activeClocks }}</p>
		</div>
		<div
			:class="[
					'clock-switcher__items-container',
					itemsContainerExpanded ? 'clock-switcher__items-container--expanded' : ''
				]"
		>
			<p
				v-for="(item, i) in unactiveItems"
				:class="['clock-switcher__item']"
				@click="() => changeActiveClockType(item, i)"
			>
				{{ item.name }}
			</p>
		</div>
	</div>
</template>

<style lang='scss' scoped>
	.clock-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.clock-switcher__container {
		position: absolute;
		right: 150px;
		top: 45px;
		text-align: center;

		p {
			font-family: 'Fira Code';
			@include var(color, text);
		}
	}

	.clock-switcher__item {
		opacity: 0.3;
		text-transform: capitalize;
		cursor: pointer;

		&:hover {
			opacity: 1;
			@include tr(0.3, opacity, text-shadow)
		}

		&.active {
			text-shadow: 0 0 20px currentColor;
			opacity: 1;
			user-select: none;
		}
	}

	.clock-switcher__items-container {
		opacity: 0;
		visibility: hidden;

		p { text-shadow: 0 0 20px currentColor; }

		&--expanded {
			opacity: 1;
			visibility: visible;
		}
	}
	</style>
