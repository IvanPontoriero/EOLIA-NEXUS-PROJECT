<template>
	<div tabindex="-1" uk-slideshow="animation: scale; max-height: 800; ratio: 15:10; autoplay: true">
		<div class="uk-position-relative uk-visible-toggle uk-light">
			<ul class="uk-slideshow-items" uk-lightbox>
				<li>
					<a :href="require('~/assets/img/gallery/01.jpg')" uk-cover>
						<img src="~/assets/img/gallery/01.jpg" alt="Concept Cars by yael duckwen" uk-cover>
					</a>
				</li>
				<li>
					<a :href="require('~/assets/img/gallery/02.jpg')" uk-cover>
						<img src="~/assets/img/gallery/02.jpg" alt="Concept Cars Race by yael duckwen">
					</a>
				</li>
				<li>
					<a :href="require('~/assets/img/gallery/03.jpg')" uk-cover>
						<img src="~/assets/img/gallery/03.jpg" alt="Landscape">
					</a>
				</li>
				<li>
					<a :href="require('~/assets/img/gallery/04.jpg')" uk-cover>
						<img src="~/assets/img/gallery/04.jpg" alt="Street art by yael duckwen">
					</a>
				</li>
				<li>
					<a :href="require('~/assets/img/gallery/05.jpg')" uk-cover>
						<img src="~/assets/img/gallery/05.jpg" alt="cyberpunk by yael duckwen">
					</a>
				</li>
				<li>
					<a :href="require('~/assets/img/gallery/06.jpg')" uk-cover>
						<img src="~/assets/img/gallery/06.jpg" alt="cyberpunk by yael duckwen">
					</a>
				</li>
			</ul>
			<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
			<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
		</div>
		<div class="uk-position-small uk-margin-remove-bottom">
			<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-margin-remove-bottom"></ul>
		</div>
	</div>
</template>