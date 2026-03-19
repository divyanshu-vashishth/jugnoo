---
_schema: default
title: Contact | Jugnoo Studio
description: Get in touch with Jugnoo — a creative design and development studio. Let's build something great together.
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: GET IN TOUCH
    heading: Let's Work Together
    subtext: >-
      Have a project in mind? We'd love to hear about it. Fill in the form
      below and we'll get back to you within one business day.
    buttonSections: []
    colorScheme: inherit
    backgroundColor: base
    paddingVertical: 4xl
  - _component: page-sections/ctas/cta-form
    heading: Start the conversation.
    subtext: >-
      Tell us about your project, your goals, and your timeline. The more
      detail you share, the better we can tailor our proposal to your needs.
    formAction: ./
    formBlocks:
      - _component: building-blocks/forms/input
        label: Name
        name: name
        type: text
        required: true
      - _component: building-blocks/forms/input
        label: Email
        name: email
        type: email
        required: true
      - _component: building-blocks/forms/input
        label: Company / Project
        name: company
        type: text
        required: false
      - _component: building-blocks/forms/textarea
        label: Tell us about your project
        name: message
        required: true
      - _component: building-blocks/forms/submit
        text: Send Message
        variant: primary
        size: md
        iconPosition: before
        hideText: false
        disabled: false
    imageSource: /src/assets/images/component-docs/castle.jpg
    imageAlt: Contact Jugnoo Studio
    reverse: false
    colorScheme: dark
    backgroundColor: surface
    paddingVertical: 4xl
---
