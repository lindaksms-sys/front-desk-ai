

## Plan: Fix video delivery for custom domain (GitHub → Cloudflare)

### Problem
The 77MB demo video exceeds Cloudflare Pages' 25MB per-file asset limit, so it's excluded from the deployment. The landing page on your custom domain still shows the old "See Demo Clinic" button because the video never deployed.

### Solution Options (pick one)

**Option A — Compress the video (recommended)**
- Use ffmpeg to compress the video to under 25MB (lower resolution/bitrate)
- Keep it in `public/videos/demo.mp4`
- Everything deploys normally

**Option B — Host video externally**
- Upload the video to a service (YouTube, Vimeo, Cloudflare Stream, or an R2 bucket)
- Update `HeroSection.tsx` to use the external URL instead of `/videos/demo.mp4`
- Remove the large file from the repo

### What I'll do (Option A)
1. Compress `public/videos/demo.mp4` to ~15-20MB using ffmpeg (720p, optimized bitrate)
2. Replace the existing file
3. Verify it still looks good

### Technical details
- Target: 720p, CRF 28-30, H.264, ~15-20MB
- No code changes needed — the `<video>` tag already points to `/videos/demo.mp4`
- After compression, the file will deploy through GitHub → Cloudflare without hitting size limits

