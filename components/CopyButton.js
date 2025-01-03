export function CopyButton() {
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
      alert('Documentation copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy documentation');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      Copy to Clipboard
    </button>
  );
}