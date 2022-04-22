<template>
	<div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; flip: true">
		<div class="uk-offcanvas-bar uk-flex uk-flex-column">

			<div class="offcanvas-logo uk-margin-bottom">
				<button class="uk-offcanvas-close" type="button" uk-close></button>
			</div>

			<ul class="uk-nav uk-nav-primary">
				<li>
					<a href="#About" uk-scroll class="uk-offcanvas-close">About Us</a>
				</li>
				<li>
					<a href="#Utility" uk-scroll class="uk-offcanvas-close">Utility</a>
				</li>
				<li>
					<a href="#Lore" uk-scroll class="uk-offcanvas-close">Lore</a>
				</li>
				<li>
					<a href="#Roadmap" uk-scroll class="uk-offcanvas-close">Roadmap</a>
				</li>
				<li>
					<a href="#FAQ" uk-scroll class="uk-offcanvas-close">FAQ</a>
				</li>
				<li>
					<a href="#Contact" uk-scroll class="uk-offcanvas-close">Contact</a>
				</li>
				<li>
					<a href="https://drive.google.com/file/d/18UteTni3cVPRSYtPmGYPJoz7coW_WhoU/edit" target="_blank" rel="noopener">Whitepaper</a>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'Offcanvas',
	}
</script>