/** @type {import('next').NextConfig} */
const nextConfig = {
    // permitindo que imagens externa seja usada
    images:{
        remotePatterns:[
            {
                hostname: "utfs.io"
            },
        ],
    },
}

export default nextConfig;
