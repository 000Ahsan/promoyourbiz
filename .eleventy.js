module.exports = function (eleventyConfig) {
  // Copy public assets maintaining folder structure
  eleventyConfig.addPassthroughCopy({ 'public/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'public/common': 'common' });

  // Blog collection (sorted by date, newest first)
  eleventyConfig.addCollection('blog', (collectionApi) => {
    return collectionApi.getFilteredByGlob('blog/*.md').sort((a, b) => {
      return a.date - b.date;
    });
  });

  // Add filter for current year
  eleventyConfig.addFilter('year', () => new Date().getFullYear());

  // Add filter for readable date
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    const date = new Date(dateObj);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });

  // Add filter for random array shuffle (for portfolio)
  eleventyConfig.addFilter('shuffle', (array) => {
    return array.sort(() => Math.random() - 0.5);
  });

  // Add filter for slice
  eleventyConfig.addFilter('slice', (array, start, end) => {
    return array.slice(start, end);
  });

  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      data: '_data',
      layouts: '_includes/layouts'
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
