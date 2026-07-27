import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", String(Date.now()));
const { default: worker } = await import(workerUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function render(path) {
  return worker.fetch(new Request("http://localhost" + path, { headers: { accept: "text/html" } }), env, ctx);
}

test("renders the gateway homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /拨开升学迷雾/);
  assert.match(html, /免费测评/);
});

test("renders the education detail page", async () => {
  const response = await render("/kaola");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /全科全程/);
  assert.match(html, /开始免费测评/);
});

test("renders the assessment route and metadata", async () => {
  const response = await render("/assessment");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /用30道题/);
  assert.match(html, /无需填写手机号/);
  assert.match(html, /og-assessment\.png/);
});
