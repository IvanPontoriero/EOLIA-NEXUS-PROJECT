<template>
  <main id="Home">
    <header id="Hero" class="uk-height-viewport uk-flex uk-flex-middle uk-flex-center" >
      <Countdown />      
    </header>

    <section id="About" class="uk-section uk-section-separator" uk-parallax="bgy: -200">
      <div class="uk-container">
        <div class="uk-flex uk-flex-middle uk-height-viewport">
          <div class="uk-card uk-card-body uk-card-small uk-card-eolia uk-width-1-2@m">
            <h2 class="uk-h3">
              The Eolia Nexus Project
            </h2>
            <p>
              An initiative to create a legitimate use case for NFTs, help improve the digital art scene and its relation with the crypto world, build a community, and help others build experiences on VR.
            </p>
          </div>
        </div>

        <p class="uk-text-center uk-h4 uk-margin-remove uk-title-glow">
          The team will be publicly announced after the first mint.
        </p>
      </div>
    </section>

    <section id="Utility" class="uk-section uk-section-large">
      <div class="uk-container">
        <h2 class="uk-text-center uk-title-glow uk-h1">
          Upcoming Tokens’ Utility Overview
        </h2>

        <div class="uk-grid uk-grid-large uk-flex-middle uk-margin-xlarge-top" uk-grid>
          <div class="uk-width-2-5@m uk-text-center">
            <img src="@/assets/img/certificate.webp" alt="The Founding Stones Series A & B" width="80%">
          </div>
          <div class="uk-width-3-5@m">
            <h3>
              The Founding Stones Series A & B
            </h3>
            <p>
              These tokens will be sold to finance the development process, holders will receive rewards in SOL as the project moves on. These tokens don’t provide access to the museum. Further details can be found on our whitepaper.
            </p>
          </div>
        </div>

        <div class="uk-grid uk-grid-large uk-flex-middle uk-margin-xlarge-top" uk-grid>
          <div class="uk-width-2-5@m">
            <img src="@/assets/img/coming-soon.webp" alt="The Elements Collection">
          </div>
          <div class="uk-width-3-5@m uk-flex-first@m">
            <h3>
              The Elements Collection
            </h3>
            <p>
              118 tokens that represent each one chemical element from the periodic table, owners will be incentivized to trade and collect them through a system of subcollections and prices, holders will also eventually get a unique exclusive skin made by hand that will grant access to exclusive features and events in the project, and participation on a prize pool every quarter. These tokens don’t grant access to the museum or SOL rewards besides those from the prize pool. Learn more from the whitepaper.
            </p>
          </div>
        </div>

        <div class="uk-grid uk-grid-large uk-flex-middle uk-margin-xlarge-top" uk-grid>
          <div class="uk-width-2-5@m">
            <img src="@/assets/img/skins-full.webp" alt="Eolia Nexus Skins">
          </div>
          <div class="uk-width-3-5@m">
            <h3>
              Skins
            </h3>
            <p>
              These tokens will be mostly airdropped to users that own tokens from preexisting collections, some others will be made by invited artists and sold on the spot, these tokens allow holders to access the museum directly through all events during the development process, and access to exclusive interaction possibilities after the opening, these also provide participation on a separate quarterly prize pool.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="Lore" class="uk-section uk-section-separator" uk-parallax="bgy: -200">
      <div class="uk-container">
        <div class="uk-flex uk-flex-middle uk-height-viewport uk-flex-right">
          <div class="uk-card uk-card-body uk-card-small uk-card-eolia uk-width-1-2@m">
            <h2 class="uk-h3">
              The Lore
            </h2>
            <p>
              Eolia is the vestige of a lost civilization. A small paradise saved by the vision of former businessmen who listened to the astronomers’ warnings and acted on time. A cultural Eden, which was developed to be the living record of what we once were, a paradise where art and culture thrive in every corner.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="Gallery">
      <div class="uk-container">
        <div class="gallery-frame uk-padding-large uk-align-center">
          <h3 class="uk-title-glow uk-text-center uk-margin-medium-top">
            Creative Process
          </h3>
          <Gallery />
        </div>
      </div>
    </section>

    <section id="Roadmap" class="uk-section uk-section-large uk-padding-remove-bottom">
      <div class="uk-container">
        <h2 class="uk-text-center uk-title-glow uk-h1 uk-margin-medium-bottom">
          Roadmap
        </h2>
      </div>
      <RoadMap />
    </section>

    <section id="FAQ" class="uk-section uk-section-large">
      <div class="uk-container">
        <h2 class="uk-text-center uk-title-glow uk-h1 uk-margin-large-bottom">
          Frequently Asked Questions
        </h2>
        <div class="uk-width-4-5@s uk-align-center">
          <Faq />
        </div>
      </div>
    </section>

    <section id="Contact" class="uk-section uk-section-large uk-text-center">
      <div class="uk-container">
        <h2 class="uk-text-center uk-title-glow uk-h1 uk-margin-large-bottom">
          Learn More
        </h2>
        <div class="uk-width-2-3@m uk-align-center uk-margin-large-bottom">
          <div class="uk-grid uk-child-width-1-2@m" uk-grid>
            <div>
              <a href="https://drive.google.com/file/d/18UteTni3cVPRSYtPmGYPJoz7coW_WhoU/edit" target="_blank" rel="noopener" class="uk-button uk-button-primary uk-button-large">
                Whitepaper
              </a>
            </div>
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkG1M4GB_MMcHPPIyU2sLlmupI15zLWTEN9IXflhlxqyCLUA/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener" class="uk-button uk-button-primary uk-button-large">
                Join the Team
              </a>
            </div>
          </div>

          <SocialNav />
          
          <FormContact />
        </div>
      </div>
    </section>

    <ToTop />

  </main>
</template>

<script>
  export default {
    name: 'IndexPage',

    head(){
      return {
        script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-550Z48E2EN",
          async: true,
        },
        {
          type:'text/javascript',
          innerHTML: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-550Z48E2EN');",
        }
        ]
      }
    }
  }
</script>


