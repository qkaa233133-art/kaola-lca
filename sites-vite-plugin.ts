"use client";

import { useEffect, useState } from "react";
import SpecularButton from "./SpecularButton";

const teachers = [
  {
    name: "叶鸿发",
    subject: "数学主讲 · 教研导师",
    image: "/teacher-ye-hongfa.jpg",
    imageClass: "portrait-ye",
    headline: ["把数学难点，", "拆成可以", "拿到的分"],
    profile:
      "数学教育专业。2024年获评惠州市优秀教育工作者；2022年参与编写“十四五”职业教育创新教材，任《数学》基础模块上下册副主编；主编高职高考校本教材《广东省3+证书考试数学》。长期深耕高职高考数学一线教学与教研，授课风格鲜明，注重突破难点与高效提分。多次指导中职师生参赛，斩获多项省、市级竞赛奖项。",
    facts: ["2024 惠州市优秀教育工作者", "“十四五”教材副主编", "高职高考校本教材主编"],
    quote: "拆清思路，突破难点，让每一步训练都指向得分。",
  },
  {
    name: "赖茜颖",
    subject: "英语主讲 · 分层教学导师",
    image: "/teacher-lai-qianying.jpg",
    imageClass: "portrait-lai",
    headline: ["先夯实基础", "再把方法", "练成能力"],
    profile:
      "全日制本科，专注中职英语与高职高考英语备考，精准把握考情、考点与命题方向。教学注重基础夯实、题型拆解与提分技巧训练，擅长分层教学和学习方法指导，课堂高效务实，重视互动与方法总结。2026年所带学生获得高职高考年级英语单科第一，取得145/150分，并帮助多名学生实现显著提分，深受学生信赖。",
    facts: ["英语单科 145 / 150", "考情与题型精准拆解", "分层教学与方法指导"],
    quote: "把知识落实到方法，再把方法稳定成分数。",
  },
  {
    name: "张懿",
    subject: "语文主讲 · 题型教研导师",
    image: "/teacher-zhang-yi.jpg",
    imageClass: "portrait-zhang",
    headline: ["读懂题目，", "也写出", "有分量的答案"],
    profile:
      "汉语言文学类全日制本科科班出身，拥有多年高职高考语文一线授课经验，获评优秀教师，参与编撰高职语文校本教材，多次指导学生征文获得市、校奖项。帮助基础薄弱学生在短期内普遍提分40+，历届学生最高分120分。深耕“3+证书”领域，善于题型拆解与答题技巧总结，授课深入浅出、注重分层适配，广受学生认可。",
    facts: ["基础薄弱学生提分 40+", "历届学生最高 120 分", "高职语文校本教材参编"],
    quote: "纵横千里独行客，何惧前路雨潇潇。",
  },
];

const ROTATION_MS = 5000;

export default function TeacherHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const teacher = teachers[activeIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % teachers.length);
    }, ROTATION_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="faculty-hero" aria-label="考啦教育优秀师资">
      <div className="faculty-background-word" aria-hidden="true">
        MENTORS
      </div>

      <div className="faculty-copy" key={`copy-${teacher.name}`}>
        <p className="faculty-kicker">考啦教育 · 高职高考教学团队</p>
        <h1>
          {teacher.headline.map((line, index) =>
            index === teacher.headline.length - 1 ? (
              <em key={line}>{line}</em>
            ) : (
              <span key={line}>{line}</span>
            ),
          )}
        </h1>
        <div className="faculty-name-line">
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
        <div className="faculty-actions">
          <SpecularButton
            className="faculty-primary-action"
            href="#contact"
          >
            微信咨询
            <span aria-hidden="true">→</span>
          </SpecularButton>
          <a className="faculty-secondary-action" href="#course">
            全科全程A班 ¥4,980
          </a>
        </div>
      </div>

      <div className="faculty-portrait-stage" key={`image-${teacher.name}`}>
        <div className="faculty-portrait-halo" aria-hidden="true" />
        <img
          className={`faculty-portrait ${teacher.imageClass}`}
          src={teacher.image}
          alt={`${teacher.name}老师`}
        />
      </div>

      <aside className="faculty-profile-card" key={`profile-${teacher.name}`}>
        <div className="faculty-profile-topline">
          <span>TEACHER PROFILE</span>
          <small>
            0{activeIndex + 1} / 0{teachers.length}
          </small>
        </div>
        <div className="faculty-profile-heading">
          <div>
            <span>主讲教师</span>
            <h2>{teacher.name}</h2>
          </div>
          <strong>{teacher.subject.split(" · ")[0]}</strong>
        </div>
        <p className="faculty-biography">{teacher.profile}</p>
        <ul className="faculty-facts">
          {teacher.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <blockquote>“{teacher.quote}”</blockquote>
      </aside>

      <div className="faculty-switcher" aria-label="切换教师">
        {teachers.map((item, index) => (
          <button
            className={index === activeIndex ? "active" : ""}
            type="button"
            key={item.name}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            aria-label={`查看${item.name}老师介绍`}
          >
            <img src={item.image} alt="" aria-hidden="true" />
            <span>
              <small>0{index + 1}</small>
              <strong>{item.name}</strong>
              <em>{item.subject.split(" · ")[0]}</em>
            </span>
          </button>
        ))}
      </div>

      <div className="faculty-status-bar">
        <span>考啦教育 · 惠州</span>
        <strong>{teacher.subject}</strong>
        <div className="faculty-auto-status">
          <span>5S AUTO PLAY</span>
          <i key={`progress-${activeIndex}`} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
