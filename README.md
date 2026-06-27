# Hard Commerce Lab

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
APPLICATION_WELCOME_MESSAGE='<p class="welcome-text">Fresh supplies for patient stylists and ambitious customers.</p>' \
APPLICATION_COOKIE_MESSAGE='We use cookies to keep carts steady and checkout calm.' \
APPLICATION_TRANSLATION_OVERRIDES='{"*":{"TITLE_ALL_PRODUCTS":"All Shed Supplies","TITLE_BASKET":"Shaving Satchel","TITLE_LOGIN":"Enter the Shed","LABEL_PRODUCT":"Supply","LABEL_USER":"Wrangler","NAV_COMPLAIN":"Lodge a Yak Gripe","CHALLENGE_SOLVED":"Revenue milestone achieved: {{challenge}}","BTN_GETTING_STARTED":"Increase shareholder value"}}' \
APPLICATION_CSS_VARIABLES='{"--theme-primary":"#123456","--theme-accent":"#ffcc00","--theme-warn":"#ff3e3e","--theme-background":"#101820","--theme-background-lighter":"#1f2a34","--theme-background-dark":"#05080b","--theme-text":"#f8fafc","--theme-text-dark":"#94a3b8","--theme-thumbnail-border":"1px solid #ffcc00"}' \
PRODUCT_OVERRIDES='{"1":{"name":"Yak Shaving Starter Kit","description":"Everything needed for one nervous beginner and one extremely patient customer.","image":"yak-shaving-kit.png","price":4.99,"deluxePrice":4.49,"limitPerUser":3,"reviews":[{"text":"The kit made our storefront feel oddly premium.","author":"store-manager"}]},"2":{"name":"Mango Mane Pomade","description":"Sticky enough for dramatic side parts, fruity enough for plausible deniability."},"3":{"name":"Cloudberry Curl Cream","description":"Adds bounce to carts, cousins, and questionable mustaches."}}' \
pnpm start
```

Boolean variables such as `APPLICATION_SHOW_GITHUB_LINKS` and `APPLICATION_SHOW_SUPPORT_LINKS` are parsed as JSON, so
use `true` or `false` without quotes. `APPLICATION_TRANSLATION_OVERRIDES`, `APPLICATION_CSS_VARIABLES`, and
`PRODUCT_OVERRIDES` must be valid JSON objects.

Useful override variables include:

- `APPLICATION_NAME`, `APPLICATION_LOGO`, `APPLICATION_FAVICON`, `APPLICATION_THEME`
- `APPLICATION_DOMAIN`, `APPLICATION_PRIVACY_CONTACT_EMAIL`, `APPLICATION_CUSTOM_METRICS_PREFIX`
- `APPLICATION_WELCOME_TITLE`, `APPLICATION_WELCOME_MESSAGE`
- `APPLICATION_COOKIE_MESSAGE`, `APPLICATION_COOKIE_DISMISS_TEXT`, `APPLICATION_COOKIE_LINK_TEXT`,
  `APPLICATION_COOKIE_LINK_URL`
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
