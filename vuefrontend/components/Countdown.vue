<template>
	<div id="Countdown">
		<img src="@/assets/img/countdown.png" class="count-bg" width="750">
		<div class="uk-grid-small uk-child-width-auto uk-margin" uk-grid uk-countdown="date: 2022-06-01T17:38:11+00:00">
			<div>
				<div class="uk-countdown-number uk-countdown-days"></div>
			</div>
			<div class="uk-countdown-separator">:</div>
			<div>
				<div class="uk-countdown-number uk-countdown-hours"></div>
			</div>
			<div class="uk-countdown-separator">:</div>
			<div>
				<div class="uk-countdown-number uk-countdown-minutes"></div>
			</div>
			<div class="uk-countdown-separator">:</div>
			<div>
				<div class="uk-countdown-number uk-countdown-seconds"></div>
			</div>
		</div>
	</div>
</template>