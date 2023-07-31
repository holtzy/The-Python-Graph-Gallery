// Comes from https://janosh.dev/blog/sticky-active-smooth-responsive-toc
import './tableOfContent.css';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
};

export default function TableOfContent({ chartType }) {
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  });

  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState(0);

  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    const selector = ['main h2'];
    const nodes = Array.from(document.querySelectorAll(selector));
    const titles = nodes.map((node) => ({
      title: node.id || node.innerHTML,
      depth: Number(node.nodeName[1]),
    }));
    // Compute the minimum heading depth. Will be subtracted from each heading's
    // depth to determine the indentation of that heading in the ToC.
    const minDepth = Math.min(...titles.map((h) => h.depth));
    setHeadings({ titles, nodes, minDepth });
  }, []);

  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    // Throttling the scrollHandler saves computation and hence battery life.
    const scrollHandler = () => {
      const { nodes } = headings;
      const offsets = nodes.map((el) => accumulateOffsetTop(el));
      const currentVisualizedLocation = window.scrollY + 150;
      const closest = offsets.reduce(function (prev, curr) {
        return Math.abs(curr - currentVisualizedLocation) <
          Math.abs(prev - currentVisualizedLocation)
          ? curr
          : prev;
      }, 0);
      const activeIndex = offsets.findIndex((offset) => offset === closest);
      setActive(activeIndex === -1 ? 0 : activeIndex);
    };
    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);

  return (
    <div className="table-of-content">
      {headings.titles.map(({ title, depth }, index) => (
        <p
          key={title}
          depth={depth - headings.minDepth}
          className={active === index ? 'toc-item active-toc-item' : 'toc-item'}
          onClick={(event) => {
            event.preventDefault();
            headings.nodes[index].scrollIntoView({
              behavior: `smooth`,
              block: `start`,
              alignToTop: true,
            });
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ))}
      {/* {chartType && <ChartTypeLink chartType={chartType} />} */}
    </div>
  );
}

TableOfContent.propTypes = {
  chartType: PropTypes.string,
};
