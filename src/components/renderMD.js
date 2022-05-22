import React, { h } from 'fre_sg'
import { markdown } from 'markdown'

export const renderMarkdown = (ref, content = '') => {
  if (ref && ref.current) {
    ref.current.innerHTML = markdown.toHTML(content)
  }
}
