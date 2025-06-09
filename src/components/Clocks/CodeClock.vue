<script setup>
	import { computed } from 'vue';
	import ClockItem from './ClockItem.vue';

	const props = defineProps(['clock'])

	const propNames = computed(() => Object.keys(props.clock));
	const formatTime = computed(() => (time) => time.toString().length === 1 ? `0${time}` : time.toString());
	const isLastProp = computed(() => (name) => name === propNames.value[propNames.value.length - 1]);
	const isString = computed(() => (prop) => /[a-zа-яё]/i.test(prop));
</script>

<template>
	<div class="code-clocks">
		<p>
			<span class="code-clocks__declaration">const</span> <span class="code-clocks__variable-name">Clock </span>
			<span class="code-clocks__equal">=</span> <span class="code-clocks__brackets">{</span>
		</p>
		<div class="code-clocks-content">
			<ClockItem
				v-for="name in propNames"
				:objectPropName="name"
				:propValue="formatTime(props.clock[name])"
				:isLastProp="isLastProp(name)"
				:isString="isString(props.clock[name])"
			/>
		</div>
	<p><span class="code-clocks__brackets">}</span><span class="code-clocks__semicolon">;</span></p>
	</div>
</template>

<style lang="scss" scoped>
	.code-clocks {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-family: 'Fira Code';

		&-content { margin-left: 35px; }

		p {
			font-size: 24px;
			line-height: 36px;
			cursor: context-menu;
			font-family: 'Fira Code';


			& * {
				@include tr(0.3, text-shadow, color);
			}
			&:hover * { text-shadow: 0px 0px 20px currentColor; }
		}

		&__declaration { @include var(color, declaration); }
		&__variable-name { @include var(color, variableName); }
		&__prop-name { @include var(color, propName) }
		&__equal { @include var(color, equal) }
		&__brackets { @include var(color, brackets) }
		&__semicolon { @include var(color, semicolon) }
	}
</style>
