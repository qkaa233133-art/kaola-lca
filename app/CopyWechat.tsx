"use client";

import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    id: "Hue_Ge",
    name: "叶老师",
    tag: "主推荐",
    image: "/wechat-ye.jpg",
    alt: "叶老师微信二维码",
    featured: true,
  },
  {
    id: "Rvi659",
    name: "备用咨询",
    tag: "备用微信",
    image: "/wechat-backup.jpg",
    alt: "备用微信 Rvi659 二维码",
    featured: false,
  },
];
const consultationRemark = "高职高考咨询";

export default function CopyWechat() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [copiedId, setCopiedId] = useState("");
  const [remarkCopied, setRemarkCopied] = useState(false);
  const [modalOrigin, setModalOrigin] = useState({
    x: "50vw",
    y: "50vh",
  });
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  function openModal(
    clientX?: number,
    clientY?: number,
    trigger?: Element | null,
  ) {
    let x = clientX ?? 0;
    let y = clientY ?? 0;

    if ((!x || !y) && trigger) {
      const rect = trigger.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    setModalOrigin({
      x: x ? `${x}px` : "50vw",
      y: y ? `${y}px` : "50vh",
    });
    setClosing(false);
    setOpen(true);
  }

  function closeModal() {
    if (!open || closing) return;
    setClosing(true);

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      closeTimerRef.current = null;
    }, 440);
  }

  useEffect(() => {
    function openFromPageLink(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest('a[href="#contact"]');
      if (!trigger) return;

      event.preventDefault();
      openModal(event.clientX, event.clientY, trigger);
    }

    document.addEventListener("click", openFromPageLink);
    return () => document.removeEventListener("click", openFromPageLink);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  async function copyWechat(id: string) {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(""), 1800);
    } catch {
      setCopiedId("");
    }
  }

  async function copyRemark() {
    try {
      await navigator.clipboard.writeText(consultationRemark);
      setRemarkCopied(true);
      window.setTimeout(() => setRemarkCopied(false), 1800);
    } catch {
      setRemarkCopied(false);
    }
  }

  return (
    <>
      <div className="wechat-card">
        <span className="wechat-label">微信咨询</span>
        <div className="wechat-prompt">
          <span>扫码或复制微信号</span>
          <h3>点击唤起咨询方式</h3>
          <p>
            默认推荐添加 <strong>Hue_Ge</strong>，如暂未通过，可添加备用微信。
          </p>
        </div>
        <button
          className="open-wechat-button"
          type="button"
          onClick={(event: ReactMouseEvent<HTMLButtonElement>) =>
            openModal(event.clientX, event.clientY, event.currentTarget)
          }
          aria-haspopup="dialog"
        >
          查看微信二维码
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {open ? (
        <div
          className={`wechat-modal-backdrop${closing ? " is-closing" : ""}`}
          style={
            {
              "--wechat-origin-x": modalOrigin.x,
              "--wechat-origin-y": modalOrigin.y,
            } as CSSProperties
          }
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            className="wechat-modal"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="wechat-modal-title"
          >
            <header className="wechat-modal-header">
              <div>
                <span>WECHAT CONSULTATION</span>
                <h2 id="wechat-modal-title">选择微信 开始咨询</h2>
                <p>建议优先添加主推荐微信，便于老师更快响应。</p>
                <div className="wechat-remark">
                  <span>添加好友时请备注</span>
                  <strong>{consultationRemark}</strong>
                  <button
                    type="button"
                    onClick={copyRemark}
                    aria-label={`复制微信备注 ${consultationRemark}`}
                  >
                    {remarkCopied ? "已复制 ✓" : "复制备注"}
                  </button>
                </div>
              </div>
              <button
                className="wechat-modal-close"
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                aria-label="关闭微信咨询弹窗"
              >
                ×
              </button>
            </header>

            <div className="wechat-option-grid">
              {contacts.map((contact) => (
                <article
                  className={`contact-option${contact.featured ? " featured" : ""}`}
                  key={contact.id}
                >
                  <div className="contact-option-heading">
                    <span>{contact.tag}</span>
                    <small>{contact.name}</small>
                  </div>
                  <a
                    className="contact-qr-link"
                    href={contact.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`查看${contact.name}完整微信二维码`}
                  >
                    <img
                      className="contact-qr-image"
                      src={contact.image}
                      alt={contact.alt}
                    />
                    <small>点击二维码查看原图</small>
                  </a>
                  <div className="contact-id-row">
                    <div>
                      <span>微信号</span>
                      <strong>{contact.id}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyWechat(contact.id)}
                      aria-label={`复制微信号 ${contact.id}`}
                    >
                      {copiedId === contact.id ? "已复制 ✓" : "复制微信号"}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="wechat-modal-note" aria-live="polite">
              {copiedId
                ? `微信号 ${copiedId} 已复制，可打开微信添加好友`
                : "电脑端可直接扫码，手机端可点击二维码查看原图后保存。"}
            </p>
          </section>
        </div>
      ) : null}
    </>
  );
}
