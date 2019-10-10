export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d9eaf5ebfb93f4f34f9af32',
                  title: 'Sanity Studio',
                  name: 'landing-page-studio',
                  apiId: '2979dfa9-d75d-45f8-bbef-9965d29bf4d0'
                },
                {
                  buildHookId: '5d9eaf5e3fd596867544fc8d',
                  title: 'Landing pages Website',
                  name: 'landing-page-web',
                  apiId: 'fdd9a5e9-2821-49bf-9255-9dd25a3ff7d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/buddhi-r/landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-page-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
