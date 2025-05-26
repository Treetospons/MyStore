declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_API?: string;
    ENCRYPTION_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
