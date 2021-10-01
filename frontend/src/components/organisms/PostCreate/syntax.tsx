// SyntaxHighlight.tsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const SyntaxHighlight: any = {
  code({ inline, className, ...props }) {
    // Set code language declared in code block: ```lang
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default SyntaxHighlight as any;
