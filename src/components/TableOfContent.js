// Comes from https://janosh.dev/blog/sticky-active-smooth-responsive-toc
import './tableOfContent.css'

import React, { useState, useEffect } from 'react'

const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop
    el = el.offsetParent
  }
  return totalOffset
}

export default function TableOfContent() {

  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  })

  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState()

  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    const selector = ["main h2", "main h3"]
    const nodes = Array.from(document.querySelectorAll(selector))
    const titles = nodes.map(node => ({
      title: node.id,
      depth: Number(node.nodeName[1])
    }))
    // Compute the minimum heading depth. Will be subtracted from each heading's
    // depth to determine the indentation of that heading in the ToC.
    const minDepth = Math.min(...titles.map(h => h.depth))
    setHeadings({ titles, nodes, minDepth })
  }, [])

  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    // Throttling the scrollHandler saves computation and hence battery life.
    const scrollHandler = () => {
      const { titles, nodes } = headings
      // Offsets need to be recomputed inside scrollHandler because
      // lazily-loaded content increases offsets as user scrolls down.
      const offsets = nodes.map(el => accumulateOffsetTop(el))
      const activeIndex = offsets.findIndex(
        offset => offset > window.scrollY + 0.8 * window.innerHeight
      )
      setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
    }
    window.addEventListener(`scroll`, scrollHandler)
    return () => window.removeEventListener(`scroll`, scrollHandler)
  }, [headings])

  return (
    <div className="table-of-content">
      {headings.titles.map(({ title, depth }, index) => (
        <p
          key={title}
          depth={depth - headings.minDepth}
          className={active === index ? "toc-item active-toc-item" : "toc-item"}
          onClick={event => {
            event.preventDefault()
            headings.nodes[index].scrollIntoView({
              behavior: `smooth`,
              block: `center`,
            })
          }}
        >
          {title}
        </p>
      ))}
    </div>
  )
}
