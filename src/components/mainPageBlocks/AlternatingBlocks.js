import React from 'react';
import './AlternatingBlocks.css';
import * as styles from "../../components/index.module.css"

const AlternatingBlocks = ({ blocks }) => {
  
const utmParameters = `?a=b&utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

  return (
    <div className="blocks-container">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`block ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="block-image">
            {block.image}
          </div>
          <div className={block.class}>
            <h2>{block.title}</h2>
            {block.content ? (
              <p>{block.content}</p>
            ) : block.ul ? (
              <ul className={`${styles[block.style.list]}`}>
                {block.ul.map(item => (
                  <li key={item.url} className={`${styles[item.style.item]}`}>
                    <a
                      className={`${styles[item.style.link]}`}
                      href={`${item.url}${utmParameters}`}
                      target='_blank'
                      rel="noreferrer"
                    >
                      {item.text} ↗
                    </a>
                    <p className={`${styles[item.style.desc]}`}>{item.description}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingBlocks;
