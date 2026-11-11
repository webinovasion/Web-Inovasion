import { siteConfig } from "./Site";

export interface SchemaOptions {
  title: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
}

const DEFAULT_IMAGE =
  "/assets/images/logo/logo_web_inovasion.png";

export function createSchema({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  areaServed = "Indonesia",
}: SchemaOptions) {
  const fullImage = `${siteConfig.url}${image}`;

  return {
    "@context": "https://schema.org",

    "@graph": [

      // Organization

      {
        "@type": "Organization",

        "@id": `${siteConfig.url}/#organization`,

        name: siteConfig.name,

        url: siteConfig.url,

        logo: fullImage,

        image: fullImage,

        sameAs: [
          siteConfig.instagram,
          siteConfig.linkedin,
        ],
      },

      // Local Business

      {
        "@type": "LocalBusiness",

        "@id": `${siteConfig.url}/#business`,

        name: siteConfig.name,

        image: fullImage,

        url: siteConfig.url,

        telephone: siteConfig.phone,

        email: siteConfig.email,

        description:
          "Pembuatan website company profile, landing page, website UMKM, dan website custom.",

        address: {

          "@type": "PostalAddress",

          streetAddress: siteConfig.address.streetAddress,

          addressLocality: siteConfig.address.addressLocality,

          addressRegion: siteConfig.address.addressRegion,

          postalCode: siteConfig.address.postalCode,

          addressCountry: siteConfig.address.addressCountry,

        },

        areaServed: {

          "@type": "Place",

          name: areaServed,

        },

        sameAs: [

          siteConfig.instagram,

          siteConfig.linkedin,

        ],

      },

      // Website

      {

        "@type":"WebSite",

        "@id":`${siteConfig.url}/#website`,

        url:siteConfig.url,

        name:siteConfig.name,

        description,

        inLanguage:"id-ID",

        publisher:{

          "@id":`${siteConfig.url}/#organization`

        }

      },

      // WebPage

      {

        "@type":"WebPage",

        "@id":`${url}#webpage`,

        url,

        name:title,

        description,

        isPartOf:{

          "@id":`${siteConfig.url}/#website`

        },

        about:{

          "@id":`${siteConfig.url}/#business`

        },

        primaryImageOfPage:fullImage

      },

      // Service

      {

        "@type":"Service",

        name:title,

        serviceType:"Website Development",

        provider:{

          "@id":`${siteConfig.url}/#business`

        },

        areaServed:{

          "@type":"Place",

          name:areaServed

        },

        hasOfferCatalog:{

          "@type":"OfferCatalog",

          name:"Layanan Web Inovasion",

          itemListElement:[

            {

              "@type":"Offer",

              itemOffered:{

                "@type":"Service",

                name:"Website Company Profile"

              }

            },

            {

              "@type":"Offer",

              itemOffered:{

                "@type":"Service",

                name:"Landing Page"

              }

            },

            {

              "@type":"Offer",

              itemOffered:{

                "@type":"Service",

                name:"Website UMKM"

              }

            },

            {

              "@type":"Offer",

              itemOffered:{

                "@type":"Service",

                name:"Website Custom"

              }

            },

            {

              "@type":"Offer",

              itemOffered:{

                "@type":"Service",

                name:"Portfolio Pribadi"

              }

            }

          ]

        }

      }

    ]

  };
}
