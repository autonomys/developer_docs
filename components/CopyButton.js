// components/copyButton.js
import { useState } from 'react';

export function CopyButton() {
  const [copyStatus, setCopyStatus] = useState('Copy Documentation for LLM');

  const handleCopy = async () => {
    try {
      // Get the content from the pre tag
      const preElement = document.querySelector('pre');
      if (!preElement) return;

      // Get the text content and unescape it
      let content = preElement.textContent;
      content = content
        .replace(/\\`/g, '`')
        .replace(/\\\$/g, '$')
        .replace(/\\{/g, '{')
        .replace(/\\}/g, '}');

      await navigator.clipboard.writeText(content);
      setCopyStatus('Copied! ✨');
      setTimeout(() => setCopyStatus('Copy Documentation for LLM'), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus('Copy Documentation for LLM'), 2000);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={handleCopy}
        className="flex items-center justify-center px-8 py-4 
                 bg-orange-500 hover:bg-orange-600 
                 text-white text-xl font-semibold
                 rounded-xl shadow-lg hover:shadow-xl
                 transition-all duration-200
                 min-w-[300px]
                 border-2 border-orange-400
                 hover:scale-105"
      >
        {copyStatus}
      </button>
    </div>
  );
}