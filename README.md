# The Python Graph Gallery.

This GitHub repository contains the source code for the [Python Graph Gallery](https://python-graph-gallery.com), a website showcasing hundreds of charts made with Python.

[Website](https://python-graph-gallery.com) | [About](https://python-graph-gallery.com/about) | [Contribute](#contributing)

<p align="center">
  <img src="static/overview_PGG2.png" alt="Python Graph Gallery Overview">
</p>

<br>
<br>

## Contributing

All kinds of contributions are welcome: from correcting a typo to adding a new blog post!

### Set Up Development Environment

To install the website locally, follow these steps:

- Install Git, Node.js, npm, and Gatsby if you haven't already. Refer to [this tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/).
- Fork and clone the [GitHub repository](https://github.com/holtzy/The-Python-Graph-Gallery).
- Create a new Git branch.
- Run `npm install` to install dependencies.
- Run `npm run develop` to build and preview the site locally. It may take 1–2 minutes. Then visit `http://localhost:8000` in your browser.

### Improve a Blog Post

To improve a blog post such as [`https://python-graph-gallery.com/20-basic-histogram-seaborn/`](https://python-graph-gallery.com/20-basic-histogram-seaborn/):

- Open the `20-basic-histogram-seaborn.ipynb` file in your code editor.
- Make your changes directly in this Jupyter Notebook.
- Commit and push your changes, then open a pull request (PR). Tag **@holtzy** for a review.

### Create a Blog Post

To create a new blog post, duplicate an existing one and edit it as follows:

#### Create File

- Duplicate an existing `.ipynb` file in `src/notebooks/`.
- Rename the file using lowercase letters and hyphens, starting with an unused number above 600.  
  Example: `602-combine-boxplot-and-violintplot-using-seaborn.ipynb`
- Open the file to update the `slug` metadata.
  - Use VS Code’s `Open With > Text Editor` option (not Jupyter Notebook).
  - The `slug` should match the filename (without the extension), e.g., `602-combine-boxplot-and-violintplot-using-seaborn`.

#### Preview File

- Re-run `npm run develop` to rebuild the site.
- Preview your post at:  
  `http://localhost:8000/602-combine-boxplot-and-violintplot-using-seaborn`

#### Metadata

At the end of the notebook (opened as a text file), update these metadata fields:

- `title`: Appears as the main title.
- `description`: Short intro text under the title (HTML allowed).
- `family`: One of: **evolution**, **ranking**, **distribution**, **general**, **correlation**, **partOfAWhole**, **flow**
- `chartType`: Must match an ID from [this file](https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/src/util/sectionDescriptions.js)
- `slug`: Already defined above.
- `keywords`: For the HTML header.
- `seoDescription`: Plain-text description for meta tags. Think SEO!

#### Add Links to Blog Post

To link your post in the gallery:

1. **Create a Screenshot**

   - Take a screenshot of the plot (on Mac: `ctrl + cmd + 4`).
   - Ensure it's square and at least 480×480 px.
   - Move the file to `The-Python-Graph-Gallery/static/graph/`.

2. **Format Image with [ImageMagick](https://imagemagick.org/index.php)**

   - Open terminal, navigate to the `img` folder.
   - Run:  
     `./script_reformat_img.sh my-img-name.png`
   - Image name must match the post filename, e.g., `602-combine-boxplot-and-violintplot-using-seaborn.png`.
   - For multiple images:  
     `-1.png`, `-2.png`, etc.

3. **Update Section File**

   - If your post features a violin chart, update `violin-plot.js` in `src/pages/`.
   - Add:

   ```js
   <ChartImageContainer
     imgName="602-combine-boxplot-and-violintplot-using-seaborn"
     caption="Combine boxplot and violinplot with seaborn"
     linkTo="/602-combine-boxplot-and-violintplot-using-seaborn"
   />
   ```

#### Push Your Changes

Before pushing, review the [New Post Checklist](https://github.com/holtzy/The-Python-Graph-Gallery/wiki/New-post-check-list).

Once everything is ready, commit, push, and open a pull request on Github.

**Congrats! 🎉**
