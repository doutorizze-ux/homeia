import type { NextConfig } from "next";

const authApi = process.env.NODE_ENV === "production"
  ? "http://auth-service:3002/auth"
  : "http://localhost:3002/auth";

const projectApi = process.env.NODE_ENV === "production"
  ? "http://project-service:3003/projects"
  : "http://localhost:3003/projects";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${authApi}/:path*`,
      },
      {
        source: "/api/project/:path*",
        destination: `${projectApi}/:path*`,
      },
    ];
  },
};

export default nextConfig;
