// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

/**
 * BRS Settings
 */
const settings = {
    project: {
        name: "mmx",
        graphql_endpoint: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
        rest_endpoint: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/brs/v1/`,
    },
    acf: {
        blocks: {
            source: "/src/components/Molecules/ACFCustomBlocks/",
            parseAcfCustomBlocks: {
                destination: "/src/components/Html2React/parseAcfCustomBlocks.tsx",
            },
            typescript: {
                destination: "/src/client/acf.generated.ts",
            },
        },
        options: {
            source: "/wp/acf/options/theme-options.php",
        }
    },
    daisyui: {
        default: "mmx",
    },
    wordpress: {
        cpt: {
            source: "/wp/cpt",
        },
        menuLocations: {
            destination: "/src/client/menu.locations.generated.ts",
        },
        gutenbergBlocks: {
            source: "/src/components/Molecules/GutenbergBlocks/",
        },
        themejson: {
            source: "theme.json",
        },
        layout: {
            source: "layout/index.js",
            "css-destination": "layout/layout.generated.css",
            "tailwind-destination": "layout/tailwind.generated.js",
        },
        styles: {
            source: "/src/styles/admin/admin.css",
            destination: "/src/styles/admin/admin.generated.css",
        }

    },
    storybook: {
        documentation: {
            destination: "/docs/brs",
        },
        'test-data': {
            source: "/src/tests/data.generator.js",
            destination: "/src/tests/data.generated.ts",
        }
    },

};

module.exports = settings;
