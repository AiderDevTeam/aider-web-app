import type { PublicRuntimeConfig } from 'nuxt/schema';

export interface Config extends PublicRuntimeConfig {
  node_env: 'development' | 'production' | 'staging' | 'local';
  publicPath: string;
  apiUrl: string;
}