export const metadata = {
  title: 'FE Quality Training',
  description: 'Problem-designed Next.js app',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto' }}>
        <header
          style={{
            padding: 12,
            borderBottom: '1px solid #ddd',
            position: 'sticky',
            top: 0,
            background: '#fff',
          }}
        >
          <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/slow-images">Slow Images</a>
            <a href="/bundle-bloat">Bundle Bloat</a>
            <a href="/error-demo">Error Demo</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
