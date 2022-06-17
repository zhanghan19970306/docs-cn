import { defineConfig } from 'vitepress'
import { version } from '../package.json'
import { font, github, vitestDescription, vitestName } from './meta'

export default defineConfig({
  lang: 'zh-cn',
  title: vitestName,
  description: vitestDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',

    // editLink: {
    //   repo: 'vitest-dev/docs-cn',
    //   branch: 'main',
    //   text: '建议更改此页面',
    // },

    // algolia: {
    //   appId: 'ZTF29HGJ69',
    //   apiKey: '9c3ced6fed60d2670bb36ab7e8bed8bc',
    //   indexName: 'vitest',
    //   // searchParameters: {
    //   //   facetFilters: ['tags:en']
    //   // }
    // },

    // localeLinks: {
    //   text: '简体中文',
    //   items: [
    //     { text: 'English', link: 'https://vitest.dev' },
    //   ],
    // },

    socialLinks: [{ icon: 'github', link: github }],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2021-PRESENT Anthony Fu, Matías Capeletto and Vitest contributors',
    // },

    nav: [
      { text: '指引', link: '/guide/' },
      { text: `v${version}`, link: '/config/' },
    ],

    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: '简介',
              link: '/guide/why',
            },
            {
              text: '快速开始',
              link: '/guide/',
            },
            {
              text: '特点',
              link: '/guide/features',
            },
            // {
            //   text: 'CLI',
            //   link: '/guide/cli',
            // },
            // {
            //   text: 'Test Filtering',
            //   link: '/guide/filtering',
            // },
            // {
            //   text: '覆盖范围',
            //   link: '/guide/coverage',
            // },
            // {
            //   text: '快照序列化',
            //   link: '/guide/snapshot',
            // },
            // {
            //   text: '模拟对象',
            //   link: '/guide/mocking',
            // },
            // {
            //   text: 'Vitest UI',
            //   link: '/guide/ui',
            // },
            // {
            //   text: '源码内联测试',
            //   link: '/guide/in-source',
            // },
            // {
            //   text: '测试环境',
            //   link: '/guide/test-context',
            // },
            // {
            //   text: '扩展匹配器',
            //   link: '/guide/extending-matchers',
            // },
            {
              text: 'IDE 插件',
              link: '/guide/ide',
            },
            // {
            //   text: '调试',
            //   link: '/guide/debugging',
            // },
            // {
            //   text: '与其他测试框架对比',
            //   link: '/guide/comparisons',
            // },
            // {
            //   text: '迁移指南',
            //   link: '/guide/migration',
            // },
          ],
        },
        {
          text: 'BaseType',
          items: [
            {
              text: 'isString',
              link: '/baseType/isString',
            },
            {
              text: 'isNumber',
              link: '/baseType/isNumber',
            },
            {
              text: 'isBoolean',
              link: '/baseType/isBoolean',
            },
            {
              text: 'isUndefined',
              link: '/baseType/isUndefined',
            },
            {
              text: 'isNull',
              link: '/baseType/isNull',
            },
            {
              text: 'isSymbol',
              link: '/baseType/isSymbol',
            },
            {
              text: 'isBigInt',
              link: '/baseType/isBigInt',
            },
            {
              text: 'isNaN',
              link: '/baseType/isNaN',
            },
          ],
        },
        {
          text: 'H5',
          items: [
            {
              text: 'fixIOSKeyboard',
              link: '/h5/fixIOSKeyboard',
            },
          ],
        },
        {
          text: 'Number',
          items: [
            {
              text: 'limitNumber',
              link: '/number/limitNumber',
            },
            {
              text: 'randomNumber',
              link: '/number/randomNumber',
            },
          ],
        },
        {
          text: 'String',
          items: [
            {
              text: 'createUuid',
              link: '/string/createUuid',
            },
            {
              text: 'createNanoid',
              link: '/string/createNanoid',
            },
            {
              text: 'randomStr',
              link: '/string/randomStr',
            },
          ],
        }, {
          text: 'Extra',
          items: [
            {
              text: 'noop',
              link: '/extra/noop',
            },
            {
              text: 'listToTree',
              link: '/extra/listToTree',
            },
          ],
        }, {
          text: 'browser',
          items: [
            {
              text: 'download',
              link: '/browser/download',
            },
            {
              text: 'scrollTop',
              link: '/browser/scrollTop',
            }, {
              text: 'env',
              link: '/browser/env',
            },
          ],
        },
      ],
    },
  },
})
