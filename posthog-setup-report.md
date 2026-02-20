<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. Here's a summary of every change made:

- **`instrumentation-client.ts`** (new file): Initialises PostHog on the client side using the Next.js 15.3+ `instrumentation-client` convention. Configured with an EU-region reverse proxy path (`/ingest`), the `2026-01-30` defaults, automatic exception/error tracking (`capture_exceptions: true`), and debug mode in development.
- **`next.config.ts`** (edited): Added `rewrites()` to proxy PostHog ingestion requests through `/ingest/*` → `https://eu.i.posthog.com/*` and static assets through `/ingest/static/*` → `https://eu-assets.i.posthog.com/static/*`, reducing the chance of ad-blocker interference. Also set `skipTrailingSlashRedirect: true` as required by PostHog.
- **`components/ExploreBtn.tsx`** (edited): Added a `handleClick` handler that fires `posthog.capture('explore_events_clicked')` when the hero CTA button is clicked.
- **`components/EventCards.tsx`** (edited): Converted to a client component (`"use client"`), added a `handleClick` handler that fires `posthog.capture('event_card_clicked')` with rich properties (`event_title`, `event_slug`, `event_location`, `event_date`, `event_time`) when a featured event card is clicked.
- **`components/Navbar.tsx`** (edited): Converted to a client component (`"use client"`), added `handleNavClick(label)` calls on every navigation link, firing `posthog.capture('nav_link_clicked', { label })` to track which nav item was used.
- **`.env.local`** (created/updated): `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` written via the wizard-tools MCP — values never hardcoded in source files.

---

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" hero CTA button to scroll down to the events list | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks a featured event card; includes `event_title`, `event_slug`, `event_location`, `event_date`, `event_time` properties | `components/EventCards.tsx` |
| `nav_link_clicked` | User clicks a navbar link; includes a `label` property (Home, Events, Create Event, logo) | `components/Navbar.tsx` |

---

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://eu.posthog.com/project/129295/dashboard/533228)

### Insights
- [Event Card Clicks (Daily)](https://eu.posthog.com/project/129295/insights/tQBNuB64) — daily total clicks on featured event cards
- [Explore Events CTA Clicks (Daily)](https://eu.posthog.com/project/129295/insights/kkIDj8B3) — daily total clicks on the hero CTA button
- [Navigation Link Clicks by Label](https://eu.posthog.com/project/129295/insights/8uOTxjBU) — bar chart breakdown of nav clicks by link label
- [Event Discovery Funnel](https://eu.posthog.com/project/129295/insights/kLLIFth1) — conversion funnel from "Explore Events" CTA → event card click
- [Daily Active Users per Event Type](https://eu.posthog.com/project/129295/insights/ZnI6J0d2) — unique users per day across all three tracked interaction types

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
