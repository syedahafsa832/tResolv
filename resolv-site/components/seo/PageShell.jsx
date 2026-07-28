import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from './JsonLd';
import Breadcrumbs from './Breadcrumbs';

// Thin wrapper so every SEO route file is just: metadata + <PageShell> + sections.
export default function PageShell({ schema, breadcrumb, children }) {
  return (
    <>
      {schema && <JsonLd data={schema} />}
      <Nav />
      <main>
        {breadcrumb && <Breadcrumbs items={breadcrumb} />}
        {children}
      </main>
      <Footer />
    </>
  );
}
