import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
/** @type {import('next').NextConfig} */

const nextConfig = {
  
    images: {
        domains: ['cha-xeo.github.io', 'cdn.mobygames.com'], // Add your domain here
    },
};

export default withNextIntl(nextConfig);