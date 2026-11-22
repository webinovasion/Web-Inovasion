import { siteData } from "../data/site";

export interface SchemaOptions {
  title: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
}

const DEFAULT_IMAGE = siteData.logo;

export function createSchema({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  areaServed = "Indonesia",
}: SchemaOptions) {
  const fullImage = `${siteData.url}${image}`;
  const organizationId = `${siteData.url}/#organization`;
  const businessId = `${siteData.url}/#business`;
  const websiteId = `${siteData.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteData.name,
        url: siteData.url,
        logo: `${siteData.url}${siteData.logo}`,
        image: fullImage,
        sameAs: [siteData.social.instagram, siteData.social.linkedin],
      },
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: siteData.name,
        image: fullImage,
        url: siteData.url,
        telephone: siteData.contact.phone,
        email: siteData.contact.email,
        description: siteData.defaultDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteData.contact.addressLocality,
          addressRegion: siteData.contact.addressRegion,
          addressCountry: siteData.contact.addressCountry,
        },
        areaServed: { "@type": "Place", name: areaServed },
        sameAs: [siteData.social.instagram, siteData.social.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteData.url,
        name: siteData.name,
        description: siteData.defaultDescription,
        inLanguage: "id-ID",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        primaryImageOfPage: fullImage,
      },
      {
        "@type": "Service",
        name: title,
        serviceType: "Website Development",
        provider: { "@id": businessId },
        areaServed: { "@type": "Place", name: areaServed },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Layanan ${siteData.name}`,
          itemListElement: siteData.services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.name },
          })),
        },
      },
    ],
  };
}
