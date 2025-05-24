declare module 'react-native-config' {
  export interface NativeConfig {
    APP_NAME?: string;
    BASE_API?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
