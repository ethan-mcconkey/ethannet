/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    sassOptions: {
        includePaths: ["./src/styles"],
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
