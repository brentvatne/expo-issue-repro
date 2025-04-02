const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getSentryExpoConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  try {
    return context.resolveRequest(context, moduleName, platform);
  } catch (error) {
    if (moduleName.endsWith('.js')) {
      const tsModuleName = moduleName.replace(/\.js$/, '.ts');
      return context.resolveRequest(context, tsModuleName, platform);
    }
    throw error;
  }
};

module.exports = wrapWithReanimatedMetroConfig(config);
