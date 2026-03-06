---
layout: default
title: Projects
permalink: /projects/
---

<section class="page-section">
  <div class="container">
    <div class="page-header fade-in">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">A selection of things I've built.</p>
    </div>

    <div class="filter-bar fade-in" id="filter-bar">
      <button class="filter-btn active" data-filter="all">All</button>
      {% assign all_tags = site.projects | map: "tags" | join: "," | split: "," | uniq | sort %}
      {% for tag in all_tags %}
        {% unless tag == "" %}
        <button class="filter-btn" data-filter="{{ tag | strip | downcase }}">{{ tag | strip }}</button>
        {% endunless %}
      {% endfor %}
    </div>

    <div class="projects-grid" id="projects-grid">
      {% assign sorted_projects = site.projects | sort: "date" | reverse %}
      {% for project in sorted_projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>

    {% if site.projects.size == 0 %}
    <p class="fade-in" style="color: var(--text-secondary); text-align: center; padding: 3rem 0;">
      No projects yet. Check back soon!
    </p>
    {% endif %}
  </div>
</section>
