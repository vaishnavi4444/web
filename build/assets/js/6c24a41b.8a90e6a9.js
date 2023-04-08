"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[842],{3340:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"eshan-gsoc-2021-report","metadata":{"permalink":"/web/blog/eshan-gsoc-2021-report","editUrl":"https://github.com/PecanProject/web/edit/main/blog/2021-08-23-gsoc-blog.md","source":"@site/blog/2021-08-23-gsoc-blog.md","title":"GSoC \'21 Report- Webpage Updates","description":"Introduction","date":"2021-08-23T00:00:00.000Z","formattedDate":"August 23, 2021","tags":[{"label":"gsoc","permalink":"/web/blog/tags/gsoc"},{"label":"gsoc21","permalink":"/web/blog/tags/gsoc-21"}],"readingTime":3.035,"hasTruncateMarker":true,"authors":[{"name":"Eshan Tripathi","title":"GSoC\'21 participant @PEcAn Project","url":"https://github.com/eshantri","imageURL":"https://avatars.githubusercontent.com/u/48446729?v=4"}],"frontMatter":{"slug":"eshan-gsoc-2021-report","title":"GSoC \'21 Report- Webpage Updates","author":"Eshan Tripathi","author_title":"GSoC\'21 participant @PEcAn Project","author_url":"https://github.com/eshantri","author_image_url":"https://avatars.githubusercontent.com/u/48446729?v=4","tags":["gsoc","gsoc21"]}},"content":"## Introduction\\n\\nThe project aims at creating and deploying a user friendly, interactive and accessible website for PEcAn Project.\\nPEcAn Project\'s website consisted of html pages, bookdown and pkgdown pages being rendered separately. In this project, all separate sections have been integrated as a consistent, modern website with elegant UI with the help of [Docusaurus 2](https://docusaurus.io/), a static site generator. This project has been created as a part of [GSoC\'21](https://summerofcode.withgoogle.com/).\\n\\n\x3c!--truncate--\x3e\\n\\n## Useful Links\\n\\n- Github Repository- https://github.com/PecanProject/web\\n- Hosted Link- https://pecanproject.github.io/web/\\n- Documentation- https://github.com/PecanProject/web/blob/main/README.md\\n\\n## Preparations\\n\\nAfter my proposal was selected for the project I started interacting with the mentors and asked them about their expectation about design. I also studied the codebase of the existing website. Since I was familiar with ReactJs, I found it much better to have a static site generator for the project. I studied the official docusaurus docs and got familiar with its ecosystem.\\nUsing [figma](https://www.figma.com) I prepared wireframes for the website. After the first GSoC meeting, I got valuable suggestions from the mentors, which were used to improvise the designs and development of the working model of website began.\\n\\n## Coding Period\\n\\nTo develop the working model on the website it was required to keep in mind the best practices and modular design, so that changes could be made easily in the future. I have tried to maintain this approach. In this period following goals have been accomplished:\\n\\n- Revamped the website and converted it into a ReactJs based single page application.\\n- Added a blog for posting blogs.\\n- Integrated PEcAn\'s documentation as part of the website.\\n- Automated build process of the website with the help of GitHub actions. This helps to deploy the website automatically to GitHub pages, as soon as changes are pushed.\\n- Documented steps for PEcAn team to add and modify content.\\n\\n## Challenges\\n\\nSince the documentation is maintained as [bookdown](https://bookdown.org/) specific [Rmarkdown](https://rmarkdown.rstudio.com/docs/) format, it is difficult to parse it using docusaurus\'s native parser, which supports markdown. The bookdown doesn\'t offer a native way of converting into md, with relative directory structure to reference different files. I tried converting each Rmd file into md, one by one using RStudio\'s built-in `knit` function, but it wasn\'t feasible. The only optimal solution seemed was temporarily editing `MakeFile`, but it couldn\'t achieve desired results.\\nThis is also the exact challenge with tutorials section.\\n\\n## Next Steps\\n\\nAt present we have an iframe which helps us load the documentation inside the website, though it looks like a part of the website, it is the website which is being rendered by bookdown. It can be found on this repo-\\nhttps://github.com/PecanProject/pecan-documentation. An example of how this is achieved is shown in below codeblock-\\n\\n```javascript\\n<Layout title=\\"Develop\\" style={{ height: \\"100%\\" }}>\\n  <Foot>\\n    <body className=\\"documentation\\"></body>\\n  </Foot>\\n  <iframe\\n    src=\\"https://pecanproject.github.io/pecan-documentation/develop/\\"\\n    style={{ border: \\"none\\" }}\\n    width=\\"100%\\"\\n    height=\\"100%\\"\\n    allowFullScreen\\n    id=\\"iFrame1\\"\\n  >\\n    <p>\\n      <a href=\\"/en-US/docs/Glossary\\">\\n        Fallback link for browsers that don\'t support iframes\\n      </a>\\n    </p>\\n  </iframe>\\n</Layout>\\n```\\n\\nThe main issue is that if we had docs already natively on the repository, they would have been much faster to load and would have offered the users a much better experience. So it is essential and recommended to figure out a way for achieving this. Further priorities would be-\\n\\n- Adding the tutorials section\\n- Adding a search bar that used scraping to find matches all across website.\\n\\n## Acknowledgements\\n\\nFinally, I\'d like to say that this summer of 2021 has been the most amazing experience I\'ve ever had. I learnt a lot of technical and non technical skills. [Dlebauer](https://github.com/dlebauer) and [ImPrakher](https://github.com/im-prakher) have been awesome mentors and their feedback and suggestions were a key to accomplishing the project."}]}')}}]);