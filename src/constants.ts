/**
 * CLAM - City Lifestyle Adaptation Model
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
  {
    id: 1,
    dimension: Dimension.PACE,
    question: "阳光洒进窗户的清晨，你通常希望此刻的闹铃声是？",
    options: [
      { id: '1a', text: "鸟鸣声，或是远处温和的钟声", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 2 } },
      { id: '1b', text: "轻快有活力的城市广播", scores: { [Dimension.PACE]: 3, [Dimension.ENVIRONMENT]: 4 } },
      { id: '1c', text: "紧迫但高效的提醒，让我立刻进入战斗状态", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 4 } },
      { id: '1d', text: "根本不需要闹铃，自然醒最珍贵", scores: { [Dimension.RECOVERY]: 5, [Dimension.PACE]: 1 } },
    ]
  },
  {
    id: 2,
    dimension: Dimension.PACE,
    question: "如果今天的时间刻度慢了20%，你会选择如何分配这多出来的时间？",
    options: [
      { id: '2a', text: "在路边长椅上观察一会儿飘落的叶子", scores: { [Dimension.PACE]: 1, [Dimension.ENVIRONMENT]: 1 } },
      { id: '2b', text: "多看两篇深度长文，或是完善一下工作细节", scores: { [Dimension.PACE]: 4, [Dimension.GROWTH]: 4 } },
      { id: '2c', text: "给自己做一顿精致、缓慢的午餐", scores: { [Dimension.RECOVERY]: 3, [Dimension.PACE]: 2 } },
      { id: '2d', text: "多逛一家感兴趣的设计买手店", scores: { [Dimension.ENVIRONMENT]: 3, [Dimension.PACE]: 3 } },
    ]
  },
  {
    id: 3,
    dimension: Dimension.PACE,
    question: "在拥挤的通勤路上，看到身边匆匆而过的人群，你的心情是？",
    options: [
      { id: '3a', text: "被这种蓬勃的城市律动所感染，感到振奋", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 3 } },
      { id: '3b', text: "习惯性地戴上耳机，在音乐中寻找节奏的平衡", scores: { [Dimension.PACE]: 3, [Dimension.RECOVERY]: 2 } },
      { id: '3c', text: "感到一丝压抑，渴望瞬间移动到开阔的自然中", scores: { [Dimension.PACE]: 1, [Dimension.ENVIRONMENT]: 1 } },
      { id: '3d', text: "没什么感觉，大脑已经开始处理今天的待办事项", scores: { [Dimension.PACE]: 4, [Dimension.GROWTH]: 5 } },
    ]
  },
  {
    id: 4,
    dimension: Dimension.PACE,
    question: "关于“截止日期”，你更偏向哪种应对方式？",
    options: [
      { id: '4a', text: "提前很久就开始筹划，按部就班，不紧不慢", scores: { [Dimension.PACE]: 2, [Dimension.RECOVERY]: 4 } },
      { id: '4b', text: "享受最后一刻肾上腺素激发的成就感", scores: { [Dimension.PACE]: 5, [Dimension.GROWTH]: 4 } },
      { id: '4c', text: "如果是自己热爱的事，会沉浸其中忘记时间", scores: { [Dimension.RECOVERY]: 3, [Dimension.GROWTH]: 5 } },
      { id: '4d', text: "随遇而安，尽力去做，但不过分压榨自己", scores: { [Dimension.PACE]: 1, [Dimension.RECOVERY]: 5 } },
    ]
  },
  {
    id: 5,
    dimension: Dimension.SOCIAL,
    question: "如果附近开了一家别具一格的小店，你最希望它是？",
    options: [
      { id: '5a', text: "充满烟火气的社区酒馆，能和老板闲聊几句", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 2 } },
      { id: '5b', text: "极简肃静的独立书店，允许深度独处和思考", scores: { [Dimension.SOCIAL]: 1, [Dimension.ENVIRONMENT]: 2 } },
      { id: '5c', text: "格调高雅的咖啡馆，适合在这里完成轻量工作", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 4 } },
      { id: '5d', text: "充满专业感的器物沙龙，认识志趣相同的高端圈层", scores: { [Dimension.SOCIAL]: 4, [Dimension.GROWTH]: 5 } },
    ]
  },
  {
    id: 6,
    dimension: Dimension.SOCIAL,
    question: "对于“深度友情”，你理想中的相处状态是？",
    options: [
      { id: '6a', text: "随叫随到，能随时分享日常琐碎的亲密感", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '6b', text: "保持适当距离，但在精神层面有着高度共鸣", scores: { [Dimension.SOCIAL]: 2, [Dimension.RECOVERY]: 5 } },
      { id: '6c', text: "互相成就，能一起探讨事业、理想和更广阔的世界", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 5 } },
      { id: '6d', text: "那种‘好久不见，也无需寒暄’的淡然和安心", scores: { [Dimension.SOCIAL]: 1, [Dimension.RECOVERY]: 4 } },
    ]
  },
  {
    id: 7,
    dimension: Dimension.SOCIAL,
    question: "当你进入一个新的社交场合，你通常的表现是？",
    options: [
      { id: '7a', text: "主动破冰，享受这种建立连接带来的能量", scores: { [Dimension.SOCIAL]: 5, [Dimension.GROWTH]: 2 } },
      { id: '7b', text: "在角落静静观察，由于气场契合才开始交流", scores: { [Dimension.SOCIAL]: 2, [Dimension.ENVIRONMENT]: 4 } },
      { id: '7c', text: "目的明确，只寻找对自己有价值的信息和人脉", scores: { [Dimension.GROWTH]: 5, [Dimension.SOCIAL]: 3 } },
      { id: '7d', text: "很快能融入，但也会适时抽身回到自己的精神世界", scores: { [Dimension.SOCIAL]: 3, [Dimension.RECOVERY]: 5 } },
    ]
  },
  {
    id: 8,
    dimension: Dimension.SOCIAL,
    question: "你如何看待“邻里邻居”这种关系带来的温度？",
    options: [
      { id: '8a', text: "现代生活中不可多得的奢侈品，非常渴望", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 4 } },
      { id: '8b', text: "隐私重于一切，保持友善的冷淡是最好的社交", scores: { [Dimension.SOCIAL]: 1, [Dimension.PACE]: 5 } },
      { id: '8c', text: "希望能有高素质的圈层环境，而非日常琐碎的熟人社交", scores: { [Dimension.SOCIAL]: 3, [Dimension.GROWTH]: 4 } },
      { id: '8d', text: "看缘分，如果有合得来的街坊会是很温暖的事", scores: { [Dimension.SOCIAL]: 4, [Dimension.RECOVERY]: 3 } },
    ]
  },
  {
    id: 9,
    dimension: Dimension.GROWTH,
    question: "关于“终身成长”，你心目中最高级的状态是？",
    options: [
      { id: '9a', text: "持续突破认知边界，站在行业或时代的浪尖", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '9b', text: "内心愈发平和强大，能从容审视万事万物的流动", scores: { [Dimension.GROWTH]: 3, [Dimension.RECOVERY]: 5 } },
      { id: '9c', text: "拥有极致的专业技艺，成为一个纯粹的匠人", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 4 } },
      { id: '9d', text: "这种说法太累了，我觉得能够身心健康地活着就是成长", scores: { [Dimension.GROWTH]: 1, [Dimension.RECOVERY]: 2 } },
    ]
  },
  {
    id: 10,
    dimension: Dimension.GROWTH,
    question: "面对人生的选择题，当你必须要牺牲一项时，你会牺牲？",
    options: [
      { id: '10a', text: "短暂的身心舒适，为了更长远的成就和格局", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 4 } },
      { id: '10b', text: "事业上的巨大成功，为了内心的自由和家庭的宁静", scores: { [Dimension.GROWTH]: 1, [Dimension.RECOVERY]: 5 } },
      { id: '10c', text: "极度的物质繁华，为了能生活在自己偏好的审美环境里", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 2 } },
      { id: '10d', text: "广泛的社交面子，为了能专注于深掘自己的核心价值", scores: { [Dimension.SOCIAL]: 1, [Dimension.GROWTH]: 4 } },
    ]
  },
  {
    id: 11,
    dimension: Dimension.GROWTH,
    question: "如果公司提供两个机会，你更倾向于哪一个？",
    options: [
      { id: '11a', text: "充满挑战的新城市新业务，当然压力和收益也翻倍", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 5 } },
      { id: '11b', text: "环境成熟稳定的福利型项目，可以有更多私人时间", scores: { [Dimension.GROWTH]: 1, [Dimension.PACE]: 1 } },
      { id: '11c', text: "带有一些人文公益性质的小众项目，更有社会价值", scores: { [Dimension.GROWTH]: 3, [Dimension.RECOVERY]: 4 } },
      { id: '11d', text: "允许远程办公的海外扩张项目，在旅行中工作", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 4 } },
    ]
  },
  {
    id: 12,
    dimension: Dimension.GROWTH,
    question: "你如何定义一个“成功”的人？",
    options: [
      { id: '12a', text: "拥有左右局面的能量，被很多人仰视和依靠", scores: { [Dimension.GROWTH]: 5, [Dimension.SOCIAL]: 4 } },
      { id: '12b', text: "能完全掌控自己的生活，不为任何不想做的事妥协", scores: { [Dimension.GROWTH]: 2, [Dimension.RECOVERY]: 5 } },
      { id: '12c', text: "在这个世界上留下了一件极具美感或思想的作品", scores: { [Dimension.GROWTH]: 4, [Dimension.ENVIRONMENT]: 5 } },
      { id: '12d', text: "不管环境如何，都能把日子过得热气腾腾、有滋有味", scores: { [Dimension.RECOVERY]: 4, [Dimension.SOCIAL]: 5 } },
    ]
  },
  {
    id: 13,
    dimension: Dimension.ENVIRONMENT,
    question: "清晨漫步，你最容易被哪种景象捕捉到目光？",
    options: [
      { id: '13a', text: "清晨集市冒起的第一缕白烟和叫卖声", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '13b', text: "阳光穿过摩天大楼玻璃折射出的金属光芒", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.GROWTH]: 4 } },
      { id: '13c', text: "晨雾缭绕的江边步道或开阔的城市公园", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 2 } },
      { id: '13d', text: "整洁肃穆、充满历史韵味的古树旧巷", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.PACE]: 2 } },
    ]
  },
  {
    id: 14,
    dimension: Dimension.ENVIRONMENT,
    question: "关于“居住的理想位置”，你的优先考量是？",
    options: [
      { id: '14a', text: "窗外就是一望无际的水体或茂密的森林", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 1 } },
      { id: '14b', text: "繁华商业区的云端公寓，能俯瞰整座城市的霓虹", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.PACE]: 5 } },
      { id: '14c', text: "既有文化气息、生活极其便利且充满设计感的街区", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 3 } },
      { id: '14d', text: "一个有着深厚感情基础的、即便偶尔嘈杂也很温馨的老社区", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 4 } },
    ]
  },
  {
    id: 15,
    dimension: Dimension.ENVIRONMENT,
    question: "如果街道景观可以由你改造，你可能会？",
    options: [
      { id: '15a', text: "把人行道变窄，增加更多有趣、密集的小吃摊位", scores: { [Dimension.ENVIRONMENT]: 2, [Dimension.SOCIAL]: 5 } },
      { id: '15b', text: "大面积扩建绿地和座椅，让人们能更久地停留在外", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 4 } },
      { id: '15c', text: "统一沿街店铺的视觉审美，增加更多具有艺术感的装置", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.GROWTH]: 2 } },
      { id: '15d', text: "增加更多高效的智慧交通设施，让流动更快更精准", scores: { [Dimension.ENVIRONMENT]: 5, [Dimension.PACE]: 5 } },
    ]
  },
  {
    id: 16,
    dimension: Dimension.ENVIRONMENT,
    question: "下雨天对你来说意味着？",
    options: [
      { id: '16a', text: "城市被洗刷后的那种清冷和诗意，很迷人", scores: { [Dimension.ENVIRONMENT]: 4, [Dimension.RECOVERY]: 5 } },
      { id: '16b', text: "出行极大的不便，打乱了原本紧凑的计划", scores: { [Dimension.PACE]: 5, [Dimension.ENVIRONMENT]: 5 } },
      { id: '16c', text: "躲进最喜欢的小酒馆，听着雨声喝杯酒的绝佳借口", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '16d', text: "泥土和草木被浸润的味道，仿佛呼吸到了整座星球", scores: { [Dimension.ENVIRONMENT]: 1, [Dimension.RECOVERY]: 1 } },
    ]
  },
  {
    id: 17,
    dimension: Dimension.RECOVERY,
    question: "当你感到内心“电力不足”时，你最有效的充电宝是？",
    options: [
      { id: '17a', text: "去到最喧闹的市场，感受那种蓬勃的生命力", scores: { [Dimension.RECOVERY]: 4, [Dimension.SOCIAL]: 5 } },
      { id: '17b', text: "一场酣畅淋漓的运动，直到精疲力竭", scores: { [Dimension.RECOVERY]: 5, [Dimension.PACE]: 4 } },
      { id: '17c', text: "把自己关在房间里一整天，切断所有社交信号", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
      { id: '17d', text: "去到一个完全陌生的自然景观中，放空一整周", scores: { [Dimension.RECOVERY]: 2, [Dimension.ENVIRONMENT]: 1 } },
    ]
  },
  {
    id: 18,
    dimension: Dimension.RECOVERY,
    question: "平日里，最能触动你内心“柔软角落”的是？",
    options: [
      { id: '18a', text: "落日余晖洒在老屋瓦片上的那种光圈", scores: { [Dimension.RECOVERY]: 2, [Dimension.ENVIRONMENT]: 4 } },
      { id: '18b', text: "在奋斗多年后，终于能在这座城市某个角落扎根的归属感", scores: { [Dimension.RECOVERY]: 5, [Dimension.GROWTH]: 5 } },
      { id: '18c', text: "这种时刻很少，我更享受逻辑和理性的那种美感", scores: { [Dimension.RECOVERY]: 4, [Dimension.PACE]: 5 } },
      { id: '18d', text: "在茫茫人海中，刚好遇到一个懂你未说之话的瞬间", scores: { [Dimension.RECOVERY]: 3, [Dimension.SOCIAL]: 5 } },
    ]
  },
  {
    id: 19,
    dimension: Dimension.RECOVERY,
    question: "如果可以拥有一个专属的疗愈空间，你希望它位于？",
    options: [
      { id: '19a', text: "闹市中的一个静谧茶室，大隐隐于市", scores: { [Dimension.RECOVERY]: 3, [Dimension.SOCIAL]: 3 } },
      { id: '19b', text: "深夜的顶层露台，可以看着巨大的静止城市森林", scores: { [Dimension.RECOVERY]: 5, [Dimension.ENVIRONMENT]: 5 } },
      { id: '19c', text: "深山里的一个小木屋，只有鸟鸣和风声", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
      { id: '19d', text: "一个摆满自己心爱收藏的私密书房，完全属于自己", scores: { [Dimension.RECOVERY]: 2, [Dimension.GROWTH]: 4 } },
    ]
  },
  {
    id: 20,
    dimension: Dimension.RECOVERY,
    question: "关于“未来的幸福感”，你认为最核心的支柱是？",
    options: [
      { id: '20a', text: "自由，是不被任何外界评价和体制绑架的权利", scores: { [Dimension.RECOVERY]: 1, [Dimension.PACE]: 1 } },
      { id: '20b', text: "安全感，是拥有足够的竞争力和抵御风浪的资产", scores: { [Dimension.GROWTH]: 5, [Dimension.PACE]: 4 } },
      { id: '20c', text: "爱，是身边有一群志同道合且温暖真实的同类", scores: { [Dimension.SOCIAL]: 5, [Dimension.RECOVERY]: 3 } },
      { id: '20d', text: "平静，是能在繁华和孤独之间自由切换的定力", scores: { [Dimension.RECOVERY]: 4, [Dimension.ENVIRONMENT]: 3 } },
    ]
  }
];


export const CITIES: City[] = [
  {
    id: 'chengdu',
    name: '成都',
    type: '巴适平衡型',
    description: '一个在火锅和茶馆里寻找真理的休闲高地。',
    scores: {
      [Dimension.PACE]: 1,
      [Dimension.SOCIAL]: 5,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 2,
    },
    explanation: [
      "你骨子里信奉‘慢即是快’，对生活本身的热情远高于对纸面数据追求。",
      "你对人际关系有很强的温度需求，成都市井的‘邻里感’最能填补你的情感空白。",
      "你在生活状态和工作效率之间选择了前者，成都的烟火气是你的最佳补给站。"
    ]
  },
  {
    id: 'hangzhou',
    name: '杭州',
    type: '温柔生长型',
    description: '半城湖水半城云，在自然与效率的边缘游刃有余。',
    scores: {
      [Dimension.PACE]: 3,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 4,
      [Dimension.ENVIRONMENT]: 3,
      [Dimension.RECOVERY]: 3,
    },
    explanation: [
      "你既不想完全‘躺平’，也不愿在钢筋水泥的森林里窒息。",
      "你对环境审美有极高要求，西湖周边的自然气息与西溪的发展动能完美契合你的平衡点。",
      "你追求一种体面的、有秩序的生长方式，不偏激，但持续向前。"
    ]
  },
  {
    id: 'shanghai',
    name: '上海',
    type: '摩登精致型',
    description: '在最顶尖的秩序里，兑现每一分精致的野心。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 5,
      [Dimension.RECOVERY]: 4,
    },
    explanation: [
      "你极其尊重规则和效率，上海的契约精神能给你最大的安全感。",
      "你对生活品质有不折不扣的要求，全球同步的审美和便利是你赖以生存的空气。",
      "你享受在大都市里闪闪发光的感觉，竞争对你而言不是压力，而是燃料。"
    ]
  },
  {
    id: 'beijing',
    name: '北京',
    type: '文化厚重型',
    description: '在宏大的叙事与厚重的历史中，寻找生命的价值坐标。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 4,
      [Dimension.RECOVERY]: 5,
    },
    explanation: [
      "你不喜欢浅薄的快乐，更看重事情背后的意义和深层次的平台机会。",
      "你能在快速震荡的节奏中保持思考，北京这种新旧交替、宏大宽广的气质能装下你的抱负。",
      "你对成长的定义不仅仅是金钱，更是格局的拓展。"
    ]
  },
  {
    id: 'xiamen',
    name: '厦门',
    type: '浪漫海岸型',
    description: '一抹海风，一曲文艺，在温柔的波浪里诗意栖居。',
    scores: {
      [Dimension.PACE]: 2,
      [Dimension.SOCIAL]: 3,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 1,
      [Dimension.RECOVERY]: 2,
    },
    explanation: [
      "你天生自带浪漫滤镜，对海边和阳光有种无法割舍的生理依赖。",
      "你追求一种精致但不紧绷的亚热带生活，喜欢在小街巷里挖掘艺术灵感。",
      "厦门这种既有城市骨架、又有小岛温柔的地方，最能接纳你的文艺心。"
    ]
  },
  {
    id: 'chongqing',
    name: '重庆',
    type: '火爆生命型',
    description: '在立体魔幻的城市森林里，绽放最热烈直爽的生命力。',
    scores: {
      [Dimension.PACE]: 4,
      [Dimension.SOCIAL]: 5,
      [Dimension.GROWTH]: 3,
      [Dimension.ENVIRONMENT]: 2,
      [Dimension.RECOVERY]: 4,
    },
    explanation: [
      "你不喜欢虚伪的客套，更爱重庆那种‘硬核、耿直、生猛’的生活态度。",
      "你对城市地景的体验感要求很高，重庆的魔幻高低差能源源不断带给你视觉冲击。",
      "你需要高密度的情感释放，在这座沸腾的城市里你永远不会感到孤独。"
    ]
  },
  {
    id: 'dali',
    name: '大理',
    type: '灵感治愈型',
    description: '苍山脚下，洱海之边，找回被社会契约偷走的自己。',
    scores: {
      [Dimension.PACE]: 1,
      [Dimension.SOCIAL]: 2,
      [Dimension.GROWTH]: 2,
      [Dimension.ENVIRONMENT]: 1,
      [Dimension.RECOVERY]: 1,
    },
    explanation: [
      "你当前正处于极其渴望‘脱离’的状态，大理的荒野和自由是你的良药。",
      "你对物质的渴望正在让位给精神的探索，需要一个允许‘发呆’的空间。",
      "在这里，你不需要扮演任何人，只需要在自然的呼吸里重新认识自己。"
    ]
  },
  {
    id: 'shenzhen',
    name: '深圳',
    type: '未来进化型',
    description: '只要有梦想，每一分钟都是在重启更好的自己。',
    scores: {
      [Dimension.PACE]: 5,
      [Dimension.SOCIAL]: 4,
      [Dimension.GROWTH]: 5,
      [Dimension.ENVIRONMENT]: 5,
      [Dimension.RECOVERY]: 5,
    },
    explanation: [
      "你是典型的‘未来派’，对过去的长情不及对未来的好奇。",
      "你极度崇尚个人奋斗，更看重此时此刻的可能性，而非传统的人脉枷锁。",
      "深圳这种年轻、包容、高速迭代的节奏，是你保持生命活力唯一的办法。"
    ]
  }
];
