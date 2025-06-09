<script setup>
	import { reactive, computed, watch, ref, onMounted, onUpdated } from 'vue';

	const props = defineProps(['hours']);

	const isThemesLocked = ref(true);
	const themeAnimationCircle = ref(null);
	const isCircleExpanded = ref(false);

	const themes = reactive([
		{
			name: 'black',
			isActive: true,
			colors: {
				backgroundColor: '#000000',
				declaration: '#fd6464',
				variableName: '#fdea4c',
				propName: '#FFFFFF',
				text: '#60e175',
				number: '#872cfc',
				equal: '#ea5a8b',
				brackets: '#fdef2e',
				semicolon: '#FFFFFF'
			}
		},
		{
			name: 'nord',
			isActive: false,
			colors: {
				backgroundColor: '#3b4252',
				declaration: '#7998b6',
				variableName: '#FFFFFF',
				propName: '#FFFFFF',
				text: '#99b384',
				number: '#ac7c7a',
				equal: '#7998b6',
				brackets: '#007878',
				semicolon: '#759cbb'
			}
		}
	]);

	const activeTheme = computed(() => themes.find((theme) => theme.isActive));
	const colorsNamesFromActiveTheme = computed(() => Object.getOwnPropertyNames(activeTheme.value.colors));
	const isActiveThemeIcon = computed(() => (theme) => theme.isActive ? 'active' : '');
	const isExpanded = computed(() => (isCircleExpanded) => isCircleExpanded ? 'expanded' : '');

	function changeActiveTheme(idx) {
  if (themes[idx].isActive) return;
  if (isCircleExpanded.value) return;

  themes.forEach((theme) => (theme.isActive = false));
  themes[idx].isActive = true;
  localStorage.setItem('activeTheme', idx);
}

	function changeThemeColors() {
		const root = document.documentElement;
		colorsNamesFromActiveTheme.value.forEach(propName => root.style.setProperty(`--${propName}`, activeTheme.value.colors[propName]))
	}

	watch(themes, () => {
		isCircleExpanded.value = true;
		setTimeout(() => isCircleExpanded.value = false, 900);
		setTimeout(() => changeThemeColors(), 900);
	});

	onMounted(() => {
		if (!localStorage.getItem('activeTheme')) {
			localStorage.setItem('activeTheme', 0);
			changeActiveTheme(0);
		} else {
			changeActiveTheme(localStorage.getItem('activeTheme'));
		}

		changeThemeColors(localStorage.getItem('activeTheme'));
	})

	watch(() => props.hours, (newHours) => {
  if (!isThemesLocked.value) return;

  if (newHours >= 16) {
    changeActiveTheme(0);
  } else {
    changeActiveTheme(1);
  }
}, { immediate: true });
</script>

<template>
	<div class="container">
		<ui-icon
			:path="isThemesLocked ? 'lock.png' : 'unlock.png'"
			size="small"
			class="clickable"
			@click="isThemesLocked = !isThemesLocked"
		/>
		<div :class="['inner-container', isThemesLocked ? 'locked' : null]">
			<div
				v-for="(theme, i) in themes"
				:key="theme.name"
				:class="['theme-icon', theme.name, isActiveThemeIcon(theme)]"
				@click="() => changeActiveTheme(i)"
			>
			</div>
		</div>
	</div>
	<div
		:class="['change-theme-circle', activeTheme.name, isExpanded(isCircleExpanded)]"
		ref="themeAnimationCircle"
	/>
</template>

<style lang="scss" scoped>
	.container {
		position: absolute;
		top: 30px;
		right: 30px;
		display: flex;
		align-items: center;
		column-gap: 20px;
	}

	.inner-container {
		display: flex;
		align-items: center;
		column-gap: 10px;
		border-radius: 50px;
		padding: 7px 10px;
		border: 2px solid white;
		opacity: 10%;
		@include tr(0.3, opacity);

		&:hover { opacity: 1; }

		&.locked {
			opacity: 0.1;

			&, & * { cursor: no-drop; }
			&:hover { opacity: 0.1; }
		}
	}

	.theme-icon {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		cursor: pointer;
		@include tr(0.3, box-shadow);

		&.active { box-shadow: 0 0 1px 2px white; }
	}

	.change-theme-circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0;
		height: 0;
		border-radius: 100%;
		z-index: -1;
		@include tr(.7, width, height, backgound-color, border-radius);

		&.expanded {
			width: 100%;
			height: 100%;
			border-radius: 0;
		}
	}

	// Themes bg colors
	.black { background-color: #000000; }
	.nord { background-color: #3b4252; }
</style>
