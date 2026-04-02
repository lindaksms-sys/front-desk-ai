

## Plan: Update "Watch 60-Second Demo" button and add demo banner

### Changes

**1. Update Hero button** (`src/components/landing/HeroSection.tsx`)
- Change button text from "Watch 60-Second Demo" to "See Demo Clinic"
- Wrap it in an `<a>` tag linking to `https://frontdesk.creativehauz.space/dashboard` with `target="_blank"` and `rel="noopener noreferrer"`

**2. Add demo banner to the dashboard** — This requires understanding the dashboard setup. Since the dashboard lives at `frontdesk.creativehauz.space/dashboard` (an external site), the banner would need to be added there, not in this project.

**Clarification needed**: The dashboard at `https://frontdesk.creativehauz.space/dashboard` appears to be an external URL, not part of this landing page project. The demo banner can only be added if the dashboard code lives in this same codebase. Let me check if there's a dashboard route in this project.

Looking at `App.tsx`, this project only has `/` and a catch-all `*` route — no `/dashboard`. The memory context mentions a clinic dashboard feature, but the link points to a different domain (`frontdesk.creativehauz.space`).

### What will be done in this project

1. **HeroSection.tsx**: Replace the "Watch 60-Second Demo" button with "See Demo Clinic", linked to `https://frontdesk.creativehauz.space/dashboard` opening in a new tab.

### What cannot be done here

2. **Demo banner**: The dashboard lives at `frontdesk.creativehauz.space`, which is a separate project/deployment. The banner ("Demo environment – sample data only. Do not enter real patient information.") would need to be added in that project's codebase.

