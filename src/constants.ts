/**
 * CLAM - City Lifestyle Adaptation Model
 * 城市生活适配模型 - 20题科学版
 */

export enum Dimension {
  PACE = 'PACE',           // 生活节奏 (快-慢)
  SOCIAL = 'SOCIAL',       // 社交密度 (高-低)
  GROWTH = 'GROWTH',       // 成长需求 (高-低)
  ENVIRONMENT = 'ENV',     // 环境偏好 (都市-自然)
  RECOVERY = 'RECOVERY',   // 情绪补给 (刺激-疗愈)
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
  // --- 生活节奏 (1-4) ---
  {
    id: 1,
    dimension: Dimension.PACE,
    question: "当你想象理想生活时，最先浮现的是？",
    options: [
      { id: '1a', text: "一种不被催促、能慢慢过日子的节奏", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 2 } },
      { id: '1b', text: "一个干净、有秩序、有审美的生活环境", scores: { [Dimension.PACE]: 3, [Dimension.ENVIRONMENT]: 4 } },
      { id: '1c', text: "一个机会密集、能持续成长的职业平台", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 5 } },
      { id: '1d', text: "一个开阔自由、可以重新呼吸的空间", scores: { [Dimension.PACE]: 2, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 2,
    dimension: Dimension.PACE,
    question: "你理想中的早晨，更接近于哪种光景？",
    options: [
      { id: '2a', text: "下楼买份温热的早饭，慢慢开启普通的一天", scores: { [Dimension.PACE]: 1, [Dimension.SOCIAL]: 4 } },
      { id: '2b', text: "伴着晨光喝杯咖啡，理清今日的事项顺序", scores: { [Dimension.PACE]: 3, [Dimension.ENVIRONMENT]: 4 } },
      { id: '2c', text: "高效洗漱，听着新闻准时跨入职场节奏", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 4 } },
      { id: '2d', text: "窗外有清新的自然声响，没有任何闹钟约束", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 3,
    dimension: Dimension.PACE,
    question: "如果周末完全由你支配，你第一直觉想做的是？",
    options: [
      { id: '3a', text: "约老友去热闹的巷子里找寻地道美味", scores: { [Dimension.PACE]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '3b', text: "逛心仪的书店或展室，把生活梳理得舒适些", scores: { [Dimension.PACE]: 3, [Dimension.ENVIRONMENT]: 5 } },
      { id: '3c', text: "参加高价值的社交活动，推进个人成长目标", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 5 } },
      { id: '3d', text: "把自己丢在山海之间，彻底地切断外界联络", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 4,
    dimension: Dimension.PACE,
    question: "你对“理想节奏”的理解，最接近下面哪句描述？",
    options: [
      { id: '4a', text: "每天都能留一点时间给那些细碎的小确幸", scores: { [Dimension.PACE]: 2, [Dimension.RECOVERY]: 4 } },
      { id: '4b', text: "忙而不乱，生活在一种高度自洽的秩序中", scores: { [Dimension.PACE]: 3, [Dimension.GROWTH]: 3 } },
      { id: '4c', text: "充满力量感，能真切感知到自己在向上攀登", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 5 } },
      { id: '4d', text: "像流水一样自由，不被任何刚性的安排困住", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 2 } },
    ]
  },
  // --- 社交密度 (5-8) ---
  {
    id: 5,
    dimension: Dimension.SOCIAL,
    question: "你更容易在哪种环境里让内心安静下来？",
    options: [
      { id: '5a', text: "热闹但熟悉的街角，那种触手可及的人情味", scores: { [Dimension.SOCIAL]: 5, [Dimension.ENVIRONMENT]: 2 } },
      { id: '5b', text: "极具设计感与审美的独立空间，格调在线", scores: { [Dimension.SOCIAL]: 3, [Dimension.ENVIRONMENT]: 5 } },
      { id: '5c', text: "资源汇聚、目标清晰且充满精英感的场域", scores: { [Dimension.SOCIAL]: 4, [Dimension.GROWTH]: 5 } },
      { id: '5d', text: "绝对安静、视野开阔且鲜有人迹的旷野", scores: { [Dimension.SOCIAL]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 6,
    dimension: Dimension.SOCIAL,
    question: "你最向往的社交状态通常是？",
    options: [
      { id: '6a', text: "有三五知己，能随时聚在一起痛快吃喝", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '6b', text: "与高素质的人保持深聊，贵精不贵多", scores: { [Dimension.SOCIAL]: 2, [Dimension.GROWTH]: 3 } },
      { id: '6c', text: "能在这个圈子里交换最新的资讯与发展机会", scores: { [Dimension.SOCIAL]: 4, [Dimension.GROWTH]: 5 } },
      { id: '6d', text: "维持极简的圈子，更多时间留给精神探索", scores: { [Dimension.SOCIAL]: 1, [Dimension.RECOVERY]: 2 } },
    ]
  },
  {
    id: 7,
    dimension: Dimension.SOCIAL,
    question: "当你进入一个新的环境，你更希望它的人际氛围是？",
    options: [
      { id: '7a', text: "大家都很健谈，那种像街坊邻里的热络劲儿", scores: { [Dimension.SOCIAL]: 5, [Dimension.ENVIRONMENT]: 1 } },
      { id: '7b', text: "礼貌而克制，保持着一种舒服的社交距离", scores: { [Dimension.SOCIAL]: 2, [Dimension.ENVIRONMENT]: 4 } },
      { id: '7c', text: "富有动能，大家都朝着更卓越的目标在努力", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 5 } },
      { id: '7d', text: "全然的包容与放松，不被任何评价所左右", scores: { [Dimension.SOCIAL]: 1, [Dimension.RECOVERY]: 4 } },
    ]
  },
  {
    id: 8,
    dimension: Dimension.SOCIAL,
    question: "关于“邻里关系”，你内心的真实倾向是？",
    options: [
      { id: '8a', text: "希望能跟身边的邻居成为偶尔能串门的朋友", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '8b', text: "虽然住得近，但最好彼此保持体面的私隐性", scores: { [Dimension.SOCIAL]: 1, [Dimension.PACE]: 4 } },
      { id: '8c', text: "希望社交对象是来自相似职业背景的邻里", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 4 } },
      { id: '8d', text: "不关心邻里，更在意与志趣相投的远方友邻交流", scores: { [Dimension.SOCIAL]: 2, [Dimension.RECOVERY]: 5 } },
    ]
  },
  // --- 成长需求 (9-12) ---
  {
    id: 9,
    dimension: Dimension.GROWTH,
    question: "你希望未来五年，整座城市带给你最重要的回馈是？",
    options: [
      { id: '9a', text: "一份踏实、温馨且能稳步提升的生活舒适感", scores: { [Dimension.GROWTH]: 2, [Dimension.SOCIAL]: 4 } },
      { id: '9b', text: "更高的审美修养，以及更有秩序感的每日成长", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 4 } },
      { id: '9c', text: "更高、更广阔的平台，去挑战前所未见的机会", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '9d', text: "更自由的灵魂，拥有能随时重启生活的灵感", scores: { [Dimension.GROWTH]: 3, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 10,
    dimension: Dimension.GROWTH,
    question: "对于所谓“理想的工作”，你当前的看法是？",
    options: [
      { id: '10a', text: "不要太卷，在薪资和私人生活间有个好平衡", scores: { [Dimension.GROWTH]: 1, [Dimension.PACE]: 1 } },
      { id: '10b', text: "专业感强，能稳定地磨练技艺并保持社会地位", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 3 } },
      { id: '10c', text: "充满了刺激与竞争，每天都在打破能力的边界", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '10d', text: "能够自由掌控，甚至模糊了工作与爱好的界限", scores: { [Dimension.GROWTH]: 2, [Dimension.RECOVERY]: 2 } },
    ]
  },
  {
    id: 11,
    dimension: Dimension.GROWTH,
    question: "如果有一个月的休假，你会如何处理自己的成长课题？",
    options: [
      { id: '11a', text: "找个舒服的地方住下来，在烟火气中恢复元气", scores: { [Dimension.GROWTH]: 1, [Dimension.SOCIAL]: 4 } },
      { id: '11b', text: "报个提升班或艺术研修，让状态保持优美迭代", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 5 } },
      { id: '11c', text: "去见不同的人，看新项目，寻找下个风口商机", scores: { [Dimension.GROWTH]: 5, [Dimension.SOCIAL]: 3 } },
      { id: '11d', text: "独自去远方流浪，在不确定性中找回真实的勇气", scores: { [Dimension.GROWTH]: 3, [Dimension.RECOVERY]: 4 } },
    ]
  },
  {
    id: 12,
    dimension: Dimension.GROWTH,
    question: "你最不能接受自己在当下的哪种生命状态？",
    options: [
      { id: '12a', text: "紧绷到极点，完全失去了品味一份美食的能力", scores: { [Dimension.PACE]: 5, [Dimension.RECOVERY]: 5 } },
      { id: '12b', text: "处于极度混乱之中，环境和心境都杂乱无序", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.GROWTH]: 4 } },
      { id: '12c', text: "一直停在舒适区，看不到任何质变的向上窗口", scores: { [Dimension.GROWTH]: 1, [Dimension.PACE]: 1 } },
      { id: '12d', text: "被僵化的生活轨迹锁死，失去了重塑自我的空间", scores: { [Dimension.GROWTH]: 5, [Dimension.RECOVERY]: 5 } },
    ]
  },
  // --- 环境偏好 (13-16) ---
  {
    id: 13,
    dimension: Dimension.ENVIRONMENT,
    question: "你在选择住所时，最希望推开窗能看见的是？",
    options: [
      { id: '13a', text: "冒热汽的早点摊、老街坊们路过的温暖市井", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '13b', text: "大片的草坪、宁静的湖面或规划整齐的绿道", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 3 } },
      { id: '13c', text: "流光溢彩的CBD天际线，离城市的中心足够近", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 4 } },
      { id: '13d', text: "一望无际的大海、山峦，以及没有边际的云", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 14,
    dimension: Dimension.ENVIRONMENT,
    question: "你心目中最高级的城市气质，往往来自于？",
    options: [
      { id: '14a', text: "那种厚实的人情味，每个人都活得热气腾腾", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '14b', text: "极致的审美与低调的秩序，每个角落都优雅", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.RECOVERY]: 2 } },
      { id: '14c', text: "那种日新月异的速度，仿佛未来就在此发生", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 5 } },
      { id: '14d', text: "极致般的空灵和寂静，能让人听到内心的声音", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 5 } },
    ]
  },
  {
    id: 15,
    dimension: Dimension.ENVIRONMENT,
    question: "如果要在城市里度过一个夜晚，你最喜欢的场景是？",
    options: [
      { id: '15a', text: "吃顿火锅，在热闹、充满烟火的街道散散步", scores: { [Dimension.SOCIAL]: 5, [Dimension.ENVIRONMENT]: 2 } },
      { id: '15b', text: "看场小众电影或画展，夜晚也应有一份审美感", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 2 } },
      { id: '15c', text: "在高耸大楼的灯光下，感受这种生机勃勃的速度", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 4 } },
      { id: '15d', text: "吹吹海风或听听山风，只与明月和潮汐在一起", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 16,
    dimension: Dimension.ENVIRONMENT,
    question: "对于所谓的“老破小”或“摩天大楼”，你更有同理心的一方是？",
    options: [
      { id: '16a', text: "“老破小”，因为它们藏着整座城市的灵魂碎片", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 3 } },
      { id: '16b', text: "带有人文气息的旧址改造，是新旧交替的最佳平衡", scores: { [Dimension.ENVIRONMENT]: 3, [Dimension.RECOVERY]: 2 } },
      { id: '16c', text: "大厦，那代表了人类文明最高的资源聚集与荣耀", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 5 } },
      { id: '16d', text: "在大厦与老屋之外，哪怕是一间荒野的草庐也好", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 5 } },
    ]
  },
  // --- 情绪补给 (17-20) ---
  {
    id: 17,
    dimension: Dimension.RECOVERY,
    question: "当你感到巨大的压力，哪句话最能给你提供“微小的治愈”？",
    options: [
      { id: '17a', text: "“不急，这世间所有事，最后都会有出口。”", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 5 } },
      { id: '17b', text: "“你正在朝着更好的方向，一步一个掌印。”", scores: { [Dimension.RECOVERY]: 3, [Dimension.GROWTH]: 4 } },
      { id: '17c', text: "“去更大的地方看看，哪怕是输，也输得体面点。”", scores: { [Dimension.RECOVERY]: 5, [Dimension.GROWTH]: 5 } },
      { id: '17d', text: "“慢下来吧，你随时可以决定开始另一种人生。”", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 2 } },
    ]
  },
  {
    id: 18,
    dimension: Dimension.RECOVERY,
    question: "最近的时光里，什么样的画面最能触动你内在的“柔软感”？",
    options: [
      { id: '18a', text: "晚归的人在路灯下，围在一起吃顿热乎的路边摊", scores: { [Dimension.RECOVERY]: 3, [Dimension.SOCIAL]: 5 } },
      { id: '18b', text: "夕阳刚好斜射进精心布置的客厅，光圈柔美且有序", scores: { [Dimension.RECOVERY]: 2, [Dimension.ENVIRONMENT]: 4 } },
      { id: '18c', text: "在奋斗后终于站在了一座更高的大楼前俯瞰繁华", scores: { [Dimension.RECOVERY]: 5, [Dimension.GROWTH]: 5 } },
      { id: '18d', text: "落叶缓缓划过被静止的空气，仿佛时间也在这里睡去", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
    ]
  },
  {
    id: 19,
    dimension: Dimension.RECOVERY,
    question: "假如生活可以重来，在所谓的“追求”里，你想换掉的是？",
    options: [
      { id: '19a', text: "换掉这种过于紧绷的刻度，哪怕过得“平庸”一点", scores: { [Dimension.PACE]: 5, [Dimension.RECOVERY]: 1 } },
      { id: '19b', text: "换掉偶尔的迷茫无序，让生活像钟表一样精致优雅", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 2 } },
      { id: '19c', text: "换掉这种暂时的停滞，即使粉身碎骨也要去试试攀登", scores: { [Dimension.GROWTH]: 1, [Dimension.PACE]: 5 } },
      { id: '19d', text: "换掉这种被社会捆绑的无奈，找回内心真正的自由", scores: { [Dimension.RECOVERY]: 5, [Dimension.GROWTH]: 5 } },
    ]
  },
  {
    id: 20,
    dimension: Dimension.RECOVERY,
    question: "关于“幸福”，在你当前的倾向里，它最核心的是？",
    options: [
      { id: '20a', text: "内心的那份定力，无论处于何处都能活得热气腾腾", scores: { [Dimension.RECOVERY]: 5, [Dimension.SOCIAL]: 3 } },
      { id: '20b', text: "一种对环境和节奏的绝对掌控力，一切忙而有序", scores: { [Dimension.PACE]: 4, [Dimension.ENVIRONMENT]: 5 } },
      { id: '20c', text: "在持续变好的路上，从未放弃过挑战更高的目标", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 4 } },
      { id: '20d', text: "能在苍山洱海或大漠孤烟前，重新找到呼吸的理由", scores: { [Dimension.RECOVERY]: 1, [Dimension.ENVIRONMENT]: 1 } },
    ]
  }
];

export const CITIES: City[] = [
  {
    id: 'chengdu',
    name: '成都',
    type: '烟火松弛倾向',
    description: '在茶碗与慢板之间，找回被时间遗失的温润。',
    scores: {
      [Dimension.PACE]: 1,
      [Dimension.SOCIAL]: 5,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 3,
    },
    explanation: [
      "当前的评估观察到，你内心深处可能潜伏着一种对“生活本原力”的强烈渴望，那种热气腾腾的人际交互对你而言极具疗愈感。",
      "你骨子里信奉“慢即是快”，并不排斥进步，但如果代价是失去品味一道美食或听过一段夕阳的能力，你会选择坚守前者。",
      "成都的包容感和极其肥 워的“熟人社会”土壤，最能安放你那颗不愿随波逐流、却也依然渴望温度的心。"
    ]
  },
  {
    id: 'hangzhou',
    name: '杭州',
    type: '温柔生长倾向',
    description: '半城湖水半城云，在数字与审美的交错中迭代。',
    scores: {
      [Dimension.PACE]: 3,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 4,
      [Dimension.ENVIRONMENT]: 4,
      [Dimension.RECOVERY]: 3,
    },
    explanation: [
      "你倾向于一种“温和而坚定”的秩序感，希望在不失去个人审美的前提下，跟随时代的脉搏一起有节奏地跳动。",
      "环境对你的影响权重很高，你对“山水在怀”有着近乎生理性的依赖，但又需要一座具有足够动能的职业剧院作为支撑。",
      "杭州这类兼具自然留白与现代效率的“平衡感城市”，最契合你对“温柔生长”的全部想象。"
    ]
  },
  {
    id: 'shanghai',
    name: '上海',
    type: '机会进取倾向',
    description: '在极致的全球化律动里，兑现每一分精致的志向。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 5,
      [Dimension.RECOVERY]: 4,
    },
    explanation: [
      "模型捕捉到你身上强烈的“秩序追逐者”特质，你极其尊重现代文明规划出的效率与便利，并乐于在竞技中确认自我。",
      "你对“成功”的定义带有不折不扣的精致感，不仅仅是物质的丰盈，更是视野的高度以及与世界共频的能力。",
      "上海这种由规则导向的大都市气质，能给到你最大的心理安全感与成长燃料。"
    ]
  },
  {
    id: 'beijing',
    name: '文化进取倾向',
    type: '宏大叙事',
    description: '在厚重的历史纵深感中，锚定内心的价值标尺。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 4,
      [Dimension.RECOVERY]: 5,
    },
    explanation: [
      "你的思维底色中往往带有更宏观的“价值感”，比起单纯的赚钱或享乐，你更倾向于在一种宏大的叙述里寻找意义。",
      "你能忍受更高烈度的压力，是因为你对“成长”的理解跨越了单一维度，它是格局的重整，更是个人在时代潮头的位置感。",
      "北京这种新旧交替、宏大宽广的京派气质，最能装得下你那份不甘平庸的赤诚抱负。"
    ]
  },
  {
    id: 'xiamen',
    name: '厦门',
    type: '浪漫文艺倾向',
    description: '一抹海风，一曲慢板，在波浪的间隔里诗意栖居。',
    scores: {
      [Dimension.PACE]: 2,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 2,
    },
    explanation: [
      "你自带一种对“浪漫主意”的敏感触角，容易被海边的日光、街角的艺术及那种无需大声喧哗的美所击中。",
      "你对成长的渴望更带有某种“非功利的文艺色彩”，追求一种像珊瑚生长般缓慢、自然、却又极其独特的自我完成。",
      "厦门这种既保留了城市骨架、又拥有海岛温柔呼吸的地方，像是你这种感性灵魂的完美避风港。"
    ]
  },
  {
    id: 'chongqing',
    name: '重庆',
    type: '火热生命倾向',
    description: '在立体魔幻的森林里，绽放最热烈直爽的本能。',
    scores: {
      [Dimension.PACE]: 4,
      [Dimension.SOCIAL]: 5,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 4,
    },
    explanation: [
      "基于你的直觉选择，模型判定你是那种排斥虚伪、追求“真刀真枪生活”的性格，对粗粝但野性的生命力有极高亲和感。",
      "你不喜欢过于精致的伪装，更倾向于在那种沸腾的市井烟火中确认自我的存在，社交对你而言更像是一种“能量的狂欢”。",
      "重庆这种硬核而热烈的山城气质，最能激发出你潜意识里那份不愿被生活驯服、永远大步向前的生命张力。"
    ]
  },
  {
    id: 'dali',
    name: '大理',
    type: '自由疗愈倾向',
    description: '苍山脚下，洱海之边，找回被社会契约偷走的本真。',
    scores: {
      [Dimension.PACE]: 1,
      [Dimension.SOCIAL]: 2,
      [Dimension.GROWTH]: 1,
      [Dimension.ENVIRONMENT]: 1,
      [Dimension.RECOVERY]: 1,
    },
    explanation: [
      "画像显示出你当前具有较强的“离心力”，渴望摆脱那些虚假繁荣的社会角色，重新在极度的静谧中校准精神指南针。",
      "你对物质的渴望正在让位给对“呼吸权”的探索，你并不需要一座繁华的城池，你只需要一处允许你“发呆”的荒野。",
      "大理的苍山洱海对你而言不是景观，而是一种久违的救赎，让你明白：即便只是无所事事地晒太阳，也是极其高贵的修行。"
    ]
  },
  {
    id: 'shenzhen',
    name: '未来未来倾向',
    type: '年轻进化',
    description: '无畏过去，在快速更迭的机遇中持续定义更好的自己。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 5,
      [Dimension.RECOVERY]: 5,
    },
    explanation: [
      "你表现出极强的“自愈与动态进化”特征，是典型的“此刻即永恒”者，对历史的积淀不予过度留恋，更看重未来的无限增量。",
      "极度崇尚个人奋斗与高效交互的你，对“包容度”有着极高的心理红线需求，你需要一个允许失败、更允许暴富的实验场。",
      "深圳这种年轻、生猛、几乎没有传统枷锁的律动，是你这种永远在追求“重启”的灵魂唯一的共振频率。"
    ]
  }
];
