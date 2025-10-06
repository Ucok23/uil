# Roadmap: Finish Store & Blog — Ucok Isa Lubis (UIL)

This document lists the required work to complete the website with a focus on the Store and Blog features. It includes prioritized tasks, acceptance criteria, risks, and the next three concrete implementation tasks you can start with.

---

## High-level objectives
- Ship a safe, reliable digital Store (sell digital products & templates) with a clean customer flow.
- Ship a content-driven Blog with per-post SEO, easy authoring workflow, and subscription capture.
- Make both features production-ready: secure payments, downloads, SEO, analytics, backups.

---

## Prioritization principle
1. User-facing safety and trust (payments, secure downloads, legal pages).
2. Content & product authoring + listing (how you add/manage products and posts).
3. Customer experience (checkout, emails, account & license delivery).
4. SEO, metadata, and performance (sitemaps, OG images, structured data).
5. Admin tooling & reliability (orders, backups, CI/CD).

---

## Acceptance criteria (global)
- Site builds and serves with no critical lint/type errors.
- Store: Customers can view a product, checkout paid product via Stripe, receive an email receipt, and download the product. License keys (if any) are securely generated and stored.
- Blog: Posts are rendered with per-post metadata (title, description, OG image, canonical), and there's an RSS feed and sitemap.xml.
- Security: Sensitive keys are stored in environment variables and not checked into source control.
- Legal: Terms, Privacy, and Refund Policy pages are present and accessible from footer.
- Monitoring: Basic error tracking or logging is configured for production errors.

---

## Store — Detailed requirements & tasks
Priority: High → Medium

1. Product model & storage
   - Task: Decide product source (file + metadata in repo, CMS, or DB). For MVP: store product metadata in a JSON/DB and store files in a secure S3-like bucket or private server folder.
   - Acceptance: Admin can add product metadata and upload files (or we can seed with hard-coded products initially).

2. Product pages & SEO
   - Task: Create dynamic product pages with per-product `metadata` (title, description, OG image, price, tags).
   - Acceptance: Each product has an SEO-friendly page and shareable OG card.

3. Checkout & payments (Stripe recommended)
   - Task: Integrate Stripe Checkout or Payment Intent flow. Use server-side secret keys, client-side public key. Create serverless endpoint to create checkout sessions.
   - Acceptance: Customer can purchase and be redirected to success page on completion.

4. Order storage & email receipts
   - Task: Store order data to a database (Postgres, Prisma recommended) and send email receipts via an email provider (SendGrid, Postmark, or SES).
   - Acceptance: Orders are recorded and customers receive email receipts with download links.

5. Secure downloads & license delivery
   - Task: Generate signed time-limited download links (pre-signed URLs) or a server endpoint that validates order ownership before serving files.
   - Task: Optionally generate license keys per purchase and email them to the customer.
   - Acceptance: Only paying customers can download; links expire.

6. Admin & webhooks
   - Task: Configure Stripe webhooks to confirm payment and update order records. Provide a minimal admin UI to view orders and reissue downloads.
   - Acceptance: Webhook events update order status reliably.

7. Taxes, pricing, and refunds policy
   - Task: Add clear pricing, VAT/tax handling if necessary, and a refund policy page.
   - Acceptance: Refund policy is available and checkout indicates refund terms.

8. Testing & security
   - Task: Unit/integration tests around checkout and download flows. Pen-test basic endpoints.
   - Acceptance: Tests for checkout flow pass locally/CI.

Notes & choices:
- Start with Stripe Checkout (fastest to implement). Use Stripe webhooks + serverless function for fulfillment.
- Use a small DB like SQLite via Prisma for MVP or PostgreSQL for production.

---

## Blog — Detailed requirements & tasks
Priority: High → Medium

1. Content source decision
   - Options: Markdown (MDX) in repo, headless CMS (Sanity, Contentful, Ghost), or Git-backed CMS (Netlify CMS).
   - Recommendation: Start with Markdown + MDX in `/content/posts` for full control and simple deploy flow. Later migrate to headless CMS if you need an admin UI.

2. Dynamic post routes & per-post metadata
   - Task: Implement dynamic `[slug]/page.tsx` under `/app/blog` that reads frontmatter and exports `metadata` per post.
   - Acceptance: Each post page has correct metadata (title, description, OG image, published date, canonical) and is indexed.

3. RSS feed & sitemap
   - Task: Generate `rss.xml` and `sitemap.xml` at build time. Include latest posts and canonical URLs.
   - Acceptance: RSS subscribers receive new posts; sitemap is valid for search engines.

4. Authoring workflow
   - Task: Add templates for new posts and a small README on how to author posts (frontmatter fields, image sizes, tags).
   - Acceptance: New posts can be added via Git PR and build correctly.

5. Social previews & OG images
   - Task: Auto-generate OG images per-post (using server-side renderer or a template + metadata overlay) or create manual images in `public/`.
   - Acceptance: Each post has an OG image and Twitter card.

6. Newsletter & subscription capture
   - Task: Add email capture (send to Mailchimp/SendGrid or store emails in DB). Provide CTA on post pages and newsletter section.
   - Acceptance: Emails are stored and can be used for newsletter sends.

7. Comments (optional)
   - Task: Choose comment system: static (utterances/Giscus) or hosted (Disqus, Commento). Implement if needed.
   - Acceptance: Comments load and moderate as expected.

8. Testing & SEO
   - Task: Validate meta tags, structured data for articles (JSON-LD), and accessibility for article pages.
   - Acceptance: Articles pass SEO checks, have valid JSON-LD, and are crawlable.

---

## SEO, Metadata & Open Graph
- Ensure `NEXT_PUBLIC_SITE_URL` is set for metadataBase.
- Create `sitemap.xml` and `robots.txt` and submit to Google Search Console after deploy.
- Generate high-quality OG images (1200×630); we added fallback SVGs — consider PNG exports for social networks.
- Add JSON-LD for Products (Store) and Article (Blog) structured data.

---

## Minimal production checklist (quick-start launch)
1. Set environment variables: `NEXT_PUBLIC_SITE_URL`, `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `EMAIL_API_KEY`, `DATABASE_URL`.
2. Implement Stripe checkout + webhooks.
3. Securely host product files (S3 or server) and implement signed downloads.
4. Add Terms/Privacy/Refund pages and link in footer.
5. Add sitemap.xml and robots.txt.
6. Set up email provider and test sending receipts.
7. Add basic monitoring (Sentry) and enable build/test CI.
8. Smoke-test checkout + download + email flows.

---

## Next 3 concrete tasks (priority order)
1. Implement Stripe Checkout + webhook fulfillment
   - Create serverless endpoint `/api/create-checkout-session` that accepts a product id and creates a Stripe Checkout session.
   - Create `/api/webhook` to handle `checkout.session.completed` events, create order record, and email customer with signed download link.
   - Acceptance: Manual test completes: purchase in Stripe test mode, webhook handled, email with download link delivered.

2. Secure downloads & order storage
   - Add a minimal DB (Prisma + SQLite for dev) and an `orders` table that stores purchases; add an endpoint to generate signed download links that validate order ownership.
   - Acceptance: Only valid order tokens allow file downloads; link expires.

3. Implement blog content pipeline (MDX)
   - Add `/content/posts` with 2-3 example posts in MDX, implement dynamic routes to render posts, and export per-post metadata.
   - Add `rss.xml` generation at build time.
   - Acceptance: Posts render with correct metadata and appear in RSS.

Estimated effort (rough)
- Stripe integration + webhooks: 1-3 days (MVP)
- Secure downloads & DB: 1-2 days
- Blog MDX pipeline + RSS: 1-2 days
- OG images & SEO polish: 0.5-1 day
- Admin UI & tests: 1-3 days

---

## Testing & QA
- Unit tests for checkout/webhook handling.
- End-to-end test for purchase & download (Cypress or Playwright).
- Manual tests for SEO (meta tags) and accessibility (axe/lighthouse).

---

## Optional enhancements (post-MVP)
- Customer accounts and license dashboard.
- Subscriptions and recurring licensing.
- Multi-currency pricing.
- Multi-language (i18n) content.

---

## Notes and resources
- Stripe: Use Checkout for fastest path. Docs: https://stripe.com/docs/checkout
- Prisma: Good for quick DB model & migrations: https://www.prisma.io/
- MDX: Great for blog authoring and embedding components: https://mdxjs.com/


---

If you'd like, I can:
- scaffold the Stripe endpoints and the minimal Prisma schema next,
- scaffold the MDX blog pipeline with a sample post,
- or create a small admin UI prototype for orders and product management.

Pick one and I’ll start implementing it and add it to the prioritized todo list.  
