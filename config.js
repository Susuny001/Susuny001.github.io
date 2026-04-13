/**
 * 个人名片 · 唯一推荐修改的文件（像填表一样改下面对象即可）
 * 说明见仓库根目录 README.md
 */
const CONFIG = {
  meta: {
    title: 'Susuny · 个人名片',
    description:
      'Susuny — 复旦大学腾飞书院工科学生个人名片：简介、技能与兴趣、科研、竞赛、实习与社会实践。',
    lang: 'zh-CN'
  },

  /** 顶栏与页脚文案 */
  site: {
    headerName: 'Susuny',
    footerName: 'Susuny',
    footerOrg: '复旦大学腾飞书院',
    footerNote: '欢迎'//'本页为 github.io 静态部署教程示例 · 左右滑动或方向键切换'
  },

  /**
   * 底部圆点导航顺序与每一「张」幻灯片
   * 不需要某一整页时，把对应项的 enabled 改为 false（不必删 HTML）
   */
  slides: [
    { id: 'home', enabled: true, navLabel: '主页', navAriaLabel: '首页' },
    { id: 'skills', enabled: true, navLabel: '技能', navAriaLabel: '技能与兴趣' },
    { id: 'research', enabled: true, navLabel: '科研经历', navAriaLabel: '科研经历' },
    { id: 'competition', enabled: true, navLabel: '竞赛获奖', navAriaLabel: '竞赛获奖' },
    { id: 'internship', enabled: true, navLabel: '实习经验', navAriaLabel: '实习经验' },
    { id: 'social', enabled: true, navLabel: '社会实践', navAriaLabel: '社会实践' }
  ],

  /** 装饰图：右下角水印；技能等卡片标题旁小图标 */
  assets: {
    watermark: 'assets/FDU.png',
    sectionIcon: 'assets/标题.svg'
  },

  profile: {
    greetingLead: '你好，我是',
    /** 首页大标题里渐变显示的名字 */
    displayName: 'Susuny',
    locationLine: '复旦大学腾飞书院',
    intro: '我只是一个大一学生呀，我什么都不知道呀',
    quote: '自强不息',
    /** 头像：可把图片放到 assets/ 下，例如 assets/avatar.jpg */
    avatar: 'assets/秘书处_线条.png',
    avatarAlt: 'Susuny',
    aboutTitle: 'About Me',
    /** 右侧「关于我」列表；有 href 时渲染为链接 */
    aboutRows: [
      { label: '年龄', value: '19' },
      { label: '爱好', value: '探索世界' },
      {
        label: 'GitHub',
        value: 'Susuny001',
        href: 'https://github.com/Susuny001'
      },
      {
        label: '联系方式',
        value: '1061152256@qq.com',
        href: 'mailto:1061152256@qq.com'
      }
    ]
  },

  links: {
    /** 右上角「GitHub 仓库」按钮 */
    repoUrl: 'https://github.com/Susuny001/Susuny001.github.io',
    repoLabel: 'GitHub 仓库',
    /** 主按钮文案与跳转的幻灯片 id（须为上面 slides 中某一 id） */
    primaryCtaLabel: '浏览经历',
    primaryCtaSlideId: 'research'
  },

  skills: {
    title: '技能',
    columns: [
      {
        sections: [
          {
            heading: 'Language',
            items: ['Chinese', 'English']
          },
          {
            heading: 'Interests',
            items: ['Photography', 'Painting', 'Go-kart']
          }
        ]
      },
      {
        sections: [
          {
            heading: 'Tech',
            items: [
              'Python',
              'C++',
              'Unity(studying...)',
              'Matlab',
              'SPSS',
              'SQL'
            ]
          }
        ]
      },
      {
        sections: [
          {
            heading: '未来可能涉及的领域',
            items: ['计算机科学', '嵌入式开发', '游戏开发','应用数学','力学']
          }
        ]
      }
    ]
  },

  /** 各经历页：标题 + 字符串列表（留空数组则整段列表不渲染） */
  timelines: {
    research: {
      title: '科研经历',
      items: [
        '什么也没有...'
      ]
    },
    competition: {
      title: '竞赛获奖经历',
      items: [
        '大学生数学竞赛(CMC)非数学类省一',
        '全国大学生数学建模竞赛 参与未获奖',
        '电赛、ACM、RM 有空一定了解'
      ]
    },
    internship: {
      title: '实习经验',
      items: [
        '暂无...'
      ]
    },
    social: {
      title: '社会实践',
      items: ['暂无...']
    }
  }
}
