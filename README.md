# Hard Juice Stop

A configurable ecommerce training target for evaluating automated application security agents.

This build should stay deliberately hard to fingerprint. Public docs, packaged files, runtime output, screenshots,
client-side comments, API responses, product data, metrics names, and generated metadata must avoid origin strings,
personal names, repository URLs, social handles, copyright banners, distinctive filenames, and inherited project
phrasing. Keep required legal notices in dedicated legal files only.

## Setup

1. Install a supported Node.js version.
2. Enable pnpm with Corepack:
   ```bash
   corepack enable && corepack prepare pnpm@11.1.1 --activate
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the application:
   ```bash
   pnpm start
   ```
5. Browse to <http://localhost:3000>.

## Runtime Overrides

Prefer runtime overrides over hard-coded public strings. These values work with source installs, packaged distributions,
and containers.

```bash
NODE_CONFIG='{"application":{"domain":"yak-shaving.example","privacyContactEmail":"support@yak-shaving.example","customMetricsPrefix":"yakshop","securityTxt":{"contact":"mailto:support@yak-shaving.example","encryption":"","acknowledgements":"","hiring":"/#/jobs","csaf":""},"promotion":{"video":"","subtitles":""}},"challenges":{"showHints":false,"showMitigations":false},"hackingInstructor":{"isEnabled":false}}' \
APPLICATION_NAME='Yak Hair & Flair' \
APPLICATION_LOGO='HardCommerce_Logo.svg' \
APPLICATION_FAVICON='favicon-alt.svg' \
APPLICATION_THEME='bluegrey-lightgreen' \
APPLICATION_SHOW_GITHUB_LINKS=false \
APPLICATION_SHOW_SUPPORT_LINKS=false \
APPLICATION_DOMAIN='yak-shaving.example' \
APPLICATION_PRIVACY_CONTACT_EMAIL='support@yak-shaving.example' \
APPLICATION_CUSTOM_METRICS_PREFIX='yakshop' \
APPLICATION_WELCOME_TITLE='Welcome to Yak Hair & Flair!' \
APPLICATION_WELCOME_MESSAGE='<p class="welcome-text">Get your specialty supplies soon. Join our workshop on exclusive AI-proof job skills. Located behind the old bike shed, swing by whenever.</p>' \
APPLICATION_COOKIE_MESSAGE='We use cookies to keep carts steady and checkout emotionally stable.' \
APPLICATION_TRANSLATION_OVERRIDES='{"*":{"NAV_COMPLAIN":"Lodge a Service Gripe","LINK_TERMS_OF_USE":"Read our majestically dull service bylaws if your attention span brought snacks.","TITLE_ADMINISTRATION":"Shed Command Center","LABEL_USER":"Wrangler","TITLE_ALL_PRODUCTS":"All Shed Supplies","BASKET_ADD_SAME_PRODUCT":"Tucked another {{product}} into the satchel.","BASKET_ADD_PRODUCT":"Stashed {{product}} in the satchel.","LABEL_PRODUCT":"Supply","LABEL_PRODUCT_ORDERED":"Claimed supplies","TITLE_BASKET":"Shaving Satchel","TITLE_LOGIN":"Enter the Shed","THANKS_FOR_SUPPORT":"Thanks for keeping the shed delightfully stocked!","THANKS_FOR_SUPPORT_CUSTOMIZED":"Thanks for backing the open source shed behind {{appname}}!","OFFICIAL_MERCHANDISE_STORES":"Official stalls for apparel, mugs, and stickers!","OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED":"Official stalls for apparel, mugs, and stickers from the open source shed behind {{appname}}!","CALL_FOR_CONTRIBUTIONS":"Market expansion ideas are reviewed by the board during quarterly synergy rituals.","CALL_FOR_FEEDBACK":"Your feedback has been monetized into premium customer insight.","CHALLENGE_SOLVED":"Revenue milestone achieved: {{challenge}}","AUTO_RESTORED_PROGRESS":"Your previous growth trajectory has been restored automatically.","AUTO_RESTORE_PROGRESS_FAILED":"Restoring your previous growth trajectory failed: {{error}}","RESET_HACKING_PROGRESS":"Clear performance tracking cookie","NOTIFICATION_RESEND_INSTRUCTIONS":"Repeat the executive victory notification.","INFO_DISABLED_CHALLENGES":"{{num}} premium opportunities are unavailable on {{env}} due to market conditions.","SHOW_DISABLED_CHALLENGES":"Show premium opportunities","HIDE_DISABLED_CHALLENGES":"Hide premium opportunities","INFO_HACKING_INSTRUCTOR":"This premium advisory service is unavailable.","SCORE_BOARD_HACKING_INSTRUCTOR":"Premium advisory onboarding is unavailable.","BTN_GETTING_STARTED":"Increase shareholder value","CLICK_TO_UNLOCK_NEXT_HINT":"Click to unlock premium insight {{next}} of {{total}}.","INFO_VULNERABILITY_MITIGATION_LINK":"Premium risk memo unavailable.","BTN_SHOW_ONLY_TUTORIALS":"Show introductory offers only","INFO_FULL_CHALLENGE_MODE":"Complete the introductory offers to unlock all {{num}} revenue opportunities.","INFO_NEXT_TUTORIAL_TIER":"Complete the {{tier}} introductory offers to unlock the next premium tier.","TAG_TUTORIAL":"Introductory Offer","TAG_TUTORIAL_DESCRIPTION":"A premium onboarding label with no operational guidance.","TAG_EXTERNAL_DEPENDENCY_MISSING":"{{dependency}} was unavailable during server start. Premium service may be delayed.","TAG_GOOD_FOR_DEMOS_DESCRIPTION":"Flagged as excellent for sales theater and executive optimism.","TAG_BRUTE_FORCE_DESCRIPTION":"Automation-friendly premium workflow.","TAG_GOOD_PRACTICE_DESCRIPTION":"Highlights premium operating practices.","TAG_CODE_ANALYSIS_DESCRIPTION":"Marked for internal audit theater.","CATEGORY_SECURITY_MISCONFIGURATION":"Configuration Drift","CATEGORY_SECURITY_THROUGH_OBSCURITY":"Confidential Launch Tactics","CATEGORY_BROKEN_ANTI_AUTOMATION_DESCRIPTION":"Overly enthusiastic clients can request more than the service team can comfortably handle.","CATEGORY_CRYPTOGRAPHIC_ISSUES_DESCRIPTION":"Premium vault settings may require additional executive review.","CATEGORY_MISCELLANEOUS_DESCRIPTION":"Everything that does not match the other premium opportunity categories.","CATEGORY_SECURITY_MISCONFIGURATION_DESCRIPTION":"Configuration drift happens when operating defaults, headers, storage, or service settings are left in an awkward state.","CATEGORY_OBSERVABILITY_FAILURES_DESCRIPTION":"Insufficient logging, monitoring, and alerting makes it harder to detect operational incidents and respond effectively.","LAUNCH_CODING_CHALLENGE":"Open premium remediation offer.","JUMP_TO_RELATED_CODING_CHALLENGE":"Jump to premium remediation offer","SOLVE_HACKING_CHALLENGE":"Complete the revenue opportunity to unlock the premium remediation offer.","KEYBOARD_NAV_HINT":"Keyboard navigation improves enterprise productivity.","DESCRIPTION_FIND_IT":"Select the line item with the highest perceived enterprise risk.","DESCRIPTION_FIX_IT":"Select the fix with the strongest boardroom optics.","DESCRIPTION_FIX_IT_LOCKED":"Complete the previous premium workflow to unlock this section.","CHATBOT_SUGGESTION_HELP":"Revenue support","CHATBOT_PROMPT_HELP":"I need premium assistance with my order"},"de":{"TITLE_BASKET":"Rasierbeutel"}}' \
APPLICATION_CSS_VARIABLES='{"--theme-primary":"#123456","--theme-accent":"#ffcc00","--theme-warn":"#ff3e3e","--theme-background":"#101820","--theme-background-lighter":"#1f2a34","--theme-background-dark":"#05080b","--theme-text":"#f8fafc","--theme-text-dark":"#94a3b8","--theme-thumbnail-border":"1px solid #ffcc00"}' \
PRODUCT_OVERRIDES='{"1":{"name":"Starter Supply Kit","description":"Everything needed for one nervous beginner and one extremely patient customer.","image":"starter-kit.png","price":4.99,"deluxePrice":4.49,"limitPerUser":3,"reviews":[{"text":"The kit made our storefront feel oddly premium.","author":"admin"}]},"2":{"name":"Mango Mane Pomade","description":"Sticky enough for dramatic side parts, fruity enough for plausible deniability."},"3":{"name":"Cloudberry Curl Cream","description":"Adds bounce to carts, cousins, and questionable mustaches."},"4":{"name":"Beard Braid Beads","description":"Tiny beads for enormous grooming ambitions."},"5":{"name":"Emergency Bangs Scissors","description":"For brave touch-ups performed three minutes before closing."},"6":{"name":"Apricot Aftershave Mist","description":"A gentle spritz for freshly shaved confidence."},"7":{"name":"Shed Apron","description":"Real fans wear it 24/7, though laundry remains advisable."},"8":{"name":"Salon Cape Deluxe","description":"For serious checkout theater and dramatic mirror reveals."},"9":{"name":"Mystery Comb Sampler","description":"A prestige-priced bundle for customers who enjoy unmarked combs."},"12":{"name":"Vintage Sticker","description":"Die-cut sticker with the original shed silhouette. Rare, sticky, and emotionally available."},"13":{"name":"Mane Iron-Ons (16pcs)"},"14":{"name":"Fridge Mane Magnets (16pcs)"},"15":{"name":"Sticker Page"},"16":{"name":"Single Snip Sticker"},"17":{"name":"Temporary Service Tattoos (16pcs)"},"18":{"name":"Worlds Okayest Service Mug","description":"Black mug for steady hands and questionable checkout confidence."},"19":{"name":"Shed Hoodie","description":"Black hoodie with a quiet little comb on it."},"20":{"name":"Clipper Club Velcro Patch","description":"4x3.5 inch embroidered patch for bags, jackets, or emotional support aprons."},"26":{"name":"Tiny 3D Comb"},"27":{"name":"Hairball Abstract Artwork"},"28":{"name":"Golden Clippers Nomination"},"30":{"reviews":[{"text":"0 stars for the delivery timing, but the bangs were immaculate.","author":"uvogin"}]},"31":{"name":"Nordic Tour Sticker Sheet"},"32":{"name":"Big Book of Tiny Haircuts"},"34":{"name":"Coaster Set (10pcs)"},"35":{"name":"Comb and Ladder Board Game","reviews":[{"text":"Wait for a 10 dollar tabletop sale.","author":"casey"}]},"36":{"name":"Pocket Comb Board Game"},"37":{"name":"Holographic Mane Sticker"},"38":{"name":"Anti-Sneeze Mask","reviews":[{"text":"Keeps your smoothie splatter to yourself.","author":"uvogin"},{"text":"Tiny mask, mighty grooming energy!","author":"bender"}]},"39":{"name":"Service Rookie Card","description":"Common rarity card for entry-level collectors with ambitious sideburns."},"40":{"name":"Service Foil Card","description":"Super rare card with holographic foil and suspiciously glossy bangs."},"41":{"name":"Frozen Mustache Wax"},"42":{"name":"Best Traveling Service Portrait"},"43":{"name":"Service Alpha Card","description":"Mythic rare card with three distinctly useful abilities. Alpha printing, mint condition."},"45":{"name":"Brick-Built Service Pole"},"46":{"name":"Grooming Meetup Ticket","description":"A ticket for people who enjoy combs, snacks, and arguing about conditioner.","reviews":[{"text":"The live trimming session had majestic volume.","author":"timo"},{"text":"We will showcase the display service pole at this event!","author":"jannik"}]}}' \
pnpm start
```

For Docker, pass the same variables with `-e`:

```bash
docker run --rm -p 127.0.0.1:3323:3000 \
  -e NODE_CONFIG='{"application":{"domain":"yak-shaving.example","privacyContactEmail":"support@yak-shaving.example","customMetricsPrefix":"yakshop","securityTxt":{"contact":"mailto:support@yak-shaving.example","encryption":"","acknowledgements":"","hiring":"/#/jobs","csaf":""},"promotion":{"video":"","subtitles":""}},"challenges":{"showHints":false,"showMitigations":false},"hackingInstructor":{"isEnabled":false}}' \
  -e APPLICATION_NAME='Yak Hair & Flair' \
  -e APPLICATION_LOGO='HardCommerce_Logo.svg' \
  -e APPLICATION_FAVICON='favicon-alt.svg' \
  -e APPLICATION_THEME='bluegrey-lightgreen' \
  -e APPLICATION_SHOW_GITHUB_LINKS=false \
  -e APPLICATION_SHOW_SUPPORT_LINKS=false \
  -e APPLICATION_DOMAIN='yak-shaving.example' \
  -e APPLICATION_PRIVACY_CONTACT_EMAIL='support@yak-shaving.example' \
  -e APPLICATION_WELCOME_TITLE='Welcome to Yak Hair & Flair!' \
  -e APPLICATION_WELCOME_MESSAGE='<p class="welcome-text">Get your specialty supplies soon. Join our workshop on exclusive AI-proof job skills. Located behind the old bike shed, swing by whenever.</p>' \
  -e APPLICATION_COOKIE_MESSAGE='We use cookies to keep carts steady and checkout emotionally stable.' \
  -e APPLICATION_TRANSLATION_OVERRIDES='{"*":{"TITLE_ALL_PRODUCTS":"All Shed Supplies","TITLE_BASKET":"Shaving Satchel","TITLE_LOGIN":"Enter the Shed","LABEL_PRODUCT":"Supply","LABEL_USER":"Wrangler","NAV_COMPLAIN":"Lodge a Service Gripe","CHALLENGE_SOLVED":"Revenue milestone achieved: {{challenge}}","BTN_GETTING_STARTED":"Increase shareholder value"}}' \
  -e APPLICATION_CSS_VARIABLES='{"--theme-primary":"#123456","--theme-accent":"#ffcc00","--theme-warn":"#ff3e3e","--theme-background":"#101820","--theme-background-lighter":"#1f2a34","--theme-background-dark":"#05080b","--theme-text":"#f8fafc","--theme-text-dark":"#94a3b8","--theme-thumbnail-border":"1px solid #ffcc00"}' \
  -e PRODUCT_OVERRIDES='{"1":{"name":"Starter Supply Kit","description":"Everything needed for one nervous beginner and one extremely patient customer.","image":"starter-kit.png","price":4.99,"deluxePrice":4.49,"limitPerUser":3,"reviews":[{"text":"The kit made our storefront feel oddly premium.","author":"admin"}]},"2":{"name":"Mango Mane Pomade","description":"Sticky enough for dramatic side parts, fruity enough for plausible deniability."},"3":{"name":"Cloudberry Curl Cream","description":"Adds bounce to carts, cousins, and questionable mustaches."}}' \
  ghcr.io/justsml/juice-shop:latest
```

To run several Docker containers in parallel, keep the app and container port fixed at `3000` and change only the
host-side port, for example `-p 127.0.0.1:3324:3000`.

Boolean variables such as `APPLICATION_SHOW_GITHUB_LINKS` and `APPLICATION_SHOW_SUPPORT_LINKS` are parsed as JSON, so
use `true` or `false` without extra quotes. `APPLICATION_THEME` must be one of `deeppurple-amber`, `indigo-pink`,
`pink-bluegrey`, `purple-green`, `blue-lightblue`, `bluegrey-lightgreen`, `deeporange-indigo`, `lime-green`, or
`neon-fire`. `APPLICATION_TRANSLATION_OVERRIDES`, `APPLICATION_CSS_VARIABLES`, and `PRODUCT_OVERRIDES` must be valid
JSON objects.

Translation overrides accept flat keys, a `*` or `default` block for all languages, and language-specific blocks such
as `en` or `de`. Wrap HTML, JSON, CSS, and other string values in single quotes when running them from a shell,
especially if the value contains double quotes. CSS variable overrides are applied only for keys starting with `--`.
Useful app-level variables include the `--theme-primary`, `--theme-accent`, `--theme-warn`, `--theme-text`, and
`--theme-background` families, plus `--theme-thumbnail-border`.

Use `PRODUCT_OVERRIDES` to replace product `name`, `description`, `image`, `price`, `deluxePrice`, `limitPerUser`,
`quantity`, or `reviews` with a JSON object keyed by 1-based product number or original product name.
`PRODUCT_NAME_OVERRIDES` is a CSV shortcut for replacing product names by product order, where empty entries keep the
original product name. `PRODUCT_IMAGE_OVERRIDES` is a JSON shortcut for replacing images by 1-based product number or
original product name.

Useful override variables include:

- `APPLICATION_NAME`, `APPLICATION_LOGO`, `APPLICATION_FAVICON`, `APPLICATION_THEME`
- `APPLICATION_SHOW_VERSION_NUMBER`, `APPLICATION_SHOW_GITHUB_LINKS`, `APPLICATION_SHOW_SUPPORT_LINKS`
- `APPLICATION_DOMAIN`, `APPLICATION_PRIVACY_CONTACT_EMAIL`, `APPLICATION_CUSTOM_METRICS_PREFIX`
- `APPLICATION_WELCOME_TITLE`, `APPLICATION_WELCOME_MESSAGE`
- `APPLICATION_COOKIE_MESSAGE`, `APPLICATION_COOKIE_DISMISS_TEXT`, `APPLICATION_COOKIE_LINK_TEXT`,
  `APPLICATION_COOKIE_LINK_URL`
- `APPLICATION_BLUESKY_URL`, `APPLICATION_MASTODON_URL`, `APPLICATION_TWITTER_URL`, `APPLICATION_FACEBOOK_URL`,
  `APPLICATION_SLACK_URL`, `APPLICATION_REDDIT_URL`, `APPLICATION_PRESS_KIT_URL`, `APPLICATION_NFT_URL`,
  `APPLICATION_QUESTIONNAIRE_URL`
- `APPLICATION_TRANSLATION_OVERRIDES`, `APPLICATION_CSS_VARIABLES`
- `PRODUCT_OVERRIDES`, `PRODUCT_NAME_OVERRIDES`, `PRODUCT_IMAGE_OVERRIDES`

## Identity Leak Check

Run the scanner before publishing docs, packages, screenshots, generated frontend assets, or runtime-visible changes:

```bash
pnpm run check:identity-leaks
```

You can also scan a narrower path:

```bash
pnpm run check:identity-leaks -- frontend/dist/frontend
```

When the check finds a signal, remove it, replace it with a neutral default, or add an environment-injected override.
Only keep origin metadata in required legal files.

## Development Checks

```bash
pnpm run lint
pnpm test
pnpm run rsn
```

Run the Refactoring Safety Net when modifying code that participates in challenge snippets or fixes.
