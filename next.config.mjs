/** @type {import('next').NextConfig} */
import removeImports from 'next-remove-imports';
const nextConfig = removeImports()({});

export default nextConfig;
