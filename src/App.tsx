import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Trees, 
  Zap, 
  Heart, 
  Users, 
  MapPin, 
  ArrowRight, 
  RotateCcw, 
  Info,
  ChevronRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { 
  QUESTIONS, 
  CITIES, 
  Dimension, 
  DimensionScore, 
  Question 
} from './constants';
import { cn } from './lib/utils';

type Screen = 'hero' | 'quiz' | 'result';

const DIMENSION_LABELS: Record<Dimension, string> = {
  [Dimension.PACE]: '生活节奏',
  [Dimension.SOCIAL]: '社交密度',
  [Dimension.GROWTH]: '成长需求',
  [Dimension.ENVIRONMENT]: '环境偏好',
  [Dimension.RECOVERY]: '情绪补给',
};

const DIMENSION_ICONS: Record<Dimension, any> = {
  [Dimension.PACE]: Zap,
  [Dimension.SOCIAL]: Users,
  [Dimension.GROWTH]: BarChart3,
  [Dimension.ENVIRONMENT]: Building2,
  [Dimension.RECOVERY]: Heart,
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('hero');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<DimensionScore>({
    [Dimension.PACE]: 0,
    [Dimension.SOCIAL]: 0,
    [Dimension.GROWTH]: 0,
    [Dimension.ENVIRONMENT]: 0,
    [Dimension.RECOVERY]: 0,
  });

  // Calculate final scores and similarity
  const results = useMemo(() => {
    if (screen !== 'result') return null;

    // Normalize scores manually based on questions answered
    // Each dimension has 2 main questions and multiple contributors
    // Let's just use the raw accumulated scores for matching
    const profile = { ...scores };

    const ranked = CITIES.map(city => {
      let distance = 0;
      Object.values(Dimension).forEach(dim => {
        // Since we have 20 items, each dim gets 4 items worth of input (20/5 = 4)
        // Normalize to a 1-5 scale for consistency with city predefined scores
        const userVal = profile[dim as Dimension] / 4; 
        const cityVal = city.scores[dim as Dimension];
        distance += Math.pow(userVal - cityVal, 2);
      });
      return { 
        ...city, 
        matchScore: Math.round(Math.max(0, 100 - (Math.sqrt(distance) * 15))) 
      };
    }).sort((a, b) => b.matchScore - a.matchScore);

    return {
      profile,
      primary: ranked[0],
      others: ranked.slice(1, 4)
    };
  }, [screen, scores]);

  const handleAnswer = (question: Question, optionId: string) => {
    const option = question.options.find(o => o.id === optionId)!;
    
    // Update scores
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([dim, val]) => {
      newScores[dim as Dimension] += val;
    });
    setScores(newScores);
    setAnswers({ ...answers, [question.id]: optionId });

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setScreen('result');
    }
  };

  const reset = () => {
    setScreen('hero');
    setCurrentIdx(0);
    setAnswers({});
    setScores({
      [Dimension.PACE]: 0,
      [Dimension.SOCIAL]: 0,
      [Dimension.GROWTH]: 0,
      [Dimension.ENVIRONMENT]: 0,
      [Dimension.RECOVERY]: 0,
    });
  };

  return (
    <div className="min-h-screen bg-healing-bg flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {screen === 'hero' && (
          <motion.div 
            key="hero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-2xl w-full text-center space-y-10"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-healing-sand text-[10px] font-bold text-secondary uppercase tracking-[0.2em]"
              >
                <Sparkles size={12} className="text-accent" />
                CLAM 城市生活适配模型
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1]">
                寻找你心灵的<br/>
                <span className="text-accent italic serif">栖息之地</span>
              </h1>
              <p className="text-secondary text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                探索你与不同城市气质的内在共振。
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 py-4">
              {Object.entries(DIMENSION_LABELS).map(([key, label]) => {
                const Icon = DIMENSION_ICONS[key as Dimension];
                return (
                  <div key={key} className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-healing-sand flex items-center justify-center">
                      <Icon size={22} className="text-secondary" />
                    </div>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest">{label}</span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen('quiz')}
                className="bg-primary text-white px-10 py-5 rounded-full font-medium flex items-center justify-center gap-3 mx-auto transition-all hover:bg-secondary shadow-lg shadow-primary/10 group"
              >
                生成我的生活画像
                <ArrowRight size={20} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex flex-col items-center gap-1 opacity-40">
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.3em]">
                  CLAM: City Lifestyle Adaptation Model
                </p>
                <div className="w-24 h-[1px] bg-primary/20" />
              </div>
            </div>
          </motion.div>
        )}

        {screen === 'quiz' && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-neutral-200/50 border border-healing-sand space-y-12"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-healing-sand flex items-center justify-center text-primary text-xs font-bold">
                    {currentIdx + 1}
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    PROGRESS {Math.round(((currentIdx + 1) / QUESTIONS.length) * 100)}%
                  </span>
                </div>
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-healing-sage animate-pulse" />
                  {DIMENSION_LABELS[QUESTIONS[currentIdx].dimension]}
                </span>
              </div>
              <div className="h-1.5 bg-healing-bg rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                  className="h-full bg-healing-sage"
                />
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-2xl md:text-3xl font-medium text-primary leading-snug">
                {QUESTIONS[currentIdx].question}
              </h2>
              <div className="grid gap-4">
                {QUESTIONS[currentIdx].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(QUESTIONS[currentIdx], opt.id)}
                    className="group relative flex items-center justify-between p-6 rounded-2xl border border-healing-sand text-left transition-all hover:bg-healing-bg hover:border-healing-sage/30 hover:pl-8 active:scale-[0.99]"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-healing-sage group-hover:h-3/5 transition-all duration-300 rounded-r-full" />
                    <span className="text-secondary font-medium leading-relaxed">{opt.text}</span>
                    <ChevronRight size={18} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {screen === 'result' && results && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl border border-healing-sand overflow-hidden"
          >
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              {/* Left Column: Data & Stats */}
              <div className="p-8 md:p-14 space-y-12 bg-healing-bg">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-healing-sage/20 text-healing-sage text-[10px] uppercase font-bold tracking-widest rounded-full">
                    Dimension Analysis
                  </div>
                  <h3 className="text-4xl font-bold text-primary">五维生活画像</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    基于你的内心选择，描绘出一种独特的生活张力与平衡。
                  </p>
                </div>

                <div className="h-[300px] w-full radar-chart relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={
                      Object.entries(DIMENSION_LABELS).map(([key, label]) => ({
                        subject: label,
                        A: Math.min(100, Math.round((results.profile[key as Dimension] / 12) * 100)), // Normalize based on ~4 questions per dim * 3 avg score
                        fullMark: 100,
                      }))
                    }>
                      <PolarGrid stroke="#e5e5e5" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#84a59d', fontSize: 12, fontWeight: 600 }} />
                      <Radar
                        name="Profile"
                        dataKey="A"
                        stroke="#84a59d"
                        fill="#84a59d"
                        fillOpacity={0.2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase text-accent tracking-[0.2em] flex items-center gap-2">
                    <MapPin size={12} className="text-healing-sage" />
                    潜在匹配指数
                  </h4>
                  <div className="grid gap-3">
                    {results.others.map(city => (
                      <div key={city.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-healing-sand/50 backdrop-blur-sm">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-primary">{city.name}</span>
                          <span className="text-[10px] text-accent uppercase font-bold tracking-tighter">{city.type}</span>
                        </div>
                        <div className="text-xs font-mono font-bold text-healing-sage">
                          {city.matchScore}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Result */}
              <div className="p-8 md:p-14 space-y-10 flex flex-col justify-between border-l border-healing-sand">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-primary flex items-center justify-center text-healing-sand shadow-xl shadow-primary/20">
                        <Sparkles size={32} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-accent font-bold uppercase tracking-widest">Matched Sanctuary</span>
                        <span className="text-5xl font-bold tracking-tighter text-primary serif">{results.primary.name}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-healing-sand/50 text-xs font-bold text-secondary uppercase tracking-widest">
                      {results.primary.type}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <p className="text-secondary text-lg leading-relaxed italic font-serif">
                      “{results.primary.description}”
                    </p>
                    <div className="space-y-5">
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-1 h-4 bg-healing-sage rounded-full" />
                        适配解读
                      </h4>
                      <ul className="space-y-4">
                        {results.primary.explanation.map((exp, i) => (
                          <li key={i} className="text-sm text-secondary leading-relaxed flex gap-3">
                            <span className="text-accent font-mono font-bold pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-12 pt-8 border-t border-healing-sand/50">
                  <button
                    onClick={reset}
                    className="w-full py-5 rounded-2xl bg-healing-bg text-secondary font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-healing-sand transition-all border border-healing-sand active:scale-[0.98]"
                  >
                    <RotateCcw size={16} />
                    重新生成
                  </button>
                  <div className="flex flex-col items-center gap-2 opacity-30">
                    <p className="text-[8px] text-primary font-bold text-center uppercase tracking-[0.2em] max-w-xs leading-normal">
                      * 结果基于当前倾向模型，仅供参考<br />
                      CLAM CITY-LIFESTYLE MATCHING MODULE v2.1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
