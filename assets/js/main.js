// assets/js/main.js
(function () {
  const byId = (id) => document.getElementById(id);

  const yearEl = byId("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const navToggle = byId("navToggle");
  const navMenu = byId("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (!navMenu.classList.contains("is-open")) return;
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.closest("#navMenu") || target.closest("#navToggle")) return;
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  async function loadJSON(path) {
    const res = await fetch(path, { cache: "no-cache" });
    if (!res.ok) throw new Error("Failed to load: " + path);
    return await res.json();
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  function renderMarkdown(md) {
    md = md.replace(/\r\n/g, "\n");

    const lines = md.split("\n");
    const out = [];
    let inCode = false;
    let codeLang = "";
    let inList = false;

    const closeList = () => {
      if (inList) { out.push("</ul>"); inList = false; }
    };

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      const codeFence = line.match(/^```(\w+)?\s*$/);
      if (codeFence) {
        if (!inCode) {
          closeList();
          inCode = true;
          codeLang = (codeFence[1] || "").toLowerCase();
          out.push(`<pre><code data-lang="${escapeHtml(codeLang)}">`);
        } else {
          inCode = false;
          out.push("</code></pre>");
        }
        continue;
      }

      if (inCode) {
        out.push(escapeHtml(line) + "\n");
        continue;
      }

      if (/^\s*$/.test(line)) {
        closeList();
        continue;
      }

      const h = line.match(/^(#{1,3})\s+(.*)$/);
      if (h) {
        closeList();
        const level = h[1].length;
        out.push(`<h${level}>${inlineMarkdown(h[2])}</h${level}>`);
        continue;
      }

      const bq = line.match(/^>\s?(.*)$/);
      if (bq) {
        closeList();
        out.push(`<blockquote>${inlineMarkdown(bq[1])}</blockquote>`);
        continue;
      }

      const li = line.match(/^\s*[-*]\s+(.*)$/);
      if (li) {
        if (!inList) { out.push("<ul>"); inList = true; }
        out.push(`<li>${inlineMarkdown(li[1])}</li>`);
        continue;
      }

      closeList();
      out.push(`<p>${inlineMarkdown(line)}</p>`);
    }

    if (inCode) out.push("</code></pre>");
    closeList();

    return out.join("\n");
  }

  function inlineMarkdown(s) {
    let x = escapeHtml(s);

    x = x.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);
    x = x.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => {
      const safeHref = href.startsWith("javascript:") ? "#" : href;
      const target = safeHref.startsWith("http") ? ` target="_blank" rel="noopener noreferrer"` : "";
      return `<a href="${escapeHtml(safeHref)}"${target}>${text}</a>`;
    });
    x = x.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    x = x.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return x;
  }

  function readHashParam(name) {
    const hash = (location.hash || "").replace(/^#/, "");
    const params = new URLSearchParams(hash);
    return params.get(name);
  }

  function setHashParam(name, value) {
    const params = new URLSearchParams((location.hash || "").replace(/^#/, ""));
    if (value == null) params.delete(name);
    else params.set(name, value);
    location.hash = params.toString();
  }

  async function initBlog() {
    const blogListEl = byId("blogList");
    const postTitleEl = byId("postTitle");
    const postMetaEl = byId("postMeta");
    const postContentEl = byId("postContent");
    const searchEl = byId("blogSearch");

    if (!blogListEl || !postTitleEl || !postMetaEl || !postContentEl) return;

    let index;
    try {
      index = await loadJSON("../posts/index.json");
    } catch (e) {
      blogListEl.innerHTML = `<div class="muted">No posts yet. Add Markdown files to <code>/blog/posts/</code> and update <code>/posts/index.json</code>.</div>`;
      return;
    }

    const posts = (index.posts || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    function renderList(items) {
      if (!items.length) {
        blogListEl.innerHTML = `<div class="muted">No posts found.</div>`;
        return;
      }
      blogListEl.innerHTML = items.map(p => {
        const safeTitle = escapeHtml(p.title || "Untitled");
        const safeDate = escapeHtml(p.date || "");
        const safeSlug = escapeHtml(p.slug || "");
        const safeExcerpt = escapeHtml(p.excerpt || "");
        return `
          <a class="post-item" href="#post=${encodeURIComponent(safeSlug)}" data-slug="${safeSlug}">
            <div class="post-item__col">
              <h3 class="post-item__title">${safeTitle}</h3>
              <p class="post-item__meta">${safeDate}</p>
              ${safeExcerpt ? `<p class="post-item__excerpt">${safeExcerpt}</p>` : ``}
            </div>
          </a>
        `;
      }).join("\n");
    }

    async function openPostBySlug(slug) {
      const found = posts.find(p => p.slug === slug);
      if (!found) return;

      postTitleEl.textContent = found.title || "Untitled";
      postMetaEl.textContent = found.date ? `${found.date}${found.tags && found.tags.length ? " · " + found.tags.join(", ") : ""}` : "";

      try {
        const md = await (await fetch(`posts/${slug}.md`, { cache: "no-cache" })).text();
        const html = renderMarkdown(md);
        postContentEl.innerHTML = html;

        document.title = `${found.title || "Blog Post"} — Filipe Verrone de Lima`;
        ensurePostMeta(found);
      } catch (e) {
        postContentEl.innerHTML = `<p class="muted">Failed to load post.</p>`;
      }
    }

    function ensurePostMeta(post) {
      const desc = post.excerpt || "Blog post.";
      const baseUrl = window.location.href.split("#")[0];
      const url = `${baseUrl}#post=${encodeURIComponent(post.slug)}`;

      setMeta("description", desc);
      setOG("og:title", `${post.title} — Filipe Verrone de Lima`);
      setOG("og:description", desc);
      setOG("og:url", url);
      setOG("og:type", "article");
    }

    function setMeta(name, content) {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    function setOG(property, content) {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    renderList(posts);

    const initialSlug = readHashParam("post");
    if (initialSlug) {
      await openPostBySlug(initialSlug);
    }

    window.addEventListener("hashchange", async () => {
      const slug = readHashParam("post");
      if (slug) await openPostBySlug(slug);
    });

    if (searchEl) {
      searchEl.addEventListener("input", () => {
        const q = searchEl.value.trim().toLowerCase();
        if (!q) { renderList(posts); return; }
        const filtered = posts.filter(p => {
          const hay = `${p.title||""} ${p.excerpt||""} ${(p.tags||[]).join(" ")}`.toLowerCase();
          return hay.includes(q);
        });
        renderList(filtered);
      });
    }
  }

  async function initHomeLatest() {
    const el = document.getElementById("latestPosts");
    if (!el) return;

    try {
      const index = await (await fetch("posts/index.json", { cache: "no-cache" })).json();
      const posts = (index.posts || []).slice().sort((a,b) => (b.date||"").localeCompare(a.date||"")).slice(0, 3);

      if (!posts.length) return;

      el.innerHTML = `<ul class="list">${posts.map(p => {
        const title = escapeHtml(p.title || "Untitled");
        const date = escapeHtml(p.date || "");
        const slug = encodeURIComponent(p.slug || "");
        return `<li><a href="blog/#post=${slug}">${title}</a> <span class="muted">(${date})</span></li>`;
      }).join("")}</ul>`;
    } catch (e) {
      return;
    }
  }

  initBlog();
  initHomeLatest();
})();
