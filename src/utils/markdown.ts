type MarkdownSegment = {
  type: 'text' | 'bold' | 'heading1' | 'heading2' | 'heading3' | 'italic';
  content: string;
};

export function parseMarkdown(text: string): MarkdownSegment[] {
  const segments: MarkdownSegment[] = [];
  let currentIndex = 0;

  while (currentIndex < text.length) {
    // Handle headings
    if (text[currentIndex] === '#') {
      let level = 1;
      while (text[currentIndex + level] === '#' && level < 3) {
        level++;
      }
      
      const endIndex = text.indexOf('\n', currentIndex);
      const content = text.slice(currentIndex + level + 1, endIndex === -1 ? text.length : endIndex).trim();
      
      segments.push({
        type: `heading${level}` as 'heading1' | 'heading2' | 'heading3',
        content
      });
      
      currentIndex = endIndex === -1 ? text.length : endIndex + 1;
      continue;
    }

    // Handle bold text
    if (text.slice(currentIndex, currentIndex + 2) === '**') {
      const endIndex = text.indexOf('**', currentIndex + 2);
      if (endIndex !== -1) {
        const content = text.slice(currentIndex + 2, endIndex);
        segments.push({ type: 'bold', content });
        currentIndex = endIndex + 2;
        continue;
      }
    }

    // Handle italic text
    if (text[currentIndex] === '*') {
      const endIndex = text.indexOf('*', currentIndex + 1);
      if (endIndex !== -1) {
        const content = text.slice(currentIndex + 1, endIndex);
        segments.push({ type: 'italic', content });
        currentIndex = endIndex + 1;
        continue;
      }
    }

    // Handle plain text
    let textEnd = text.length;
    const nextSpecial = text.slice(currentIndex).search(/[#*]/);
    if (nextSpecial !== -1) {
      textEnd = currentIndex + nextSpecial;
    }
    
    if (textEnd > currentIndex) {
      const content = text.slice(currentIndex, textEnd);
      if (content.trim()) {
        segments.push({ type: 'text', content });
      }
      currentIndex = textEnd;
    } else {
      currentIndex++;
    }
  }

  return segments;
}