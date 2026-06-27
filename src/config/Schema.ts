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
          "Jasa pembuatan website profesional untuk bisnis, UMKM, dan perusahaan.",

        priceRange: "Rp100.000 - Rp10.000.000",

        address: {

          "@type": "PostalAddress",

          addressLocality: "Bekasi",

          addressRegion: "Jawa Barat",

          addressCountry: "ID",

        },

        openingHours: "Mo-Sa 08:00-17:00",

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