const RuiXuanApp = Vue.createApp({
  data() {
    return {
      showNav: true,
      showBackTop: false,
      mouseOver: '',
      anchorName: 'Home',
      interestCarousel: [
        {
          url: 'images/interesting/photography.jpg',
          name: 'Photography',
        },
        {
          url: 'images/interesting/volleyball.JPG',
          name: 'Volleyball',
        },
        {
          url: 'images/interesting/basketball.JPG',
          name: 'basketball',
        },
      ],
      skillsList: [
        {
          url: 'images/icon/erp.png',
          name: 'ERP',
        },
        {
          url: 'images/icon/technical-support.png',
          name: 'MIS',
        },
        {
          url: 'images/icon/python.png',
          name: 'Python',
        },
        {
          url: 'images/icon/database.png',
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
        title: 'SQL',
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
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let screenHeight = window.innerHeight;
      // 控制header/回到最上面要不要出現
      if(scrollTop > 10) {
        this.showNav = false;
        this.showBackTop = true;
      } else {
        this.showNav = true;
        this.showBackTop = false;
      }
      // 判斷錨點位置
      if (scrollTop >= 3 * screenHeight -2) {
        this.anchorName = 'Interest';
      } else if (scrollTop >= 2 * screenHeight -2) {
        this.anchorName = 'Skills';
      } else if (scrollTop >= screenHeight -2) {
        this.anchorName = 'About';
      } else {
        this.anchorName = 'Home';
      }
      window.history.pushState({}, 0, `#${this.anchorName}`);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
})
RuiXuanApp.mount('#RuiXuan');