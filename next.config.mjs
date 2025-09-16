/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'backend.boutique19hotel.com',
    //         }
    //     ],
    // },
};

export default withNextIntl(nextConfig);