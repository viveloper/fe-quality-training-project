export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>FE Quality Training Project</h1>
      <p>This app intentionally contains performance and stability issues for 12-week missions.</p>
      <ul>
        <li>
          Go to <a href="/dashboard">/dashboard</a> for large list rendering and data fetching
          issues.
        </li>
        <li>
          Go to <a href="/slow-images">/slow-images</a> for image/CLS issues.
        </li>
        <li>
          Go to <a href="/bundle-bloat">/bundle-bloat</a> for heavy dependency & code split
          missions.
        </li>
        <li>
          Go to <a href="/error-demo">/error-demo</a> to test ErrorBoundary and logging.
        </li>
      </ul>
    </main>
  );
}
