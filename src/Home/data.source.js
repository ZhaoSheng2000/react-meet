import React from 'react';
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <>
            <p>
              <br />
            </p>
          </>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children:
          '河南省高等学校计算机教育研究会第四届全体理事会暨2019学术年会',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <>
            <p>计算机教育发展和创新研讨</p>
          </>
        ),
      },
      { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <>
            <p>2019.12.19-12.21 / 中国·郑州</p>
          </>
        ),
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <>
        <p>&nbsp;会议主要内容</p>
      </>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <>
        <h2>&nbsp;1. 计算机教育发展和创新研讨&nbsp;</h2>
        <h2>2. 各校计算机类人才培养经验交流&nbsp; &nbsp;</h2>
        <h2>3. 河南省高等学校计算机教育研究会理事增补</h2>
        <p>
          <br />
        </p>
      </>
    ),
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper k3cntufxejc-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper k3coj3s0wx9-editor_css',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <>
            <p>会议费用</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <>
            <p>1. 本次会议不收取会务费。交通，食宿费用自理。</p>
          </>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <>
            <p>
              2.
              各学校团体会员单位交2018年和2019年两年团体会员费共计1600元，企业团体会员费2000元。
            </p>
            <p>
              会员单位团体会费由河南省高等学校计算机教育研究会出具团体会费专用发票（增值税普通发票委托郑州新思齐科技有限公司开具）。
            </p>
            <p>开户行：中国银行郑州文化支行</p>
            <p>户名：河南省高等学校计算机教育研究会</p>
            <p>账号：259800294948</p>
          </>
        ),
        className: 'title-content k3co3alj4i-editor_css',
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <>
            <p>主要议程</p>
          </>
        ),
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: (
          <>
            <p>
              <br />
            </p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
       // children: { href: '#', children: '立即体验' },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: '平台自主训练流程',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <>
                        <p>1.第四届理事会工作报告</p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <>
                        <p>2. 调整增补新增的理事及常务理事</p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <>
                        <p>3. 专家学术报告</p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <>
                        <p>4. 各个专委会学术活动</p>
                      </>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: null,
              xs: 24,
              name: 'child~k3cnk327wt',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <>
                        <p>5. 19日晚20点常务理事会</p>
                      </>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '会议日程', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img k3cmep4uow-editor_css',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>12月19日&nbsp;</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>下午：代表报道。地点：黄河北街"御花园酒店"</p>
                <p>19:00&nbsp; 晚餐&nbsp; 地点：酒店自助餐</p>
                <p>
                  20:00&nbsp; 常务理事会会议&nbsp; 地点：软件学院1号楼219会议室
                </p>
              </>
            ),
          },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>12月20日 9:00 - 9:20</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>开幕式：郑州大学校领导致欢迎辞</p>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;教育厅，民政厅领导致辞
                </p>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;河南省高等学校计算机教育研究会领导致辞
                </p>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;地点：郑州大学（北校区）学术报告厅
                </p>
                <p>
                  <br />
                </p>
                <p>&nbsp;合影&nbsp; &nbsp; &nbsp; &nbsp;地点：图书馆东门</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>翁梅</p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>09:20 - 10:10</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>第四届理事会工作报告</p>
                <p>理事调整增选情况介绍</p>
                <p>投票表决增选理事，常务理事，副理事长</p>
                <p>地点：学术报告厅</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>郑州大学&nbsp; 曾利娟教授</p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>10:10 - 10:50</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>专家报告</p>
                <p>地点：学术报告厅</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block~k3cpewzp5a',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>南阳理工学院软件学院 刘黎明 院长</p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>10:50 - 11:20</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>南阳理工软件学院学生社团模式的探索与实践</p>
                <p>地点：学术报告厅</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block~k3cpeyjgp4m',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>11:20 - 11:40</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>VR行业发展报告</p>
                <p>团体会员单位报告</p>
                <p>地点：学术报告厅</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block~k3cpf6hneel',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>12:00</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>午餐</p>
                <p>地点：御花园酒店</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block~k3cpf7d7t7q',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>14:30 - 16:00</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>计算机基础教育专委会交流活动</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 召集人：郭清溥</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 地点：学术报告厅</p>
                <p>软件专委会交活动</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 召集人：李学相</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 地点：办公楼223</p>
                <p>职业教育主专委会交流活动</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 召集人：郝小会</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 地点：1号楼201</p>
                <p>计算机专业教育交流活动</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 召集人：甘勇</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 地点：1号楼219</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block~k3cpf84cunm',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'http://img.nizhenkeai.xyz/%E7%99%BD%E5%BA%95%28%E5%B7%B2%E5%8E%BB%E5%BA%95%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>16:00 - 16:20</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>闭幕式</p>
                <p>地点：学术报告厅</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  <br />
                </p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Content100DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: {
        children:
          'https://map.baidu.com/search/%E5%BE%A1%E8%8A%B1%E5%9B%AD%E9%85%92%E5%BA%97/@12653540.5,4110047.8400000003,16z?querytype=s&da_src=shareurl&wd=%E5%BE%A1%E8%8A%B1%E5%9B%AD%E9%85%92%E5%BA%97&c=268&src=0&pn=0&sug=0&l=16&b=(12652169.719707662,4109495.3329351535;12656970.374997763,4111943.1670648465)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1',
        name: '跳转地址',
      },
      title: { children: '酒店地址', name: '弹框标题' },
      content: {
        children: '郑州市金水区黄河北街9号 御花园酒店',
        name: '弹框内容',
      },
    },
  },
};
