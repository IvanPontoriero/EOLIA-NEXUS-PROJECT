<template>
	<div id="roadslide" class="uk-slider-container-offset" uk-slider="finite: true;">
		<div class="uk-position-relative uk-visible-toggle" tabindex="-1">

			<ul class="uk-slider-items uk-child-width-1-3@s uk-grid uk-grid-collapse uk-text-center">
				<li v-for="item in items" :key="item.id" :class="item.phaseClass">
					<p class="uk-h4 phase-title uk-margin-medium-bottom" v-html="item.phaseTitle">
					</p>
					<div class="uk-card uk-card-body uk-card-small uk-flex uk-flex-middle">
						<img src="@/assets/img/roadmap-frame-top.svg" class="frame-top" uk-svg v-if="item.phase1 === true">
						<img src="@/assets/img/roadmap-frame-bottom.svg" class="frame-bottom" uk-svg v-if="item.phase1 === true">

						<img src="@/assets/img/roadmap-frame-top-red.svg" class="frame-top" uk-svg v-if="item.phase2 === true">
						<img src="@/assets/img/roadmap-frame-bottom-red.svg" class="frame-bottom" uk-svg v-if="item.phase2 === true">

						<img src="@/assets/img/roadmap-frame-top-cyan.svg" class="frame-top" uk-svg v-if="item.phase3 === true">
						<img src="@/assets/img/roadmap-frame-bottom-cyan.svg" class="frame-bottom" uk-svg v-if="item.phase3 === true">
						<span>
							<h3 class="uk-h4 uk-margin-remove-top">
								{{ item.title }}
							</h3>
							<p class="uk-margin-remove-bottom">
								{{ item.answer }}
							</p>
						</span>
					</div>
				</li>
			</ul>

			<a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
			<a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
				{
					id: 0,
					phase1: true,
					phaseClass: 'phase-1',
					phaseTitle: 'Phase 1:<br/> Building the Dream',
					title: 'The Founding Stones grade A',
					answer: 'A collection of 1000 equivalent NFTs will be minted to collect initial money to start the project.',
				},
				{
					id: 1,
					phase1: true,
					phaseClass: 'phase-1',
					title: 'The First Collection',
					answer: 'A collection of 119 tokens, each representing one element of the periodic table will be released.',
				},
				{
					id: 2,
					phase1: true,
					phaseClass: 'phase-1',
					title: 'The Virtual Museum Demo',
					answer: 'A virtual museum dedicated to digital art made live in the virtual world.',
				},
				{
					id: 3,
					phase1: true,
					phaseClass: 'phase-1',
					title: 'Second Founding Stones Batch',
					answer: '2000 new Founding Stones “Grade B” will be minted to continue funding development.',
				},
				{
					id: 4,
					phase1: true,
					phaseClass: 'phase-1',
					title: 'The Second Collection',
					answer: '400 tokens, each representing one historical personality will be created',
				},
				{
					id: 5,
					phase1: true,
					phaseClass: 'phase-1',
					title: 'Pre Opening event',
					answer: 'This event will expand the art collection, showcase new functionalities, and demonstrate the effective scalability of the project’s architecture.',
				},
				{
					id: 6,
					phase1: true,
					phaseClass: 'phase-1',
					title: 'Eolia Nexus Virtual Museum Great Opening',
					answer: 'This event will finally allow for the general public to access the museum, with limited access to some functionalities.',
				},
				{
					id: 7,
					phase2: true,
					phaseClass: 'phase-2',
					phaseTitle: 'Phase 2:<br/> Expansion and Continuation',
					title: 'Overview',
					answer: 'New forms of artistic media, architecture, fashion and user customized experiences are just some of the possibilities pondered by the team to this date.',
				},
				{
					id: 8,
					phase3: true,
					phaseClass: 'phase-3',
					phaseTitle: 'Phase 3:<br/> Going Further',
					title: 'Overview',
					answer: 'Once the Eolia Virtual Environment is properly established, we hope to invest and help develop new projects outside the virtual space, allowing the community to have a tangible impact in the real world, and ensuring new sustainable sources of income to continue rewarding token ownership.',
				},
				],
			}
		},
	}
</script>