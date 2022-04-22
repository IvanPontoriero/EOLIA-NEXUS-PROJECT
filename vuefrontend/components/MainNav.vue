<template>
	<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
		<nav id="MainNav" class="uk-navbar uk-navbar-container" uk-navbar>

			<div class="uk-navbar-left">
				<router-link to="/" class="uk-navbar-item uk-logo">
					<img src="@/assets/img/logo.svg" alt="Eolia Nexus" width="60" class="floating">
					Eolia Nexus
				</router-link>
			</div>

			<div class="uk-navbar-right">
				<a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="" uk-toggle="target: #offcanvas-nav-primary"></a>
				<ul class="uk-navbar-nav uk-visible@m" uk-scrollspy-nav="closest: li; scroll: true">
					<li class="uk-hidden">
						<a href="#Hero" uk-scroll>Hero</a>
					</li>
					<li>
						<a href="#About" uk-scroll="offset: 100;">About Us</a>
					</li>
					<li>
						<a href="#Utility" uk-scroll>Utility</a>
					</li>
					<li>
						<a href="#Lore" uk-scroll="offset: 100;">Lore</a>
					</li>
					<li>
						<a href="#Roadmap" uk-scroll>Roadmap</a>
					</li>
					<li>
						<a href="#FAQ" uk-scroll>FAQ</a>
					</li>
					<li>
						<a href="#Contact" uk-scroll>Contact</a>
					</li>
					<li>
						<a href="https://drive.google.com/file/d/18UteTni3cVPRSYtPmGYPJoz7coW_WhoU/edit" target="_blank" rel="noopener">Whitepaper</a>
					</li>
				</ul>
			</div>
		</nav>

		<Offcanvas />
	</div>
</template>

<script>
	export default {
		name: 'MainNav',
	}
</script>