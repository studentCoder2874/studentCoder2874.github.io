---
layout: default
title: Blog
permalink: /blog/
---

<section class="page-section">
  <div class="container">
    <div class="page-header fade-in">
      <h1 class="page-title">Blog</h1>
      <p class="page-subtitle">Thoughts, tutorials, and musings.</p>
    </div>

    {% if site.posts.size > 0 %}
    <div class="posts-grid">
      {% for post in site.posts %}
        {% include post-card.html post=post %}
      {% endfor %}
    </div>
    {% else %}
    <p class="fade-in" style="color: var(--text-secondary); text-align: center; padding: 3rem 0;">
      No posts yet. Check back soon!
    </p>
    {% endif %}
  </div>
</section>
