import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeKatex from 'rehype-katex';

type ConvertToMarkdownProps = {
  content: string;
};
// type StyleProps = {
//     style: { [key: string]: React.CSSProperties }
// }
 function Markdown ({ content }: ConvertToMarkdownProps) {
    const [ oneStyle, setStyle ] = useState({})
    useEffect(() => {
      import('react-syntax-highlighter/dist/esm/styles/prism/one-dark')
      .then(mod => setStyle(mod.default));
    })
  return (
    <ReactMarkdown
      children={content}
      components={{
        code({ node, inline, className, style, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <ReactSyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={oneStyle}
              language={match ? match[1] : ''}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className="font-semibold italic" {...props}>
              {children}
              <span>123</span>
            </code>
          );
        }
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    />
  );
}
export default Markdown;

