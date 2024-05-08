const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Completely remove any .vue rules from all oneOf blocks
      webpackConfig.module.rules = webpackConfig.module.rules.map(rule => {
        if (rule.oneOf) {
          // Filter out .vue handling from oneOf
          rule.oneOf = rule.oneOf.filter(r => !r.test || !r.test.toString().includes('vue'));
        }
        return rule;
      });

      // Add .vue file handling outside any oneOf
      webpackConfig.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-loader'
      });

      // Ensure VueLoaderPlugin is included
      const hasVueLoaderPlugin = webpackConfig.plugins.some(plugin => plugin instanceof VueLoaderPlugin);
      if (!hasVueLoaderPlugin) {
        webpackConfig.plugins.push(new VueLoaderPlugin());
      }

      return webpackConfig;
    }
  }
};
