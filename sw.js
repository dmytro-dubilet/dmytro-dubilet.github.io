// Roary's web pushes — Alfred cards and Roary messages (supabase/functions/_shared/alfredPush.ts, chat-push → Settings →
// Notifications on /my-settings).
// Only shows a pushed notification and opens the page on a click: no fetch handler, nothing is cached — the app is
// always loaded from the network as without this worker.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let msg = {};
  try { msg = event.data ? event.data.json() : {}; } catch { msg = { body: event.data ? event.data.text() : "" }; }
  event.waitUntil((async () => {
    // a Roary message (tag chat:<conversation>, supabase/functions/chat-push) while the employee looks at that very chat
    // in a focused tab: shown silently and closed at once — Safari drops a subscription whose pushes show nothing
    let looking = false;
    if (typeof msg.tag === "string" && msg.tag.startsWith("chat:")) {
      const conv = msg.tag.slice(5);
      const all = await self.clients.matchAll({ type: "window" });
      looking = all.some((c) => c.focused && c.visibilityState === "visible" && new URL(c.url).pathname === "/messages"
        && new URL(c.url).searchParams.get("c") === conv);
    }
    const tag = msg.tag || "alfred";
    await self.registration.showNotification(msg.title || "Alfred", {
      body: msg.body || "",
      tag,
      renotify: !looking,
      silent: looking,
      icon: "/icons/roary-192.png",
      data: { url: msg.url || "/" },
    });
    if (looking) for (const n of await self.registration.getNotifications({ tag })) n.close();
  })());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL((event.notification.data && event.notification.data.url) || "/", self.location.origin).href;
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    const target = new URL(url);
    // a tab already on the target page (/messages for a Roary message), else the Alfred page, else any Roary tab
    const page = all.find((c) => new URL(c.url).pathname === target.pathname) || all.find((c) => new URL(c.url).pathname === "/") || all[0];
    if (page) {
      await page.focus();
      // Alfred lives at «/», a prefix of every Roary URL — compare path + query exactly
      const here = new URL(page.url);
      if ("navigate" in page && here.pathname + here.search !== target.pathname + target.search) await page.navigate(url).catch(() => {});
      return;
    }
    await self.clients.openWindow(url);
  })());
});
