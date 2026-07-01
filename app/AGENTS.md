The most important instruction of this project is: This application uses Supabase as the primary backend, database, and authentication provider.

Architecture Requirements:

* Use Supabase Auth for signup, login, session management, and protected routes.
* Use the authenticated Supabase user UUID as the primary identifier throughout the application.
* Do not create a separate custom auth system.
* All subscription, plan, usage, and account data must come from Supabase tables.
* Never hardcode pricing plans, usage limits, subscription states, or feature access in frontend code.
* Read plans dynamically from the public.plans table.
* Usage enforcement must happen server-side using Supabase RPC/functions.
* Frontend should only display usage states returned by backend responses.
* Assume Row Level Security (RLS) is enabled on Supabase tables.
* Frontend queries must operate correctly under authenticated user permissions.
* Prepare architecture for future Paddle billing integration.
* Paddle checkout metadata/customData must support:
  * user_id
  * plan_id
* Do not implement fake subscriptions, mock billing systems, or local-only payment logic.
* Structure code to support future webhook-driven subscription updates.
* Keep authentication, billing, and usage logic modular and production-ready.
* Prefer scalable folder structure and reusable components.

Database Row Level Security (RLS) Requirements:

* Use minimal, production-safe Row Level Security (RLS) policies aligned with Supabase Auth UUID ownership.
* users table: users can only read/update their own row
* usage table: users can only read their own usage rows
* plans table: publicly readable
* do not create overly permissive policies
* do not disable RLS
* server-side RPC/functions and future webhook service-role flows must remain compatible

Automation & Integration Requirements:

* External automation systems (n8n, webhooks, AI agents, cron jobs, background workers, and server-side integrations) must be supported securely.
* Never rely solely on frontend-authenticated requests for automation execution.
* Use Supabase service-role/server-side flows for trusted backend automation tasks.
* RLS policies must not block legitimate server-side automation operations.
* User-facing queries must remain protected by RLS ownership checks.
* Webhook endpoints and automation handlers should validate signatures/tokens before executing actions.
* Keep automation execution architecture modular and webhook-compatible.
* Support future integrations with n8n, AI voice agents, email systems, CRM systems, and third-party APIs.

Architecture Rules:

* Prioritize scalable, production-safe architecture over temporary/demo implementations.
* Avoid mock data, fake APIs, placeholder billing systems, and frontend-only state persistence unless explicitly requested.
* Keep backend business logic centralized and reusable.
* Separate presentation logic from business logic.
* Never expose service-role keys, secrets, webhook secrets, or private environment variables to the frontend.
* Prefer server-side validation for billing, subscriptions, usage enforcement, permissions, and automation execution.
* Design database interactions to remain compatible with:
  * Supabase Edge Functions
  * n8n workflows
  * Paddle webhooks
  * AI voice systems
  * external APIs
  * background jobs
  * scheduled tasks
* Avoid tightly coupling features to a single frontend framework implementation.
* Build reusable APIs/functions instead of duplicating logic across pages.
* All authenticated operations should assume RLS is enabled.
* Optimize for maintainability, modularity, observability, and future scale.
* Keep dashboard architecture extensible for future:
  * affiliate systems
  * admin roles
  * team accounts
  * API keys
  * usage analytics
  * subscription upgrades
  * feature flags
  * white-label systems
* Use environment variables for all secrets and external service credentials.
* Avoid frontend trust for security-sensitive actions.
* Prefer idempotent webhook handling to avoid duplicate billing or automation events.
* Structure integrations to tolerate retries, webhook delays, and partial failures gracefully.
