const fs = require('fs').promises;
const path = require('path');

async function combineDocsContent() {
  // Configuration
  const pagesDir = path.join(process.cwd(), 'pages');
  const outputFile = path.join(pagesDir, 'llm_friendly_docs.mdx');

  // Initial content with metadata and wrapper to prevent MDX compilation
  let combinedContent = `---
title: LLM-Friendly Documentation
---

import { CopyButton } from '../components/CopyButton'

<div className="raw-content">

\`\`\`text
`;

  // Function to escape special characters
  function escapeContent(content) {
    return content
      // Escape backticks by adding more backticks in the wrapper
      .replace(/`/g, '\\`')
      // Escape dollar signs to prevent MDX interpolation
      .replace(/\$/g, '\\$')
      // Escape curly braces
      .replace(/\{/g, '\\{')
      .replace(/\}/g, '\\}');
  }

  // Function to check if a file should be processed
  const shouldProcessFile = (file) => {
    const ext = path.extname(file).toLowerCase();
    return ['.mdx', '.md'].includes(ext) && 
           !file.includes('_meta.json') && 
           file !== 'llm-friendly-docs.mdx';
  };

  // Function to process a single file
  async function processFile(filePath, relativePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const escapedContent = escapeContent(content);
    return `### File: ${relativePath}\n\n${escapedContent}\n\n---\n\n`;
  }

  // Recursive function to process all files in a directory
  async function processDirectory(dirPath, baseDir = pagesDir) {
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      const relativePath = path.relative(baseDir, fullPath);

      // Skip special directories and files
      if (item.name.startsWith('_') || item.name.startsWith('.')) {
        continue;
      }

      if (item.isDirectory()) {
        await processDirectory(fullPath, baseDir);
      } else if (shouldProcessFile(item.name)) {
        const content = await processFile(fullPath, relativePath);
        combinedContent += content;
      }
    }
  }

  try {
    // Process all files
    await processDirectory(pagesDir);

    // Close the code block and wrapper div
    combinedContent += '```\n\n</div>\n\n<CopyButton />';

    // Write the combined content to file
    await fs.writeFile(outputFile, combinedContent);
    console.log(`Successfully created ${outputFile}`);
  } catch (error) {
    console.error('Error combining docs:', error);
  }
}

// Execute if running directly
if (require.main === module) {
  combineDocsContent();
}

module.exports = combineDocsContent;