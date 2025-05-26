declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_API?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
