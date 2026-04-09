
Summary

This looks like a URL/domain mismatch or caching issue, not a missing code change in this repo.

What I verified
- `src/components/landing/HeroSection.tsx` already contains the embedded `/videos/demo.mp4` player and only a `Book a Demo` button.
- `See Demo Clinic` no longer appears anywhere in `src`.
- The published Lovable URL `https://smartdesk-harmony.lovable.app` already shows the updated hero with the video.
- `https://frontdesk.creativehauz.space` is serving a different app (the demo clinic/patient portal), so landing-page changes from this project will not appear there.

Plan
1. Confirm the exact URL you are opening when you say “live landing page.”
2. If it is a custom domain, verify that the domain is connected to this landing-page project and not the separate demo clinic project.
3. If it is `smartdesk-harmony.lovable.app`, the latest version is already live, so test with a hard refresh or an incognito window to rule out stale cache.
4. Do not make more landing-page code changes yet; the current repo and the published `.lovable.app` deployment already match.

Technical details
- Verified against: `src/components/landing/HeroSection.tsx`, `src/pages/Index.tsx`, and the live HTML/screenshot for `https://smartdesk-harmony.lovable.app`.
- I also found an unrelated React warning from `ScrollReveal` refs in `Index`; worth fixing separately, but it does not explain the missing hero update.
