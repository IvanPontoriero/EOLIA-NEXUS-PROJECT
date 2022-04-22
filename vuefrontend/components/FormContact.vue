<template>
	<div>
		<transition name="fade" mode="out-in">
			<div v-if="sent" class="uk-text-center">
				<h3>Thank you for your message</h3>
				<p>We will contact you soon</p>
			</div>
		</transition>

		<div v-if="!sent" class="formGroup uk-margin-large-top">
			<form @submit="onSubmit">
				<div class="uk-grid uk-grid-small" uk-grid>
					<div class="uk-width-1-2@s">
						<label class="uk-form-label uk-hidden">Name</label>
						<input id="input-name" v-model="form.name" class="uk-input uk-form-large" type="text" placeholder="Name" required>
					</div>

					<div class="uk-width-1-2@s">
						<label class="uk-form-label uk-hidden">Email</label>
						<input id="input-email" v-model="form.email" class="uk-input uk-form-large" type="text" placeholder="your@email.com" name="email" required>
					</div>
				</div>

				<div class="uk-margin">
					<label class="uk-form-label uk-hidden">How can we help you?</label>
					<textarea id="input-message" v-model="form.content" class="uk-textarea uk-form-large" placeholder="Message" name="message" maxlength="250" rows="4" required>
					</textarea>
				</div>
				<button class="uk-button uk-button-primary uk-button-large uk-align-center" type="submit">
					Send message
				</button>
			</form>
		</div>
	</div>

</template>

<script>
	const querystring = require("querystring");

	export default {
		data() {
			return {
				sent: false,
				form: {
					name: "",
					email: "",
					content: "",
				}
			};
		},
		methods: {
			onSubmit(e) {
				e.preventDefault();
				this.$axios
				.post(
					"https://eolianexus.com/mail.php",
					querystring.stringify(this.form)
					)
				.then(res => {
					this.sent = true;
				});
			}
		}
	};
</script>