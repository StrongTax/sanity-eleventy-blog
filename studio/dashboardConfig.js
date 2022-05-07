export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6275da9c762cc11d6644ff9c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-c9s46ths',
                  apiId: '4b0fe5f1-284c-41f2-9f59-f6f164fe749b'
                },
                {
                  buildHookId: '6275da9da368301d55637eb7',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-cw4shwxq',
                  apiId: '7c1d315d-b0bf-4e75-86d2-d23ef8b78488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StrongTax/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-cw4shwxq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
