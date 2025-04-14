/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove these lines that disable error checking
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  
  // Keep this if you need it for your deployment
  //output: 'standalone',
  
  // You might want to remove or modify this experimental option
  //experimental: {
    // This might be causing issues with static optimization
    // Consider removing if not needed
    //disableOptimizedLoading: true,
  //},
};

export default nextConfig;