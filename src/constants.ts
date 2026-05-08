/**
 * CLAM - City Lifestyle Adaptation Model
 * 城市生活适配模型 - 20题治愈版
 */

export enum Dimension {
  PACE = 'PACE',           // 生活节奏
  SOCIAL = 'SOCIAL',       // 社交密度
  GROWTH = 'GROWTH',       // 成长需求
  ENVIRONMENT = 'ENV',     // 环境偏好 (Natural <-> Urban)
  RECOVERY = 'RECOVERY',   // 情绪补给 (Relaxation <-> Stimulation)
}

export interface DimensionScore {
  [Dimension.PACE]: number;
  [Dimension.SOCIAL]: number;
  [Dimension.GROWTH]: number;
  [Dimension.ENVIRONMENT]: number;
  [Dimension.RECOVERY]: number;
}

export interface Option {
  id: string;
  text: string;
  scores: Partial<DimensionScore>;
}

export interface Question {
  id: number;
  dimension: Dimension;
  question: string;
  options: Option[];
}

export interface City {
  id: string;
  name: string;
  type: string;
  description: string;
  scores: DimensionScore;
  explanation: string[];
}

export const QUESTIONS: Question[] = [
  // --- PACE (生活节奏) ---
  {
    id: 1,
    dimension: Dimension.PACE,
    question: "当晨光洒进窗户，你通常希望此刻的唤醒音是？",
    options: [
      { id: '1a', text: "山间鸟鸣，或是远处温和的钟声", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 2 } },
      { id: '1b', text: "轻快有活力的城市广播电台", scores: { [Dimension.PACE]: 3, [Dimension.ENVIRONMENT]: 4 } },
      { id: '1c', text: "紧凑高效的闹铃，让我立刻进入状态", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 4 } },
      { id: '1d', text: "根本不需要铃声，自然醒最珍贵", scores: { [Dimension.RECOVERY]: 5, [Dimension.PACE]: 1 } },
    ]
  },
  {
    id: 2,
    dimension: Dimension.PACE,
    question: "如果今天的时间刻度慢了20%，你会如何分配多出来的时光？",
    options: [
      { id: '2a', text: "在路边长椅上观察会儿飘落的叶子", scores: { [Dimension.PACE]: 1, [Dimension.ENVIRONMENT]: 1 } },
      { id: '2b', text: "再读两篇深度长文，完善一下手头的工作", scores: { [Dimension.PACE]: 4, [Dimension.GROWTH]: 4 } },
      { id: '2c', text: "给自己准备一顿精致缓慢的午餐", scores: { [Dimension.RECOVERY]: 3, [Dimension.PACE]: 2 } },
      { id: '2d', text: "多逛一家感兴趣的独立设计小店", scores: { [Dimension.ENVIRONMENT]: 3, [Dimension.PACE]: 3 } },
    ]
  },
  {
    id: 3,
    dimension: Dimension.PACE,
    question: "在匆匆路过的通勤人群中，你的心情通常是？",
    options: [
      { id: '3a', text: "被蓬勃的城市律动所感染，感到振奋", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 3 } },
      { id: '3b', text: "习惯性戴上耳机，在音乐中寻找平衡", scores: { [Dimension.PACE]: 3, [Dimension.RECOVERY]: 2 } },
      { id: '3c', text: "感到一丝压抑，渴望瞬间移动到自然里", scores: { [Dimension.PACE]: 1, [Dimension.ENVIRONMENT]: 1 } },
      { id: '3d', text: "大脑已在处理待办，不太关注周围节奏", scores: { [Dimension.PACE]: 4, [Dimension.GROWTH]: 5 } },
    ]
  },
  {
    id: 4,
    dimension: Dimension.PACE,
    question: "对于“最后期限”，你更偏向哪种应对潜意识？",
    options: [
      { id: '4a', text: "提前很久就开始筹划，不紧不慢的节奏", scores: { [Dimension.PACE]: 2, [Dimension.RECOVERY]: 4 } },
      { id: '4b', text: "享受最后一刻脑力迸发的冲刺感", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 4 } },
      { id: '4c', text: "沉浸其中忘记时间，不太在意时限本身", scores: { [Dimension.RECOVERY]: 3, [Dimension.GROWTH]: 3 } },
      { id: '4d', text: "尽力而为，不过分压榨自我的舒适区", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 5 } },
    ]
  },
  // --- SOCIAL (社交密度) ---
  {
    id: 5,
    dimension: Dimension.SOCIAL,
    question: "如果家附近新开了一家店，你最希望它是什么？",
    options: [
      { id: '5a', text: "有烟火气的酒馆，能和大家闲聊几句", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 2 } },
      { id: '5b', text: "安宁的独立书店，允许深度独处和静谧", scores: { [Dimension.SOCIAL]: 1, [Dimension.ENVIRONMENT]: 2 } },
      { id: '5c', text: "高雅的艺廊咖啡，适合完成轻量社交", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 4 } },
      { id: '5d', text: "专业器物沙龙，认识志趣相同的小众圈子", scores: { [Dimension.SOCIAL]: 4, [Dimension.GROWTH]: 5 } },
    ]
  },
  {
    id: 6,
    dimension: Dimension.SOCIAL,
    question: "对于理想中的“深度友情”，你最向往的相处状态是？",
    options: [
      { id: '6a', text: "随叫随到，互相分享所有生活琐事", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '6b', text: "保持适当距离，在精神层面高度共鸣", scores: { [Dimension.SOCIAL]: 2, [Dimension.RECOVERY]: 5 } },
      { id: '6c', text: "互相成就，共同探讨事业与更广阔世界", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 5 } },
      { id: '6d', text: "无需寒喧的淡然感，即便很久不见也安心", scores: { [Dimension.SOCIAL]: 1, [Dimension.RECOVERY]: 4 } },
    ]
  },
  {
    id: 7,
    dimension: Dimension.SOCIAL,
    question: "进入一个新的社交场域，你更倾向于？",
    options: [
      { id: '7a', text: "主动破冰，享受建立连接带来的生命力", scores: { [Dimension.SOCIAL]: 5, [Dimension.GROWTH]: 2 } },
      { id: '7b', text: "静静观察，找到气场契合的人才交谈", scores: { [Dimension.SOCIAL]: 2, [Dimension.ENVIRONMENT]: 4 } },
      { id: '7c', text: "目的明确，寻求有价值的信息或人脉", scores: { [Dimension.GROWTH]: 5, [Dimension.SOCIAL]: 3 } },
      { id: '7d', text: "很快能融入，但也会适时抽身独处", scores: { [Dimension.SOCIAL]: 3, [Dimension.RECOVERY]: 5 } },
    ]
  },
  {
    id: 8,
    dimension: Dimension.SOCIAL,
    question: "你如何看待城市的“邻里温度”？",
    options: [
      { id: '8a', text: "渴望重现那份久违的、热络的邻里关系", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 4 } },
      { id: '8b', text: "隐私重于一切，保持友善的边界是最好的", scores: { [Dimension.SOCIAL]: 1, [Dimension.PACE]: 5 } },
      { id: '8c', text: "希望能有高素质圈层，而非琐碎熟人关系", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 4 } },
      { id: '8d', text: "随缘而遇，能偶遇聊得来的街坊是一桩美事", scores: { [Dimension.SOCIAL]: 4, [Dimension.RECOVERY]: 3 } },
    ]
  },
  // --- GROWTH (成长需求) ---
  {
    id: 9,
    dimension: Dimension.GROWTH,
    question: "你心中比较理想的成长状态是？",
    options: [
      { id: '9a', text: "持续突破认知，站在行业或时代的浪尖", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '9b', text: "内心愈发强大，从容注视万事万物的变化", scores: { [Dimension.GROWTH]: 3, [Dimension.RECOVERY]: 5 } },
      { id: '9c', text: "拥有一门极致手艺，成为纯粹的内心匠人", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 4 } },
      { id: '9d', text: "身心健康地感知生活，本身就是一种成长", scores: { [Dimension.GROWTH]: 1, [Dimension.RECOVERY]: 2 } },
    ]
  },
  {
    id: 10,
    dimension: Dimension.GROWTH,
    question: "当你在面临人生抉择时，更倾向于不去牺牲？",
    options: [
      { id: '10a', text: "长远的格局与成就感（牺牲当下的舒适）", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 4 } },
      { id: '10b', text: "内心的宁静与家庭温情（牺牲事业的极快攀升）", scores: { [Dimension.GROWTH]: 1, [Dimension.RECOVERY]: 5 } },
      { id: '10c', text: "个人偏好的审美环境（牺牲一定的物质繁华）", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 3 } },
      { id: '10d', text: "深耕个人价值的机会（牺牲面子上的社交广度）", scores: { [Dimension.SOCIAL]: 1, [Dimension.GROWTH]: 4 } },
    ]
  },
  {
    id: 11,
    dimension: Dimension.GROWTH,
    question: "如果有两个发展机会，你的潜意识倾向于？",
    options: [
      { id: '11a', text: "充满挑战的新业务，压力与收益并存", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '11b', text: "环境成熟的稳定项目，保留更多个人精力", scores: { [Dimension.GROWTH]: 1, [Dimension.PACE]: 1 } },
      { id: '11c', text: "带有人文意义的小众项目，更有精神价值", scores: { [Dimension.GROWTH]: 3, [Dimension.RECOVERY]: 4 } },
      { id: '11d', text: "能在旅行或不同环境中办公的自由弹性项目", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 4 } },
    ]
  },
  {
    id: 12,
    dimension: Dimension.GROWTH,
    question: "你如何看待当下社会的“成功”？",
    options: [
      { id: '12a', text: "拥有左右局面的能量，被很多人仰视和依靠", scores: { [Dimension.GROWTH]: 5, [Dimension.SOCIAL]: 4 } },
      { id: '12b', text: "完全掌控生活，不为什么事做违心的妥协", scores: { [Dimension.GROWTH]: 2, [Dimension.RECOVERY]: 5 } },
      { id: '12c', text: "留下了一件极具美感或思想穿透力的作品", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 5 } },
      { id: '12d', text: "能把最普通的日子过得有滋有味，生机勃勃", scores: { [Dimension.RECOVERY]: 4, [Dimension.SOCIAL]: 5 } },
    ]
  },
  // --- ENVIRONMENT (环境偏好) ---
  {
    id: 13,
    dimension: Dimension.ENVIRONMENT,
    question: "漫步在清晨的街头，最能捕捉你目光的是？",
    options: [
      { id: '13a', text: "集市热腾腾的白烟与那份久违的市井气", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '13b', text: "摩天大楼折射出的金属光芒与未来秩序感", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 4 } },
      { id: '13c', text: "波光粼粼的江边步道或大块城市绿地", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 2 } },
      { id: '13d', text: "带有历史厚度与诗意的老式街道和树影", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.PACE]: 2 } },
    ]
  },
  {
    id: 14,
    dimension: Dimension.ENVIRONMENT,
    question: "对于居住位置，你内心的“避风港”更靠近？",
    options: [
      { id: '14a', text: "推窗即是森林、湖泊或宽阔的自然留白", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 1 } },
      { id: '14b', text: "繁华商业区的云端景观，俯瞰都市的霓虹", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.PACE]: 5 } },
      { id: '14c', text: "既便利又充满设计感与艺术气息的现代社区", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 3 } },
      { id: '14d', text: "一个老而温馨的、充满生活痕迹的成熟片区", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 4 } },
    ]
  },
  {
    id: 15,
    dimension: Dimension.ENVIRONMENT,
    question: "如果街道可以由你改造，你可能会选择？",
    options: [
      { id: '15a', text: "增加更多有趣、密集的小摊位和生活节点", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '15b', text: "扩建大片无目的绿地和座椅，允许人们驻足", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 4 } },
      { id: '15c', text: "统一视觉审美，增加雕塑与现代装置艺术", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 2 } },
      { id: '15d', text: "优化智慧交通和各种高效便捷的连接设施", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.PACE]: 5 } },
    ]
  },
  {
    id: 16,
    dimension: Dimension.ENVIRONMENT,
    question: "下雨天对你而言，更像是一种？",
    options: [
      { id: '16a', text: "诗意的时间切片，让城市变得清冷而迷人", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.RECOVERY]: 5 } },
      { id: '16b', text: "对原有高效节奏的一种干扰，需要重新打理", scores: { [Dimension.PACE]: 5, [Dimension.ENVIRONMENT]: 5 } },
      { id: '16c', text: "给自己找个理由躲进暖光酒馆或咖啡屋", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '16d', text: "泥土与草木气息，提醒我正深层连接着大地", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  // --- RECOVERY (情绪补给) ---
  {
    id: 17,
    dimension: Dimension.RECOVERY,
    question: "当你感到能量透支时，你最有效的“回血”方式是？",
    options: [
      { id: '17a', text: "扎进最热闹的市场，在俗世烟火里找生命力", scores: { [Dimension.RECOVERY]: 4, [Dimension.SOCIAL]: 5 } },
      { id: '17b', text: "精疲力竭地运动一次，通过汗水释放压力", scores: { [Dimension.RECOVERY]: 5, [Dimension.PACE]: 5 } },
      { id: '17c', text: "回到自己的小小宇宙，切断所有社交信号", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
      { id: '17d', text: "前往全然陌生的自然景观，发呆一整天", scores: { [Dimension.RECOVERY]: 2, [Dimension.ENVIRONMENT]: 1 } },
    ]
  },
  {
    id: 18,
    dimension: Dimension.RECOVERY,
    question: "平日里，最能让你心底泛起一阵温柔的是？",
    options: [
      { id: '18a', text: "落日余晖洒在老屋瓦片上的那抹柔光", scores: { [Dimension.RECOVERY]: 2, [Dimension.ENVIRONMENT]: 4 } },
      { id: '18b', text: "在奋斗后终于拥有一扇属于自己的明亮窗户", scores: { [Dimension.RECOVERY]: 5, [Dimension.GROWTH]: 5 } },
      { id: '18c', text: "逻辑和理性构建出的那种简洁、纯粹的美", scores: { [Dimension.RECOVERY]: 4, [Dimension.PACE]: 5 } },
      { id: '18d', text: "万千人海中，偶遇一个懂你微妙情绪的瞬间", scores: { [Dimension.RECOVERY]: 3, [Dimension.SOCIAL]: 5 } },
    ]
  },
  {
    id: 19,
    dimension: Dimension.RECOVERY,
    question: "如果可以拥有专属的微型空间，它最理想的选址是？",
    options: [
      { id: '19a', text: "闹市里的静谧茶室，大隐隐于市的安稳", scores: { [Dimension.RECOVERY]: 3, [Dimension.SOCIAL]: 3 } },
      { id: '19b', text: "深夜的顶层露台，守望整座城市森林的呼吸", scores: { [Dimension.RECOVERY]: 5, [Dimension.ENVIRONMENT]: 5 } },
      { id: '19c', text: "深山木屋，除此之外只有风声与溪流", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
      { id: '19d', text: "私密精致的书屋，存放所有热爱与好奇心", scores: { [Dimension.RECOVERY]: 2, [Dimension.GROWTH]: 4 } },
    ]
  },
  {
    id: 20,
    dimension: Dimension.RECOVERY,
    question: "关于“未来幸福感”，你认为最核心的支柱是？",
    options: [
      { id: '20a', text: "绝对的自由，不被任何评价和束缚绑架", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
      { id: '20b', text: "极致的安全，拥有抵御任何风险的能力", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '20c', text: "深刻的爱，与温暖真实的同类共同行走", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '20d', text: "内心的定力，在喧嚣与独处中切换自如", scores: { [Dimension.RECOVERY]: 4, [Dimension.ENVIRONMENT]: 3 } },
    ]
  }
];

export const CITIES: City[] = [
  {
    id: 'chengdu',
    name: '成都',
    type: '巴适平衡倾向',
    description: '在快慢之间，寻觅一份极具温情的人间烟火。',
    scores: {
      [Dimension.PACE]: 1,
      [Dimension.SOCIAL]: 5,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 2,
    },
    explanation: [
      "模型观测到，你心底或许住着一位“生活艺术家”，对细节的感知力远胜于单纯对效率的追逐。",
      "你对“社交温度”的潜在向往，指向了成都市井里那份自然流淌的邻里善意与街头活力。",
      "在当前维度权衡下，你不刻意追求极致的攀登，而是在熟悉的烟火气中寻求身心的真实落点。"
    ]
  },
  {
    id: 'hangzhou',
    name: '杭州',
    type: '温柔生长倾向',
    description: '在湖光山色与数字律动的交界，保持优雅生长。',
    scores: {
      [Dimension.PACE]: 3,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 4,
      [Dimension.ENVIRONMENT]: 3,
      [Dimension.RECOVERY]: 3,
    },
    explanation: [
      "分析显示，你不倾向于极端的波折，而是在自然之美与城市效率中寻找一份“不疾不徐”的秩序。",
      "你对环境审美的敏锐，暗示你追求一种有尊严、有质感的进步，而不愿沦为都市森林的纯粹耗材。",
      "在当前阶段，你更在意能否在保留内心那份淡泊的同时，依然拥有触碰未来的向上通道。"
    ]
  },
  {
    id: 'shanghai',
    name: '上海',
    type: '摩登秩序倾向',
    description: '在世界级的秩序之中，刻画精致自我的极致边界。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 5,
      [Dimension.RECOVERY]: 4,
    },
    explanation: [
      "数据反馈出你对规则、美感以及高效秩序的高度认同，这往往源自你强大的自我驱动力与秩序感。",
      "你对生活品质有种近乎本质的敏感，渴望个人的审美高度能与全球都市的发展韵律保持同频。",
      "在当前模型中，竞争对你而言似乎不是外界的重压，而是一种激发你不断进行自我重构的正面能量。"
    ]
  },
  {
    id: 'beijing',
    name: '价值坐标倾向',
    type: '北京',
    description: '在宏大的叙事与时代的浪潮中，锚定自我的位置。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 4,
      [Dimension.RECOVERY]: 5,
    },
    explanation: [
      "模型推测，你更看重事物背后的宏观逻辑与长远意义，简单的一时回馈可能无法完全满足你的“志气”。",
      "你在高压环境中表现出的沉自力，暗示你更倾向于在具有历史厚度或巨大平台的场域中校准个人价值。",
      "你对“成就感”的追寻往往跨越了表象，是在更广阔的思想激荡或职场竞技中寻觅内心的坚定。"
    ]
  },
  {
    id: 'xiamen',
    name: '厦门',
    type: '感性审美倾向',
    description: '在海风的留白与文艺的慢板里，尝试温柔地老去。',
    scores: {
      [Dimension.PACE]: 2,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 1,
      [Dimension.RECOVERY]: 2,
    },
    explanation: [
      "你偏好的生活碎片呈现出明显的“情感共振”，对日光、微风及色彩的微妙变化有着极高的触受力。",
      "你在模型中表现出的社交渴求更倾向于“非功利”的真诚连接，偏爱在浪漫而松弛的氛围中展开交往。",
      "比起钢铁森林，你可能在拥有开阔视野和温润空气的环境中，更容易卸下防备，找回轻盈的灵魂。"
    ]
  },
  {
    id: 'chongqing',
    name: '重庆',
    type: '火热生命倾向',
    description: '在立体魔幻的缝隙里，探寻最炽热直接的生存能量。',
    scores: {
      [Dimension.PACE]: 4,
      [Dimension.SOCIAL]: 5,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 4,
    },
    explanation: [
      "分析显示你对“鲜活生命力”有着近乎直觉的亲近，不喜欢过度雕琢以及那些冰冷的官僚秩序感。",
      "你潜意识中映射出一种对“群体共振”的需求，重庆热诚直接的市井文化或许能在最快时间内燃起你的热情。",
      "在当前评估下，你对环境的冲击力有着极高的接纳度，甚至能从这种跌宕起伏的城市奇观中汲取力量。"
    ]
  },
  {
    id: 'dali',
    name: '大理',
    type: '灵感自由倾向',
    description: '尝试向内生长，在苍山洱海之间寻回丢失的真我。',
    scores: {
      [Dimension.PACE]: 1,
      [Dimension.SOCIAL]: 2,
      [Dimension.GROWTH]: 2,
      [Dimension.ENVIRONMENT]: 1,
      [Dimension.RECOVERY]: 1,
    },
    explanation: [
      "画像显示出你当前具有较强的“疏离”需求，处于一个需要通过极致留白来重构内在精神秩序的阶段。",
      "你对社会时钟的倦怠感在测试中有所显现，暗示了大理这类允许“慢条斯理”的地方是你绝佳的疗愈地。",
      "与其说是追求成长，当下的你或许更渴望一份“无拘无束的呼吸”，在自然的律动中找回最本真的快乐。"
    ]
  },
  {
    id: 'shenzhen',
    name: '未来进化倾向',
    type: '深圳',
    description: '无畏过去，在快速更迭的机遇中持续重新定义自己。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 5,
      [Dimension.RECOVERY]: 5,
    },
    explanation: [
      "你表现出极强的“自愈与进化”能力，是模型中的典型“先锋派”，更在意此刻的可能性而非既往包袱。",
      "你对人际互动的定义更偏向于开放性与功能性的深度结合，这种对包容度的追求与深圳的底色高度匹配。",
      "对你而言，静止的稳定或许就是一种倒退，唯有在接连不断的“更新”中，你才能感受到血液的奔流。"
    ]
  }
];
