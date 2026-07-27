export type Subject = "数学" | "语文" | "英语";

export type Question = {
  id: string;
  subject: Subject;
  topic: string;
  stem: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const questionBank: Question[] = [
  {
    "id": "m01",
    "subject": "数学",
    "topic": "集合",
    "stem": "已知集合 A={1,2,3}，B={2,3,4}，则 A∩B 等于",
    "options": [
      "{1,4}",
      "{2,3}",
      "{1,2,3,4}",
      "∅"
    ],
    "answer": 1,
    "explanation": "两个集合的公共元素是2和3，所以交集为{2,3}。"
  },
  {
    "id": "m02",
    "subject": "数学",
    "topic": "不等式",
    "stem": "不等式 |x-2|<3 的解集是",
    "options": [
      "x<-1",
      "x>5",
      "-1<x<5",
      "x<-1或x>5"
    ],
    "answer": 2,
    "explanation": "由-3<x-2<3，得到-1<x<5。"
  },
  {
    "id": "m03",
    "subject": "数学",
    "topic": "函数",
    "stem": "已知 f(x)=2x²-3，则 f(-2) 的值为",
    "options": [
      "-11",
      "-5",
      "5",
      "11"
    ],
    "answer": 2,
    "explanation": "f(-2)=2×(-2)²-3=8-3=5。"
  },
  {
    "id": "m04",
    "subject": "数学",
    "topic": "方程",
    "stem": "方程 x²-5x+6=0 的两个根是",
    "options": [
      "1和6",
      "2和3",
      "-2和-3",
      "-1和-6"
    ],
    "answer": 1,
    "explanation": "x²-5x+6=(x-2)(x-3)，所以两根为2和3。"
  },
  {
    "id": "m05",
    "subject": "数学",
    "topic": "直线",
    "stem": "经过点(1,2)和(3,6)的直线斜率为",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "斜率k=(6-2)/(3-1)=2。"
  },
  {
    "id": "m06",
    "subject": "数学",
    "topic": "三角函数",
    "stem": "sin30°+cos60° 的值为",
    "options": [
      "0",
      "1/2",
      "1",
      "√3"
    ],
    "answer": 2,
    "explanation": "sin30°=1/2，cos60°=1/2，两者相加为1。"
  },
  {
    "id": "m07",
    "subject": "数学",
    "topic": "等差数列",
    "stem": "等差数列首项为3，公差为2，则第6项为",
    "options": [
      "11",
      "12",
      "13",
      "15"
    ],
    "answer": 2,
    "explanation": "a₆=a₁+5d=3+5×2=13。"
  },
  {
    "id": "m08",
    "subject": "数学",
    "topic": "等比数列",
    "stem": "等比数列2，6，18，…的第5项为",
    "options": [
      "54",
      "108",
      "162",
      "243"
    ],
    "answer": 2,
    "explanation": "公比为3，第5项为2×3⁴=162。"
  },
  {
    "id": "m09",
    "subject": "数学",
    "topic": "向量",
    "stem": "已知向量 a=(2,-1)，b=(1,3)，则 a·b 等于",
    "options": [
      "-1",
      "1",
      "3",
      "5"
    ],
    "answer": 0,
    "explanation": "a·b=2×1+(-1)×3=-1。"
  },
  {
    "id": "m10",
    "subject": "数学",
    "topic": "概率",
    "stem": "袋中有3个红球和2个蓝球，随机取出1个球，取到红球的概率为",
    "options": [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
    ],
    "answer": 2,
    "explanation": "共有5个球，其中3个是红球，概率为3/5。"
  },
  {
    "id": "c01",
    "subject": "语文",
    "topic": "字音",
    "stem": "下列词语中，加点字读音正确的一项是",
    "options": [
      "慰藉（jí）",
      "炽热（zhì）",
      "倔强（jué）",
      "潜力（qiǎn）"
    ],
    "answer": 2,
    "explanation": "“倔强”的“倔”读jué；慰藉jiè、炽热chì、潜力qián。"
  },
  {
    "id": "c02",
    "subject": "语文",
    "topic": "字形",
    "stem": "下列词语中没有错别字的一项是",
    "options": [
      "再接再励",
      "迫不急待",
      "一筹莫展",
      "走头无路"
    ],
    "answer": 2,
    "explanation": "正确写法是“一筹莫展”；其余应为再接再厉、迫不及待、走投无路。"
  },
  {
    "id": "c03",
    "subject": "语文",
    "topic": "成语",
    "stem": "下列句子中，成语使用恰当的一项是",
    "options": [
      "同学们在操场上排队，显得参差不齐、整整齐齐。",
      "经过反复练习，他解这类题已经得心应手。",
      "这篇短文内容空洞，却被老师称赞为妙手回春。",
      "面对简单问题，我们也要危言危行，故意夸大。"
    ],
    "answer": 1,
    "explanation": "“得心应手”表示技艺纯熟，使用符合语境。"
  },
  {
    "id": "c04",
    "subject": "语文",
    "topic": "病句",
    "stem": "下列句子中没有语病的一项是",
    "options": [
      "通过这次复习，使我找到了薄弱环节。",
      "学校开展了以“诚信考试”为主题的教育活动。",
      "能否坚持练习，是提高成绩的关键。",
      "我们要防止类似问题不再发生。"
    ],
    "answer": 1,
    "explanation": "B项结构完整；A缺少主语，C两面对一面，D否定不当。"
  },
  {
    "id": "c05",
    "subject": "语文",
    "topic": "标点",
    "stem": "下列句子中，标点符号使用正确的一项是",
    "options": [
      "他说，“今天先复习基础，明天再做综合题。”",
      "他说：“今天先复习基础，明天再做综合题。”",
      "他说：“今天先复习基础”，明天再做综合题。",
      "他说；“今天先复习基础，明天再做综合题。”"
    ],
    "answer": 1,
    "explanation": "提示语在前，后用冒号，完整引用的话放在引号内。"
  },
  {
    "id": "c06",
    "subject": "语文",
    "topic": "文言实词",
    "stem": "“学而时习之，不亦说乎”中“说”的意思是",
    "options": [
      "说话",
      "劝说",
      "同“悦”，愉快",
      "解释"
    ],
    "answer": 2,
    "explanation": "“说”通“悦”，表示内心感到愉快。"
  },
  {
    "id": "c07",
    "subject": "语文",
    "topic": "文言翻译",
    "stem": "“三人行，必有我师焉”的意思最准确的一项是",
    "options": [
      "三个人同行，其中一定有我的老师。",
      "多人同行，其中一定有值得我学习的人。",
      "只有三个人才能一起拜师。",
      "老师必须带着三名学生出行。"
    ],
    "answer": 1,
    "explanation": "句子强调善于向身边的人学习，而不是实指三个人或正式老师。"
  },
  {
    "id": "c08",
    "subject": "语文",
    "topic": "现代文阅读",
    "stem": "阅读：小林每次整理错题，不只抄答案，还会写下错误原因，并在一周后重新完成。材料主要说明",
    "options": [
      "抄写答案比做题更重要",
      "错题数量越多越好",
      "有效复盘需要分析原因并再次检验",
      "一周只能复习一次"
    ],
    "answer": 2,
    "explanation": "材料的重点是分析错误原因，并通过再次作答检验掌握情况。"
  },
  {
    "id": "c09",
    "subject": "语文",
    "topic": "诗歌鉴赏",
    "stem": "“雨后青山净，风来竹影斜”营造的意境最接近",
    "options": [
      "热烈喧闹",
      "清新宁静",
      "悲壮苍凉",
      "紧张急促"
    ],
    "answer": 1,
    "explanation": "雨后青山与风中竹影共同营造清新、安静的画面。"
  },
  {
    "id": "c10",
    "subject": "语文",
    "topic": "写作审题",
    "stem": "以“在快节奏中学会慢下来”为材料，最合适的立意是",
    "options": [
      "做任何事都越慢越好",
      "完全拒绝现代生活",
      "在效率与思考之间保持平衡",
      "只要休息就一定成功"
    ],
    "answer": 2,
    "explanation": "材料强调在快节奏中保留思考与沉淀，而非否定效率。"
  },
  {
    "id": "e01",
    "subject": "英语",
    "topic": "一般现在时",
    "stem": "She ___ to school by bus every day.",
    "options": [
      "go",
      "goes",
      "went",
      "going"
    ],
    "answer": 1,
    "explanation": "主语She为第三人称单数，一般现在时谓语用goes。"
  },
  {
    "id": "e02",
    "subject": "英语",
    "topic": "固定搭配",
    "stem": "Tom is interested ___ computer programming.",
    "options": [
      "at",
      "in",
      "on",
      "for"
    ],
    "answer": 1,
    "explanation": "be interested in是固定搭配，表示“对……感兴趣”。"
  },
  {
    "id": "e03",
    "subject": "英语",
    "topic": "现在完成时",
    "stem": "We ___ in Huizhou since 2022.",
    "options": [
      "live",
      "lived",
      "have lived",
      "are living"
    ],
    "answer": 2,
    "explanation": "since 2022表示从过去持续到现在，使用现在完成时。"
  },
  {
    "id": "e04",
    "subject": "英语",
    "topic": "被动语态",
    "stem": "The classroom ___ every afternoon.",
    "options": [
      "cleans",
      "is cleaned",
      "cleaned",
      "is cleaning"
    ],
    "answer": 1,
    "explanation": "教室是被打扫，且表示经常发生，用一般现在时的被动语态。"
  },
  {
    "id": "e05",
    "subject": "英语",
    "topic": "条件状语从句",
    "stem": "If it rains tomorrow, we ___ at home.",
    "options": [
      "stay",
      "stayed",
      "will stay",
      "have stayed"
    ],
    "answer": 2,
    "explanation": "真实条件句遵循“主将从现”，主句用will stay。"
  },
  {
    "id": "e06",
    "subject": "英语",
    "topic": "There be句型",
    "stem": "There ___ two books and a pen on the desk.",
    "options": [
      "is",
      "are",
      "be",
      "has"
    ],
    "answer": 1,
    "explanation": "就近主语two books为复数，所以用There are。"
  },
  {
    "id": "e07",
    "subject": "英语",
    "topic": "情景交际",
    "stem": "—Would you like to join our study group? —___",
    "options": [
      "Yes, I'd love to.",
      "Never mind.",
      "You're welcome.",
      "That's all right."
    ],
    "answer": 0,
    "explanation": "接受邀请常用Yes, I’d love to。"
  },
  {
    "id": "e08",
    "subject": "英语",
    "topic": "词义理解",
    "stem": "You can keep the library book for two weeks. The word “keep” means",
    "options": [
      "buy",
      "borrow and hold",
      "write",
      "sell"
    ],
    "answer": 1,
    "explanation": "这里keep表示借到后可以保留一段时间。"
  },
  {
    "id": "e09",
    "subject": "英语",
    "topic": "完形填空",
    "stem": "A healthy lifestyle includes eating well and ___ regularly.",
    "options": [
      "exercise",
      "exercising",
      "exercised",
      "to exercised"
    ],
    "answer": 1,
    "explanation": "and连接并列结构，前面是eating，后面用exercising。"
  },
  {
    "id": "e10",
    "subject": "英语",
    "topic": "阅读主旨",
    "stem": "Read: Li Hua makes a weekly plan, finishes the hardest task first, and checks his progress every evening. What is the passage mainly about?",
    "options": [
      "How to manage study time",
      "How to cook dinner",
      "How to choose a school",
      "How to play sports"
    ],
    "answer": 0,
    "explanation": "计划任务、安排先后和检查进度都属于学习时间管理。"
  }
];
