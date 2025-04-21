# The Python Graph Gallery

This github repository is the source code of the [Python Graph Gallery](https://python-graph-gallery.com), a website that displays hundreds of
chart made with Python.

[Website](https://python-graph-gallery.com) | [About page](https://python-graph-gallery.com/about) | [Contribute](#contributing)

<img align="center" src="static/overview_PGG2.png">

<br>

## Contributing

## 🙇‍♂️ How to contribute

### Set up development environment

Here are the steps to follow to install the website locally:

- If not already, install Git, Node.js, npm, and Gatsby. See [this page](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/) for a dedicated tutorial.
- Fork and Clone the [Github repo](https://github.com/holtzy/The-Python-Graph-Gallery).
- Create a new Git branch.
- Run `npm install` to install dependencies.
- Run `npm run develop` to build and view the site locally. It may take 1 to 2 minutes to build, and then open `http://localhost:8000` in your browser.

### Improve a blog post

Let's say you want to improve the blog post at this URL: [`https://python-graph-gallery.com/20-basic-histogram-seaborn/`](https://python-graph-gallery.com/20-basic-histogram-seaborn/)

- In your code editor, open the `20-basic-histogram-seaborn.ipynb` file.
- Since it's just a Jupyter Notebook, you can make all the changes you want in this file.
- Commit and push your changes, and then open a PR. Feel free to tag **@holtzy** on GitHub to ensure your PR gets a review.

### Create a blog post

The recommended way to create a new blog post is to duplicate an existing one and then update from it. The steps are:

- Duplicate an existing `.ipynb` file stored in `src/notebooks/`
- Rename it with the name of your blog post.
  - Use only lowercase letters and the `-` symbol.
  - Make sure it starts with a number not already taken, above 600.
  - For example: `602-combine-boxplot-and-violintplot-using-seaborn.ipynb`
- Open this file to change the `slug` metadata parameters. For this, you need to open it without Jupyter Notebooks.
  - In VS Code, use `Open With > Text Editor` instead of the default Jupyter Notebook.
  - The `slug` parameter is at the very end of the file.
  - Use the exact same name as the file name (without the extension), e.g., `602-combine-boxplot-and-violintplot-using-seaborn`
- You might need to re-run `npm run develop` to re-build the site. Once done, open:  
  `http://localhost:8000/602-combine-boxplot-and-violintplot-using-seaborn`
- Now you should be able to make modifications in the Jupyter Notebook that will automatically appear in your browser.
- Once you've written your blog post, you need to **change the metadata** of the file. Again, open the notebook as a text file:
  - `title`: the main title that will appear in big at the very top of the blog post
  - `description`: the first chunk of text under the title. You can use HTML here, including links and formatting.
  - `family`: must be one of: **evolution**, **ranking**, **distribution**, **general**, **correlation**, **partOfAWhole**, **flow**
  - `chartType`: must be one of the IDs used in [this file](https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/src/util/sectionDescriptions.js)
  - `slug`: already set previously
  - `keywords`: will be passed to the HTML page header
  - `seoDescription`: used for the description meta tag in the HTML page. Text only—think about what Google wants to know.
