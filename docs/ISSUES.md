# Intentional Issues Map

- /dashboard: client-side fetch of 50k items; no virtualization; expensive render compute; no caching
- /slow-images: unoptimized <img>; potential CLS; no sizes; no next/image
- /bundle-bloat: heavy chart.js in client bundle; no code splitting
- /error-demo: runtime error path to test boundaries & logging
- Global: no Sentry/OTEL; no performance budget in CI at start
