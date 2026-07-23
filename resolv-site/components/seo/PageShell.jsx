import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from './JsonLd';

// Thin wrapper so every SEO route file is just: metadata + <PageShell> + sections.
export default function PageShell({ schema, children }) {
  return (
    <>
      {schema && <JsonLd data={schema} />}
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
