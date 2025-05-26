If can't run start the Metro, use this command to request permission.

```sh
# Request permission access file.
chmod +x ./envscript.sh
```

# Getting Started

```sh
# Using Yarn
yarn install
```

# Build and run your app

## Android

```sh
# Environment dev
yarn android
# Environment stg
yarn android:stg
# Environment prd
yarn android:prd
```

## iOS

install dependencies, run:
```sh
yarn clean-ios
```

```sh
# Environment dev
yarn ios
# Environment stg
yarn ios:stg
# Environment prd
yarn ios:prd
```

## Modify your app

📦 React Native Modular Architecture And MVVM Architecture Folder Structure

```sh
 ┣ 📂 android/             # Android native code
 ┣ 📂 ios/                 # iOS native code
 ┣ 📂 src/                 # Main Source Code
 ┃ ┣ 📂 components/        # UI Components
 ┃ ┃ ┣ 📂 modules/         # Feature-based UI Components
 ┃ ┣ 📂 hooks/             # Common Custom Hooks
 ┃ ┣ 📂 models/            # Data Models
 ┃ ┣ 📂 navigations/       # Centralized Navigation (React Navigation)
 ┃ ┣ 📂 services/          # API calls
 ┃ ┃ ┣ 📂 config/          # Configurations & Environment Variables
 ┃ ┃ ┃ ┣ 📂 rest-api/      # All Rest-API 
 ┃ ┣ 📂 store/             # State (Redux)
 ┃ ┃ ┣ 📂 reducers/        # Redux
 ┃ ┃ ┣ 📂 sagas/           # Saga
 ┃ ┣ 📂 theme/             # Global Styles, Colors, Typography
 ┃ ┃ ┣ 📂 assets/          # Images, Fonts, etc.
 ┃ ┣ 📂 utils/             # Common Utility Functions
 ┃ ┣ 📂 viewmodels/        # Business Logic & State Management
 ┃ ┣ 📂 views/             # Views
 ┣ 📜 App.tsx              # Entry Point
 ┣ 📜 package.json         # Dependencies & Scripts
 ┣ 📜 babel.config.js      # Babel Configuration
 ┣ 📜 tsconfig.json        # TypeScript Configuration
 ┣ 📜 metro.config.js      # Metro Bundler Config
 ┗ 📜 index.js             # Entry Point for React Native
```
