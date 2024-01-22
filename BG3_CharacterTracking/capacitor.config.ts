import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.test1',
  appName: 'test1',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
