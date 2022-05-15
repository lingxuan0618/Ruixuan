const RuiXuanApp = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      interestCarousel: [
        {
          url: '/images/interesting/photography.jpg',
          name: 'Photography',
        },
        {
          url: '/images/interesting/Volleyball.jpg',
          name: 'Volleyball',
        },
        {
          url: '/images/interesting/basketball.jpg',
          name: 'basketball',
        },
      ],
      skillsList: [
        {
          url: '/images/icon/erp.png',
          name: 'ERP',
        },
        {
          url: '/images/icon/technical-support.png',
          name: 'MIS',
        },
        {
          url: '/images/icon/python.png',
          name: 'Python',
        },
        {
          url: '/images/icon/database.png',
          name: 'SQL',
        },
      ],
      erpContent: {
        title: '聯合資訊 ERP 學程',
        content: [
          {
            name: '每月成績前三',
          },
          {
            name: '取得結業證書',
          },
          {
            name: '獲得就業推薦機會',
          },
          {
            name: '維護 / 新增流程與功能',
          },
        ],
      },
      misContent: {
        title: '就業兼任 MIS 職位',
        content: [
          {
            name: '管理網路及資訊軟硬體設備',
          },
          {
            name: '公司預計栽培方向',
          },
          {
            name: '額外購買書籍自學相關知識',
          },
        ],
      },
      pythonContent: {
        title: 'Python',
        content: [
          {
            name: 'CoderBridge 共學營結業證書',
          },
          {
            name: 'CoderBridge 共學營優秀學員證書',
          },
          {
            name: '自學項目',
          },
        ],
      },
      sqlContent: {
        title: '聯合資訊 ERP 學程',
        content: [
          {
            name: 'ERP 功能撰寫指定使用語法',
          },
          {
            name: 'CoderBridge 共學營結業證書',
          },
          {
            name: '自學項目',
          },
        ],
      },
      footerMenu:[
        {
          href: '#Home',
          name: 'Home',
        },
        {
          href: '#About',
          name: 'About',
        },
        {
          href: '#Skills',
          name: 'Skills',
        },
        {
          href: '#Interest',
          name: 'Interest',
        },
      ],
    }
  },
  methods: {
    gotoPosition(e) {
      console.log(e);
    },
  },
})
RuiXuanApp.mount('#RuiXuan');