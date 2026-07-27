"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { questionBank, type Question, type Subject } from "./assessmentQuestions";

type Phase = "intro" | "profile" | "quiz" | "result";
type Profile = {
  examYear: string;
  attendance: "offline" | "hybrid" | "online" | "";
  weakSubject: string;
};
type Recommendation = {
  title: string;
  label: string;
  match: number;
  reason: string;
  nextStep: string;
};
type AssessmentResult = {
  scores: Record<Subject, number>;
  total: number;
  recommendation: Recommendation;
};

const subjects: Subject[] = ["数学", "语文", "英语"];

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function createQuestionSet() {
  return subjects.flatMap((subject) =>
    shuffle(questionBank.filter((question) => question.subject === subject)),
  );
}

function getRecommendation(
  scores: Record<Subject, number>,
  total: number,
  profile: Profile,
): Recommendation {
  const lowest = subjects.reduce((current, subject) =>
    scores[subject] < scores[current] ? subject : current,
  );

  if (profile.attendance === "online") {
    return {
      title: "全科全程B班",
      label: "线上全科方案",
      match: total <= 20 ? 88 : 82,
      reason: "你目前无法稳定到校，建议先用直播与录播完成全科系统学习，再配合线上答疑。",
      nextStep: "重点关注" + lowest + "，咨询老师后再确定直播节奏与阶段任务。",
    };
  }
  if (total <= 14) {
    return {
      title: "全科全程A班",
      label: "线下系统打基础",
      match: 96,
      reason: "当前三科基础需要成体系地补齐，线下面授、直播、录播和课后答疑更适合持续推进。",
      nextStep: "先从" + lowest + "基础模块开始，建议预约到校完成一次更细的入学诊断。",
    };
  }
  if (total <= 20) {
    return {
      title: "全科全程A班",
      label: "线下分层提升",
      match: 92,
      reason: "你已经具备部分基础，但知识连接和题型应用仍需要老师带着梳理，适合线下分层学习。",
      nextStep: "把" + lowest + "作为第一补弱科目，同时保持另外两科的学习节奏。",
    };
  }
  if (profile.examYear === "2028" || profile.weakSubject === "三科都需要") {
    return {
      title: "全科全程A班",
      label: "线下长期规划",
      match: 88,
      reason: "你有较完整的备考时间，适合在线下课堂中稳定推进三科，并通过阶段复盘继续提升。",
      nextStep: "优先解决" + lowest + "短板，再进入综合题与限时训练。",
    };
  }
  if (scores[lowest] <= 5) {
    return {
      title: "全科全程A班",
      label: "线下重点补弱",
      match: 89,
      reason: "整体基础尚可，但" + lowest + "短板较明显，A班的分层教学更方便保持全科节奏并重点补弱。",
      nextStep: "建议携带最近一次试卷到校，让老师进一步判断" + lowest + "失分类型。",
    };
  }
  return {
    title: "线下冲刺提升方案",
    label: "题型与速度强化",
    match: total >= 26 ? 82 : 85,
    reason: "三科基础较均衡，现阶段更适合通过线下限时训练、题型拆解和错题复盘提高稳定性。",
    nextStep: "建议预约一次到校测评，再根据目标院校确定冲刺强度。",
  };
}

export default function AssessmentQuiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [profile, setProfile] = useState<Profile>({
    examYear: "",
    attendance: "",
    weakSubject: "",
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [copied, setCopied] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedOption = currentQuestion ? answers[currentQuestion.id] : undefined;
  const profileReady = Boolean(profile.examYear && profile.attendance && profile.weakSubject);
  const progress = useMemo(
    () => (questions.length ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0),
    [currentIndex, questions.length],
  );

  function beginQuiz() {
    setQuestions(createQuestionSet());
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setPhase("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finishAssessment() {
    const scores: Record<Subject, number> = { 数学: 0, 语文: 0, 英语: 0 };
    for (const question of questions) {
      if (answers[question.id] === question.answer) scores[question.subject] += 1;
    }
    const total = scores.数学 + scores.语文 + scores.英语;
    setResult({ scores, total, recommendation: getRecommendation(scores, total, profile) });
    setPhase("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextQuestion() {
    if (selectedOption === undefined) return;
    if (currentIndex === questions.length - 1) finishAssessment();
    else setCurrentIndex((index) => index + 1);
  }

  function restart() {
    setPhase("intro");
    setQuestions([]);
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copyResult() {
    if (!result) return;
    const text =
      "考啦教育免费测评：数学" + result.scores.数学 + "/10，语文" +
      result.scores.语文 + "/10，英语" + result.scores.英语 + "/10，总分" +
      result.total + "/30。推荐" + result.recommendation.title +
      "，班型匹配度" + result.recommendation.match + "% 。";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="assessment-page">
      <header className="assessment-header">
        <a className="brand" href="/kaola" aria-label="返回考啦教育">
          <span className="brand-mark">考</span>
          <span className="brand-copy">
            <strong>考啦教育</strong>
            <small>KAOLA EDUCATION</small>
          </span>
        </a>
        <div className="assessment-header-meta">
          <span>免费测评</span>
          <a href="/kaola">返回课程页</a>
        </div>
      </header>

      {phase === "intro" && (
        <section className="assessment-intro">
          <div className="assessment-intro-copy">
            <p className="assessment-kicker">30 QUESTIONS · 3 SUBJECTS</p>
            <h1>用30道题<br />看清你的<em>备考起点</em></h1>
            <p>语文、数学、英语各10题，题序随机。完成后获得三科基础分析和线下班型建议。</p>
            <button className="assessment-start-button" type="button" onClick={() => setPhase("profile")}>
              开始免费测评 <span aria-hidden="true">→</span>
            </button>
            <small>预计用时8—12分钟 · 无需填写手机号</small>
          </div>
          <div className="assessment-intro-board" aria-label="测评说明">
            <div className="assessment-board-number">30</div>
            <div className="assessment-board-grid">
              <article><span>01</span><strong>数学 10题</strong><small>函数 · 数列 · 几何 · 概率</small></article>
              <article><span>02</span><strong>语文 10题</strong><small>基础知识 · 阅读 · 表达</small></article>
              <article><span>03</span><strong>英语 10题</strong><small>词汇语法 · 阅读 · 应用</small></article>
            </div>
          </div>
        </section>
      )}

      {phase === "profile" && (
        <section className="assessment-profile">
          <div className="assessment-stage-heading">
            <p className="assessment-kicker">BEFORE THE QUIZ</p>
            <span>不计分 · 用于匹配学习方式</span>
            <h1>先了解你的备考情况</h1>
          </div>
          <div className="profile-question-list">
            <fieldset>
              <legend><span>01</span>计划参加哪一年考试？</legend>
              <div className="profile-options">
                {["2027", "2028", "暂未确定"].map((value) => (
                  <button className={profile.examYear === value ? "is-selected" : ""} key={value} type="button" onClick={() => setProfile((item) => ({ ...item, examYear: value }))}>
                    {value === "暂未确定" ? value : value + "年"}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend><span>02</span>是否方便到惠州江北校区学习？</legend>
              <div className="profile-options">
                {[["offline", "可以长期线下"], ["hybrid", "线下为主，偶尔线上"], ["online", "目前只能线上"]].map(([value, label]) => (
                  <button className={profile.attendance === value ? "is-selected" : ""} key={value} type="button" onClick={() => setProfile((item) => ({ ...item, attendance: value as Profile["attendance"] }))}>
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend><span>03</span>目前感觉最需要提高哪一科？</legend>
              <div className="profile-options">
                {["数学", "语文", "英语", "三科都需要"].map((value) => (
                  <button className={profile.weakSubject === value ? "is-selected" : ""} key={value} type="button" onClick={() => setProfile((item) => ({ ...item, weakSubject: value }))}>
                    {value}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="assessment-stage-actions">
            <button type="button" onClick={() => setPhase("intro")}>返回</button>
            <button className="assessment-solid-button" disabled={!profileReady} type="button" onClick={beginQuiz}>进入答题 <span aria-hidden="true">→</span></button>
          </div>
        </section>
      )}

      {phase === "quiz" && currentQuestion && (
        <section className="assessment-quiz">
          <div className="quiz-progress">
            <div><span>{currentQuestion.subject}</span><strong>{String(currentIndex + 1).padStart(2, "0")} / {questions.length}</strong></div>
            <div className="quiz-progress-track" aria-label={"答题进度" + progress + "%"}><i style={{ width: progress + "%" }} /></div>
            <small>{progress}%</small>
          </div>
          <article className="quiz-card">
            <div className="quiz-card-meta"><span>{currentQuestion.topic}</span><small>单项选择题</small></div>
            <h1>{currentQuestion.stem}</h1>
            <div className="quiz-options" role="radiogroup" aria-label="请选择答案">
              {currentQuestion.options.map((option, optionIndex) => (
                <button className={selectedOption === optionIndex ? "is-selected" : ""} key={option} type="button" role="radio" aria-checked={selectedOption === optionIndex} onClick={() => setAnswers((items) => ({ ...items, [currentQuestion.id]: optionIndex }))}>
                  <span>{String.fromCharCode(65 + optionIndex)}</span>{option}<i aria-hidden="true" />
                </button>
              ))}
            </div>
          </article>
          <div className="quiz-navigation">
            <button disabled={currentIndex === 0} type="button" onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}>← 上一题</button>
            <button className="assessment-solid-button" disabled={selectedOption === undefined} type="button" onClick={nextQuestion}>
              {currentIndex === questions.length - 1 ? "提交测评" : "下一题"} <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {phase === "result" && result && (
        <section className="assessment-result">
          <div className="result-heading">
            <div className="match-ring" style={{ "--match-angle": result.recommendation.match * 3.6 + "deg" } as CSSProperties}>
              <strong>{result.recommendation.match}%</strong><span>班型匹配度</span>
            </div>
            <div>
              <p className="assessment-kicker">YOUR LEARNING PLAN</p>
              <span className="result-label">{result.recommendation.label}</span>
              <h1>推荐你选择<em>{result.recommendation.title}</em></h1>
              <p>{result.recommendation.reason}</p>
            </div>
          </div>
          <div className="result-grid">
            <article className="score-panel">
              <div className="result-panel-title"><span>三科得分</span><strong>{result.total} / 30</strong></div>
              {subjects.map((subject) => (
                <div className="subject-score" key={subject}>
                  <div><span>{subject}</span><strong>{result.scores[subject]} / 10</strong></div>
                  <div className="subject-score-track"><i style={{ width: result.scores[subject] * 10 + "%" }} /></div>
                </div>
              ))}
            </article>
            <article className="next-step-panel">
              <span>NEXT STEP</span><h2>下一步建议</h2><p>{result.recommendation.nextStep}</p>
              <div className="result-actions">
                <a href="/kaola#contact">微信咨询老师 <span aria-hidden="true">↗</span></a>
                <button type="button" onClick={copyResult}>{copied ? "已复制测评结果" : "复制测评结果"}</button>
              </div>
            </article>
          </div>
          <details className="wrong-answer-review">
            <summary>查看错题与解析 <span aria-hidden="true">＋</span></summary>
            <div>
              {questions.filter((question) => answers[question.id] !== question.answer).map((question) => (
                <article key={question.id}>
                  <span>{question.subject} · {question.topic}</span><h3>{question.stem}</h3>
                  <p>正确答案：{String.fromCharCode(65 + question.answer)} · {question.options[question.answer]}</p>
                  <small>{question.explanation}</small>
                </article>
              ))}
              {questions.every((question) => answers[question.id] === question.answer) && <p className="perfect-score">全部答对，基础表现非常稳定。</p>}
            </div>
          </details>
          <div className="result-footer">
            <p>本测评为原创基础诊断题，仅用于初步学习规划与课程建议，不代表正式考试成绩、录取概率或报考资格。</p>
            <button type="button" onClick={restart}>重新测评</button>
          </div>
        </section>
      )}
    </main>
  );
}
