import PageHero from './PageHero';
import ComparisonTable from './ComparisonTable';
import WhoFor from './WhoFor';
import TextSection from './TextSection';
import FAQSection from './FAQSection';
import CTABand from './CTABand';
import RelatedLinks from './RelatedLinks';

// Shared template for all /tresolv-vs-* and /gorgias-alternatives pages.
export default function ComparisonPage({ data }) {
  return (
    <>
      <PageHero {...data.hero} />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          {data.intro.map((p, i) => <p key={i} className="section-sub" style={{ maxWidth: 680, marginBottom: 16 }}>{p}</p>)}
          <ComparisonTable competitorName={data.table.competitorName} rows={data.table.rows} />
          <p className="disclosure-note">
            Comparison based on publicly available information as of the time of writing. Competitor
            capabilities change — verify current details on the competitor&apos;s own website before deciding.
          </p>
        </div>
      </section>
      <WhoFor left={data.whoFor.left} right={data.whoFor.right} />
      <TextSection {...data.whenBetter} />
      <FAQSection faqs={data.faqs} />
      <CTABand {...data.cta} />
      <RelatedLinks links={data.relatedLinks} />
    </>
  );
}
