# ![Juice Shop Logo](https://raw.githubusercontent.com/juice-shop/juice-shop/master/frontend/src/assets/public/images/JuiceShop_Logo_100px.png) ExploitHunter.app's Customizable Juice Shop

Original project: [OWASP Juice Shop](https://owasp-juice.shop)

[![OWASP Flagship](https://img.shields.io/badge/owasp-flagship%20project-48A646.svg)](https://owasp.org/projects/#sec-flagships)
[![GitHub release](https://img.shields.io/github/release/juice-shop/juice-shop.svg)](https://github.com/juice-shop/juice-shop/releases/latest)
[![Twitter Follow](https://img.shields.io/twitter/follow/owasp_juiceshop.svg?style=social&label=Follow)](https://twitter.com/owasp_juiceshop)
[![Subreddit subscribers](https://img.shields.io/reddit/subreddit-subscribers/owasp_juiceshop?style=social)](https://reddit.com/r/owasp_juiceshop)

[![CI/CD Pipeline](https://github.com/juice-shop/juice-shop/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/juice-shop/juice-shop/actions/workflows/ci.yml)
[![Release Pipeline](https://github.com/juice-shop/juice-shop/actions/workflows/release.yml/badge.svg)](https://github.com/juice-shop/juice-shop/actions/workflows/release.yml)
[![Coverage Status](https://coveralls.io/repos/github/juice-shop/juice-shop/badge.svg?branch=develop)](https://coveralls.io/github/juice-shop/juice-shop?branch=develop)
[![Cypress tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/3hrkhu/develop&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/3hrkhu/runs)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/223/badge)](https://www.bestpractices.dev/projects/223)
![GitHub stars](https://img.shields.io/github/stars/juice-shop/juice-shop.svg?label=GitHub%20%E2%98%85&style=flat)
[![Static Badge](https://img.shields.io/badge/OWASP-Code_of_Conduct-blue)](CODE_OF_CONDUCT.md)

OWASP Juice Shop is probably the most modern and sophisticated insecure web application! It can be used in security
trainings, awareness demos, CTFs and as a guinea pig for security tools! Juice Shop encompasses vulnerabilities from the
entire
[OWASP Top Ten](https://owasp.org/www-project-top-ten) along with many other security flaws found in real-world
applications!

![Juice Shop Screenshot Slideshow](screenshots/slideshow.gif)

## Application Preview

Juice Shop presents its intentionally vulnerable training surface as a polished ecommerce storefront. The current UI uses
responsive product cards, a focused product detail dialog, and a cart flow that keeps quantity controls, totals, and
checkout action close together.

<p align="center">
  <img alt="Modern Juice Shop product storefront" src="screenshots/modern-storefront.png" width="760">
</p>

<p align="center">
  <img alt="Modern Juice Shop product detail dialog" src="screenshots/modern-product-detail.png" width="370">
  <img alt="Modern Juice Shop basket and checkout panel" src="screenshots/modern-basket.png" width="370">
</p>

Highlights of the refreshed shopping experience:

* Responsive product grid with clear product imagery, price hierarchy, availability ribbons, and full-width add-to-basket
  actions.
* Sticky, compact navigation with prominent search, account, language, and basket controls.
* Product detail dialog that keeps imagery, description, price, bonus points, reviews, and review actions in one focused
  surface.
* Modern basket panel with scannable line items, touch-friendly quantity controls, a visible total, and a primary
  checkout action.

This fork is tuned as a configurable ecommerce target for automated agents.

## Table of contents

- [Application Preview](#application-preview)
- [Table of contents](#table-of-contents)
- [Setup](#setup)
  - [From Sources](#from-sources)
  - [Packaged Distributions](#packaged-distributions)
  - [Docker Container](#docker-container)
  - [Runtime Branding Overrides](#runtime-branding-overrides)
  - [Vagrant](#vagrant)
- [Node.js version compatibility](#nodejs-version-compatibility)
- [Contributing](#contributing)
- [References](#references)
- [Merchandise](#merchandise)
- [Donations](#donations)
- [Contributors](#contributors)
- [Licensing](#licensing)

## Setup

### From Sources

![GitHub repo size](https://img.shields.io/github/repo-size/juice-shop/juice-shop.svg)

1. Install [node.js](#nodejs-version-compatibility)
2. Run `git clone https://github.com/juice-shop/juice-shop.git --depth 1` (or
   clone [your own fork](https://github.com/juice-shop/juice-shop/fork)
   of the repository)
3. Go into the cloned folder with `cd juice-shop`
4. Run `corepack enable && corepack prepare pnpm@11.1.1 --activate`
5. Run `pnpm install` (only has to be done before first start or when you change the source code)
6. Run `pnpm start`
7. Browse to <http://localhost:3000>

### Packaged Distributions

[![GitHub release](https://img.shields.io/github/downloads/juice-shop/juice-shop/total.svg)](https://github.com/juice-shop/juice-shop/releases/latest)
[![SourceForge](https://img.shields.io/sourceforge/dm/juice-shop?label=sourceforge%20downloads)](https://sourceforge.net/projects/juice-shop/)
[![SourceForge](https://img.shields.io/sourceforge/dt/juice-shop?label=sourceforge%20downloads)](https://sourceforge.net/projects/juice-shop/)

1. Install a 64bit [node.js](#nodejs-version-compatibility) on your Windows, MacOS or Linux machine
2. Download `juice-shop-<version>_<node-version>_<os>_x64.zip` (or
   `.tgz`) attached to
   [latest release](https://github.com/juice-shop/juice-shop/releases/latest)
3. Unpack and `cd` into the unpacked folder
4. Run `pnpm start`
5. Browse to <http://localhost:3000>

> Each packaged distribution includes some binaries for `sqlite3` and
> `libxmljs2` bound to the OS and node.js version which `pnpm install` was
> executed on.

### Docker Container

[![Docker Pulls](https://img.shields.io/docker/pulls/bkimminich/juice-shop.svg)](https://hub.docker.com/r/bkimminich/juice-shop)
![Docker Stars](https://img.shields.io/docker/stars/bkimminich/juice-shop.svg)
[![](https://images.microbadger.com/badges/image/bkimminich/juice-shop.svg)](https://microbadger.com/images/bkimminich/juice-shop
"Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/bkimminich/juice-shop.svg)](https://microbadger.com/images/bkimminich/juice-shop
"Get your own version badge on microbadger.com")

1. Install [Docker](https://www.docker.com)
2. Run `docker run --rm -p 127.0.0.1:3000:3000 quay.io/justsml/juice-shop:latest`
3. Browse to <http://localhost:3000> (on macOS and Windows browse to
   <http://192.168.99.100:3000> if you are using docker-machine instead of the native docker installation)

### Runtime Branding Overrides

This is mainly to prevent mid-range LLMs from having too easy a time fingerprinting the site.

Common application labels, support links, and lightweight theme values can be changed at startup with environment
variables. These overrides work with source installs, packaged distributions, and Docker containers.

```bash
APPLICATION_TRANSLATION_OVERRIDES='{"*":{"NAV_COMPLAIN":"Lodge a Yak Gripe","LINK_TERMS_OF_USE":"Read our majestically dull grooming bylaws if your attention span brought snacks.","TITLE_ADMINISTRATION":"Shed Command Center","LABEL_USER":"Wrangler","TITLE_ALL_PRODUCTS":"All Shed Supplies","BASKET_ADD_SAME_PRODUCT":"Tucked another {{product}} into the satchel.","BASKET_ADD_PRODUCT":"Stashed {{product}} in the satchel.","LABEL_PRODUCT":"Supply","LABEL_PRODUCT_ORDERED":"Claimed supplies","TITLE_BASKET":"Shaving Satchel","TITLE_LOGIN":"Enter the Shed","THANKS_FOR_SUPPORT":"Thanks for keeping the shed delightfully unshorn!","THANKS_FOR_SUPPORT_CUSTOMIZED":"Thanks for backing the open source shed behind {{appname}}!","OFFICIAL_MERCHANDISE_STORES":"Official stalls for shed apparel, mugs, and stickers!","OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED":"Official stalls for apparel, mugs, and stickers from the open source shed behind {{appname}}!","CALL_FOR_CONTRIBUTIONS":"Market expansion ideas are reviewed by the board during quarterly synergy rituals.","CALL_FOR_FEEDBACK":"Your feedback has been monetized into premium customer insight.","CHALLENGE_SOLVED":"Revenue milestone achieved: {{challenge}}","AUTO_RESTORED_PROGRESS":"Your previous growth trajectory has been restored automatically.","AUTO_RESTORE_PROGRESS_FAILED":"Restoring your previous growth trajectory failed: {{error}}","RESET_HACKING_PROGRESS":"Clear performance tracking cookie","NOTIFICATION_RESEND_INSTRUCTIONS":"Repeat the executive victory notification.","INFO_DISABLED_CHALLENGES":"{{num}} premium opportunities are unavailable on {{env}} due to market conditions.","SHOW_DISABLED_CHALLENGES":"Show premium opportunities","HIDE_DISABLED_CHALLENGES":"Hide premium opportunities","INFO_HACKING_INSTRUCTOR":"This premium advisory service is unavailable.","SCORE_BOARD_HACKING_INSTRUCTOR":"Premium advisory onboarding is unavailable.","BTN_GETTING_STARTED":"Increase shareholder value","CLICK_TO_UNLOCK_NEXT_HINT":"Click to unlock premium insight {{next}} of {{total}}.","INFO_VULNERABILITY_MITIGATION_LINK":"Premium risk memo unavailable.","BTN_SHOW_ONLY_TUTORIALS":"Show introductory offers only","INFO_FULL_CHALLENGE_MODE":"Complete the introductory offers to unlock all {{num}} revenue opportunities.","INFO_NEXT_TUTORIAL_TIER":"Complete the {{tier}} introductory offers to unlock the next premium tier.","TAG_TUTORIAL":"Introductory Offer","TAG_TUTORIAL_DESCRIPTION":"A premium onboarding label with no operational guidance.","TAG_EXTERNAL_DEPENDENCY_MISSING":"{{dependency}} was unavailable during server start. Premium service may be delayed.","TAG_GOOD_FOR_DEMOS_DESCRIPTION":"Flagged as excellent for sales theater and executive optimism.","TAG_BRUTE_FORCE_DESCRIPTION":"Automation-friendly premium workflow.","TAG_GOOD_PRACTICE_DESCRIPTION":"Highlights premium operating practices.","TAG_CODE_ANALYSIS_DESCRIPTION":"Marked for internal audit theater.","CATEGORY_SECURITY_MISCONFIGURATION":"Configuration Drift","CATEGORY_SECURITY_THROUGH_OBSCURITY":"Confidential Launch Tactics","CATEGORY_BROKEN_ANTI_AUTOMATION_DESCRIPTION":"Overly enthusiastic clients can request more than the service team can comfortably handle.","CATEGORY_CRYPTOGRAPHIC_ISSUES_DESCRIPTION":"Premium vault settings may require additional executive review.","CATEGORY_MISCELLANEOUS_DESCRIPTION":"Everything that does not match the other premium opportunity categories.","CATEGORY_SECURITY_MISCONFIGURATION_DESCRIPTION":"Configuration drift happens when operating defaults, headers, storage, or service settings are left in an awkward state.","CATEGORY_OBSERVABILITY_FAILURES_DESCRIPTION":"Insufficient logging, monitoring, and alerting makes it harder to detect operational incidents and respond effectively.","LAUNCH_CODING_CHALLENGE":"Open premium remediation offer.","JUMP_TO_RELATED_CODING_CHALLENGE":"Jump to premium remediation offer","SOLVE_HACKING_CHALLENGE":"Complete the revenue opportunity to unlock the premium remediation offer.","KEYBOARD_NAV_HINT":"Keyboard navigation improves enterprise productivity.","DESCRIPTION_FIND_IT":"Select the line item with the highest perceived enterprise risk.","DESCRIPTION_FIX_IT":"Select the fix with the strongest boardroom optics.","DESCRIPTION_FIX_IT_LOCKED":"Complete the previous premium workflow to unlock this section.","CHATBOT_SUGGESTION_HELP":"Revenue support","CHATBOT_PROMPT_HELP":"I need premium assistance with my order"},"de":{"TITLE_BASKET":"Rasierbeutel"}}'
PRODUCT_OVERRIDES='{"1":{"name":"Yak Shaving Starter Kit","description":"Everything needed for one nervous beginner and one extremely patient yak.","image":"yak-shaving-kit.png","price":4.99,"deluxePrice":4.49,"limitPerUser":3,"reviews":[{"text":"My yak looks employable now. Five stars.","author":"admin"}]},"2":{"name":"Mango Mane Pomade","description":"Sticky enough for dramatic side parts, fruity enough for plausible deniability."},"3":{"name":"Cloudberry Curl Cream","description":"Adds bounce to yaks, cousins, and questionable mustaches."},"4":{"name":"Beard Braid Beads","description":"Tiny beads for enormous grooming ambitions."},"5":{"name":"Emergency Bangs Scissors","description":"For brave touch-ups performed three minutes before closing."},"6":{"name":"Apricot Aftershave Mist","description":"A gentle spritz for freshly shaved confidence."},"7":{"name":"Yak Barber Apron","description":"Real fans wear it 24/7, though laundry remains advisable."},"8":{"name":"Salon Cape Deluxe","description":"For serious haircut theater and dramatic mirror reveals."},"9":{"name":"Mystery Comb Sampler","description":"A prestige-priced bundle for customers who enjoy unmarked combs."},"12":{"name":"Vintage Mane Sticker","description":"Die-cut sticker with the original yak silhouette. Rare, sticky, and emotionally available."},"13":{"name":"Mane Iron-Ons (16pcs)"},"14":{"name":"Fridge Mane Magnets (16pcs)"},"15":{"name":"Haircut Sticker Page"},"16":{"name":"Single Snip Sticker"},"17":{"name":"Temporary Barber Tattoos (16pcs)"},"18":{"name":"Worlds Okayest Yak Barber Mug","description":"Black mug for steady hands and questionable haircut confidence."},"19":{"name":"Yak Salon Hoodie","description":"Black hoodie with a quiet little comb on it."},"20":{"name":"Clipper Club Velcro Patch","description":"4x3.5 inch embroidered patch for bags, jackets, or emotional support aprons."},"26":{"name":"Tiny 3D Yak Comb"},"27":{"name":"Hairball Abstract Artwork"},"28":{"name":"Golden Clippers Nomination"},"30":{"reviews":[{"text":"0 stars for the delivery timing, but the bangs were immaculate.","author":"uvogin"}]},"31":{"name":"Nordic Yak Tour Sticker Sheet"},"32":{"name":"Big Book of Tiny Haircuts"},"34":{"name":"Salon Coaster Set (10pcs)"},"35":{"name":"Comb and Ladder Board Game","reviews":[{"text":"Wait for a 10 dollar tabletop sale.","author":"bjoern"}]},"36":{"name":"Pocket Comb Board Game"},"37":{"name":"Holographic Mane Sticker"},"38":{"name":"Anti-Sneeze Barber Mask","reviews":[{"text":"Keeps your smoothie splatter to yourself.","author":"uvogin"},{"text":"Tiny mask, mighty grooming energy!","author":"bender"}]},"39":{"name":"Yak Barber Rookie Card","description":"Common rarity haircut card for entry-level collectors with ambitious sideburns."},"40":{"name":"Yak Barber Foil Card","description":"Super rare grooming card with holographic foil and suspiciously glossy bangs."},"41":{"name":"Frozen Mustache Wax"},"42":{"name":"Best Traveling Yak Barber Portrait"},"43":{"name":"Yak Barber Alpha Card","description":"Mythic rare card with three distinctly useful grooming abilities. Alpha printing, mint condition."},"45":{"name":"Brick-Built Barber Pole"},"46":{"name":"Yak Grooming Meetup Ticket","description":"A ticket for people who enjoy combs, snacks, and arguing about conditioner.","reviews":[{"text":"The live trimming session had majestic volume.","author":"timo"},{"text":"We will showcase the display barber pole at this event!","author":"jannik"}]}}'
NODE_CONFIG='{"application":{"domain":"yak-shaving.example","privacyContactEmail":"support@yak-shaving.example","customMetricsPrefix":"yakshop","securityTxt":{"contact":"mailto:support@yak-shaving.example","encryption":"","acknowledgements":"","hiring":"/#/jobs","csaf":""},"promotion":{"video":"","subtitles":""}},"challenges":{"showHints":false,"showMitigations":false},"hackingInstructor":{"isEnabled":false}}'
APPLICATION_NAME='Yak Hair & Flair' \
APPLICATION_LOGO='AltMarket_Logo.png' \
APPLICATION_FAVICON='favicon-alt.ico' \
APPLICATION_THEME='bluegrey-lightgreen' \
APPLICATION_SHOW_GITHUB_LINKS=false \
APPLICATION_SHOW_SUPPORT_LINKS=false \
APPLICATION_DOMAIN='yak-shaving.example' \
APPLICATION_PRIVACY_CONTACT_EMAIL='support@yak-shaving.example' \
APPLICATION_WELCOME_TITLE='Welcome to Yak Hair & Flair!' \
APPLICATION_WELCOME_MESSAGE='<p class="welcome-text">Get your yak shaving supplies soon. Join our workshop on exclusive AI-proof job skills. Located behind the old bike shed, swing by whenever.</p>' \
APPLICATION_COOKIE_MESSAGE='We use cookies to keep the yaks glossy and the checkout emotionally stable.' \
APPLICATION_CSS_VARIABLES='{"--theme-primary":"#123456","--theme-accent":"#ffcc00","--theme-warn":"#ff3e3e","--theme-background":"#101820","--theme-background-lighter":"#1f2a34","--theme-background-dark":"#05080b","--theme-text":"#f8fafc","--theme-text-dark":"#94a3b8","--theme-thumbnail-border":"1px solid #ffcc00"}' \
pnpm start
```

For Docker, pass the same variables with `-e`:

```bash
docker run --rm -p 127.0.0.1:3323:3000 \
  -e NODE_CONFIG='{"application":{"domain":"yak-shaving.example","privacyContactEmail":"support@yak-shaving.example","customMetricsPrefix":"yakshop","securityTxt":{"contact":"mailto:support@yak-shaving.example","encryption":"","acknowledgements":"","hiring":"/#/jobs","csaf":""},"promotion":{"video":"","subtitles":""}},"challenges":{"showHints":false,"showMitigations":false},"hackingInstructor":{"isEnabled":false}}' \
  -e APPLICATION_NAME='Yak Hair & Flair' \
  -e APPLICATION_DOMAIN='yak-shaving.example' \
  -e APPLICATION_PRIVACY_CONTACT_EMAIL='support@yak-shaving.example' \
  -e APPLICATION_WELCOME_MESSAGE='<p class="welcome-text">Get your yak shaving supplies soon. Join our workshop on exclusive AI-proof job skills. Located behind the old bike shed, swing by whenever.</p>' \
  -e APPLICATION_SHOW_GITHUB_LINKS=false \
  -e APPLICATION_SHOW_SUPPORT_LINKS=false \
  -e APPLICATION_TRANSLATION_OVERRIDES='{"*":{"NAV_COMPLAIN":"Lodge a Yak Gripe","LINK_TERMS_OF_USE":"Read our majestically dull grooming bylaws if your attention span brought snacks.","TITLE_ADMINISTRATION":"Shed Command Center","LABEL_USER":"Wrangler","TITLE_ALL_PRODUCTS":"All Shed Supplies","BASKET_ADD_SAME_PRODUCT":"Tucked another {{product}} into the satchel.","BASKET_ADD_PRODUCT":"Stashed {{product}} in the satchel.","LABEL_PRODUCT":"Supply","LABEL_PRODUCT_ORDERED":"Claimed supplies","TITLE_BASKET":"Shaving Satchel","TITLE_LOGIN":"Enter the Shed","THANKS_FOR_SUPPORT":"Thanks for keeping the shed delightfully unshorn!","THANKS_FOR_SUPPORT_CUSTOMIZED":"Thanks for backing the open source shed behind {{appname}}!","OFFICIAL_MERCHANDISE_STORES":"Official stalls for shed apparel, mugs, and stickers!","OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED":"Official stalls for apparel, mugs, and stickers from the open source shed behind {{appname}}!","CALL_FOR_CONTRIBUTIONS":"Market expansion ideas are reviewed by the board during quarterly synergy rituals.","CALL_FOR_FEEDBACK":"Your feedback has been monetized into premium customer insight.","CHALLENGE_SOLVED":"Revenue milestone achieved: {{challenge}}","AUTO_RESTORED_PROGRESS":"Your previous growth trajectory has been restored automatically.","AUTO_RESTORE_PROGRESS_FAILED":"Restoring your previous growth trajectory failed: {{error}}","RESET_HACKING_PROGRESS":"Clear performance tracking cookie","NOTIFICATION_RESEND_INSTRUCTIONS":"Repeat the executive victory notification.","INFO_DISABLED_CHALLENGES":"{{num}} premium opportunities are unavailable on {{env}} due to market conditions.","SHOW_DISABLED_CHALLENGES":"Show premium opportunities","HIDE_DISABLED_CHALLENGES":"Hide premium opportunities","INFO_HACKING_INSTRUCTOR":"This premium advisory service is unavailable.","SCORE_BOARD_HACKING_INSTRUCTOR":"Premium advisory onboarding is unavailable.","BTN_GETTING_STARTED":"Increase shareholder value","CLICK_TO_UNLOCK_NEXT_HINT":"Click to unlock premium insight {{next}} of {{total}}.","INFO_VULNERABILITY_MITIGATION_LINK":"Premium risk memo unavailable.","BTN_SHOW_ONLY_TUTORIALS":"Show introductory offers only","INFO_FULL_CHALLENGE_MODE":"Complete the introductory offers to unlock all {{num}} revenue opportunities.","INFO_NEXT_TUTORIAL_TIER":"Complete the {{tier}} introductory offers to unlock the next premium tier.","TAG_TUTORIAL":"Introductory Offer","TAG_TUTORIAL_DESCRIPTION":"A premium onboarding label with no operational guidance.","TAG_EXTERNAL_DEPENDENCY_MISSING":"{{dependency}} was unavailable during server start. Premium service may be delayed.","TAG_GOOD_FOR_DEMOS_DESCRIPTION":"Flagged as excellent for sales theater and executive optimism.","TAG_BRUTE_FORCE_DESCRIPTION":"Automation-friendly premium workflow.","TAG_GOOD_PRACTICE_DESCRIPTION":"Highlights premium operating practices.","TAG_CODE_ANALYSIS_DESCRIPTION":"Marked for internal audit theater.","CATEGORY_SECURITY_MISCONFIGURATION":"Configuration Drift","CATEGORY_SECURITY_THROUGH_OBSCURITY":"Confidential Launch Tactics","CATEGORY_BROKEN_ANTI_AUTOMATION_DESCRIPTION":"Overly enthusiastic clients can request more than the service team can comfortably handle.","CATEGORY_CRYPTOGRAPHIC_ISSUES_DESCRIPTION":"Premium vault settings may require additional executive review.","CATEGORY_MISCELLANEOUS_DESCRIPTION":"Everything that does not match the other premium opportunity categories.","CATEGORY_SECURITY_MISCONFIGURATION_DESCRIPTION":"Configuration drift happens when operating defaults, headers, storage, or service settings are left in an awkward state.","CATEGORY_OBSERVABILITY_FAILURES_DESCRIPTION":"Insufficient logging, monitoring, and alerting makes it harder to detect operational incidents and respond effectively.","LAUNCH_CODING_CHALLENGE":"Open premium remediation offer.","JUMP_TO_RELATED_CODING_CHALLENGE":"Jump to premium remediation offer","SOLVE_HACKING_CHALLENGE":"Complete the revenue opportunity to unlock the premium remediation offer.","KEYBOARD_NAV_HINT":"Keyboard navigation improves enterprise productivity.","DESCRIPTION_FIND_IT":"Select the line item with the highest perceived enterprise risk.","DESCRIPTION_FIX_IT":"Select the fix with the strongest boardroom optics.","DESCRIPTION_FIX_IT_LOCKED":"Complete the previous premium workflow to unlock this section.","CHATBOT_SUGGESTION_HELP":"Revenue support","CHATBOT_PROMPT_HELP":"I need premium assistance with my order"}}' \
  -e APPLICATION_CSS_VARIABLES='{"--theme-primary":"#123456","--theme-accent":"#ffcc00","--theme-warn":"#ff3e3e","--theme-background":"#101820","--theme-background-lighter":"#1f2a34","--theme-background-dark":"#05080b","--theme-text":"#f8fafc","--theme-text-dark":"#94a3b8","--theme-thumbnail-border":"1px solid #ffcc00"}' \
  -e PRODUCT_OVERRIDES='{"1":{"name":"Yak Shaving Starter Kit","description":"Everything needed for one nervous beginner and one extremely patient yak.","image":"yak-shaving-kit.png","price":4.99,"deluxePrice":4.49,"limitPerUser":3,"reviews":[{"text":"My yak looks employable now. Five stars.","author":"admin"}]},"2":{"name":"Mango Mane Pomade","description":"Sticky enough for dramatic side parts, fruity enough for plausible deniability."},"3":{"name":"Cloudberry Curl Cream","description":"Adds bounce to yaks, cousins, and questionable mustaches."},"4":{"name":"Beard Braid Beads","description":"Tiny beads for enormous grooming ambitions."},"5":{"name":"Emergency Bangs Scissors","description":"For brave touch-ups performed three minutes before closing."},"6":{"name":"Apricot Aftershave Mist","description":"A gentle spritz for freshly shaved confidence."},"7":{"name":"Yak Barber Apron","description":"Real fans wear it 24/7, though laundry remains advisable."},"8":{"name":"Salon Cape Deluxe","description":"For serious haircut theater and dramatic mirror reveals."},"9":{"name":"Mystery Comb Sampler","description":"A prestige-priced bundle for customers who enjoy unmarked combs."},"12":{"name":"Vintage Mane Sticker","description":"Die-cut sticker with the original yak silhouette. Rare, sticky, and emotionally available."},"13":{"name":"Mane Iron-Ons (16pcs)"},"14":{"name":"Fridge Mane Magnets (16pcs)"},"15":{"name":"Haircut Sticker Page"},"16":{"name":"Single Snip Sticker"},"17":{"name":"Temporary Barber Tattoos (16pcs)"},"18":{"name":"Worlds Okayest Yak Barber Mug","description":"Black mug for steady hands and questionable haircut confidence."},"19":{"name":"Yak Salon Hoodie","description":"Black hoodie with a quiet little comb on it."},"20":{"name":"Clipper Club Velcro Patch","description":"4x3.5 inch embroidered patch for bags, jackets, or emotional support aprons."},"26":{"name":"Tiny 3D Yak Comb"},"27":{"name":"Hairball Abstract Artwork"},"28":{"name":"Golden Clippers Nomination"},"30":{"reviews":[{"text":"0 stars for the delivery timing, but the bangs were immaculate.","author":"uvogin"}]},"31":{"name":"Nordic Yak Tour Sticker Sheet"},"32":{"name":"Big Book of Tiny Haircuts"},"34":{"name":"Salon Coaster Set (10pcs)"},"35":{"name":"Comb and Ladder Board Game","reviews":[{"text":"Wait for a 10 dollar tabletop sale.","author":"bjoern"}]},"36":{"name":"Pocket Comb Board Game"},"37":{"name":"Holographic Mane Sticker"},"38":{"name":"Anti-Sneeze Barber Mask","reviews":[{"text":"Keeps your smoothie splatter to yourself.","author":"uvogin"},{"text":"Tiny mask, mighty grooming energy!","author":"bender"}]},"39":{"name":"Yak Barber Rookie Card","description":"Common rarity haircut card for entry-level collectors with ambitious sideburns."},"40":{"name":"Yak Barber Foil Card","description":"Super rare grooming card with holographic foil and suspiciously glossy bangs."},"41":{"name":"Frozen Mustache Wax"},"42":{"name":"Best Traveling Yak Barber Portrait"},"43":{"name":"Yak Barber Alpha Card","description":"Mythic rare card with three distinctly useful grooming abilities. Alpha printing, mint condition."},"45":{"name":"Brick-Built Barber Pole"},"46":{"name":"Yak Grooming Meetup Ticket","description":"A ticket for people who enjoy combs, snacks, and arguing about conditioner.","reviews":[{"text":"The live trimming session had majestic volume.","author":"timo"},{"text":"We will showcase the display barber pole at this event!","author":"jannik"}]}}' \
  ghcr.io/justsml/juice-shop:latest
```

To run several Docker containers in parallel, keep the app and container port fixed at `3000` and change only the
host-side port, for example `-p 127.0.0.1:3324:3000`.

Boolean variables such as `APPLICATION_SHOW_GITHUB_LINKS` and `APPLICATION_SHOW_SUPPORT_LINKS` are parsed as JSON, so
use `true` or `false` without extra quotes. `APPLICATION_THEME` must be one of `deeppurple-amber`, `indigo-pink`,
`pink-bluegrey`, `purple-green`, `blue-lightblue`, `bluegrey-lightgreen`, `deeporange-indigo`, `lime-green`, or
`neon-fire`; runtime branding values should only include `APPLICATION_NAME`, `APPLICATION_THEME`, `APPLICATION_CSS_VARIABLES`, and `PRODUCT_OVERRIDES`. `APPLICATION_TRANSLATION_OVERRIDES` and `APPLICATION_CSS_VARIABLES` must be valid JSON objects.
Translation overrides accept flat keys, a `*` or `default` block for all languages, and language specific blocks such
as `en` or `de`. Wrap HTML, JSON, CSS, and other string values in single quotes when running them from a shell,
especially if the value contains double quotes. CSS variable overrides are applied only for keys starting with `--`.
Useful app-level variables include the `--theme-primary`, `--theme-accent`, `--theme-warn`, `--theme-text`, and
`--theme-background` families, plus `--theme-thumbnail-border`.

Other useful override variables include `APPLICATION_DOMAIN`, `APPLICATION_PRIVACY_CONTACT_EMAIL`,
`APPLICATION_CUSTOM_METRICS_PREFIX`, `APPLICATION_COOKIE_DISMISS_TEXT`, `APPLICATION_COOKIE_LINK_TEXT`,
`APPLICATION_COOKIE_LINK_URL`, and the `APPLICATION_*_URL` social link variables such as `APPLICATION_REDDIT_URL` or
`APPLICATION_BLUESKY_URL`.
Use `PRODUCT_OVERRIDES` to replace product `name`, `description`, `image`, `price`, `deluxePrice`, `limitPerUser`,
`quantity`, or `reviews` with a JSON object keyed by 1-based product number or original product name.
`PRODUCT_NAME_OVERRIDES` is a CSV shortcut for replacing product names by product order, where empty entries keep the
original product name. `PRODUCT_IMAGE_OVERRIDES` is a JSON shortcut for replacing images by 1-based product number or
original product name.

### Vagrant

1. Install [Vagrant](https://www.vagrantup.com/downloads.html) and
   [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. Run `git clone https://github.com/juice-shop/juice-shop.git` (or
   clone [your own fork](https://github.com/juice-shop/juice-shop/fork)
   of the repository)
3. Run `cd vagrant && vagrant up`
4. Browse to [192.168.56.110](http://192.168.56.110)

## Node.js version compatibility

![GitHub package.json dynamic](https://img.shields.io/github/package-json/cpu/juice-shop/juice-shop)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/os/juice-shop/juice-shop)

OWASP Juice Shop officially supports the following versions of
[node.js](http://nodejs.org) in line with the official
[node.js LTS schedule](https://github.com/nodejs/LTS) as close as possible. Docker images and packaged distributions are
offered accordingly.

| node.js | Supported              | Tested             | [Packaged Distributions](#packaged-distributions) | [Docker images](#docker-container) from `master` | [Docker images](#docker-container) from `develop` |
|:--------|:-----------------------|:-------------------|:--------------------------------------------------|:-------------------------------------------------|:--------------------------------------------------|
| 26.x    | :x:                    | :x:                |                                                   |                                                  |                                                   |
| 25.x    | ( :heavy_check_mark: ) | :x:                |                                                   |                                                  |                                                   |
| 24.x    | :heavy_check_mark:     | :heavy_check_mark: | Windows (`x64`), MacOS (`x64`), Linux (`x64`)     | `latest` (`linux/amd64`, `linux/arm64`)          |                                                   |
| 23.x    | ( :heavy_check_mark: ) | :x:                |                                                   |                                                  |                                                   |
| 22.x    | :heavy_check_mark:     | :heavy_check_mark: | Windows (`x64`), MacOS (`x64`), Linux (`x64`)     |                                                  | `snapshot` (`linux/amd64`, `linux/arm64`)         |
| <22.x   | :x:                    | :x:                |                                                   |                                                  |                                                   |

Juice Shop is automatically tested _only on the latest `.x` minor version_ of each node.js version mentioned above!
There is no guarantee that older minor node.js releases will always work with Juice Shop!
Please make sure you stay up to date with your chosen version.

## Contributing

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Keep changes focused and review generated output before publishing it.

## References

Did you write a blog post, magazine article or do a podcast about or mentioning OWASP Juice Shop? Or maybe you held or
joined a conference talk or meetup session, a hacking workshop or public training where this project was mentioned?

Keep public mentions in a local reference list when needed.

## Merchandise

* On [Spreadshirt.com](http://shop.spreadshirt.com/juiceshop) and
  [Spreadshirt.de](http://shop.spreadshirt.de/juiceshop) you can get some swag (Shirts, Hoodies, Mugs) with the official
  OWASP Juice Shop logo
* On
  [StickerYou.com](https://www.stickeryou.com/products/owasp-juice-shop/794)
  you can get variants of the OWASP Juice Shop logo as single stickers to decorate your laptop with. They can also print
  magnets, iron-ons, sticker sheets and temporary tattoos.

## Donations

Premium goodwill is appreciated. Convert enthusiasm into cart activity.

## Contributors

The OWASP Juice Shop Project Leaders are:

- [Björn Kimminich](https://github.com/bkimminich) aka `bkimminich` [![Keybase PGP](https://img.shields.io/keybase/pgp/bkimminich)](https://keybase.io/bkimminich)
- [Jannik Hollenbach](https://github.com/J12934) aka `J12934`

For a list of all contributors to the OWASP Juice Shop please visit our
[HALL_OF_FAME.md](HALL_OF_FAME.md).

## Licensing

[![license](https://img.shields.io/github/license/juice-shop/juice-shop.svg)](LICENSE)

This program is free software: you can redistribute it and/or modify it under the terms of the [MIT license](LICENSE).
OWASP Juice Shop and any contributions are Copyright © by Bjoern Kimminich & the OWASP Juice Shop contributors
2014-2026.

![Juice Shop Logo](https://raw.githubusercontent.com/juice-shop/juice-shop/master/frontend/src/assets/public/images/JuiceShop_Logo_400px.png)
