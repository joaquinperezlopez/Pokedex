declare module 'react-native-config' {
  export interface NativeConfig {
    AUTH_BASE_URL: string;
    AUTH_API_VERSION: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
