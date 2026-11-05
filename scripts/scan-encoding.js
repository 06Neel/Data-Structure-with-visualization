// Scan all .tsx/.ts files for non-ASCII characters that might be corrupted
const fs = require('fs');
const path = require('path');

function findFiles(dir, exts) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
      results = results.concat(findFiles(full, exts));
    } else if (entry.isFile() && exts.some(e => entry.name.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

const srcDir = path.resolve(__dirname, '..');
const files = findFiles(path.join(srcDir, 'src'), ['.tsx', '.ts', '.css']);

// Known mojibake patterns (UTF-8 bytes interpreted as Windows-1252)
const mojibakePatterns = [
  // Arrows
  { bad: '\u00E2\u0086\u2019', good: '\u2192' },  // →
  { bad: '\u00E2\u0086\u201C', good: '\u2190' },  // ←
  { bad: '\u00E2\u0086\u201D', good: '\u2191' },  // ↑
  { bad: '\u00E2\u0086\u201E', good: '\u2193' },  // ↓
  // Check/cross marks
  { bad: '\u00E2\u0153\u201C', good: '\u2714' },  // ✔
  { bad: '\u00E2\u0153\u2014', good: '\u2717' },  // ✗
  // Bullet/misc
  { bad: '\u00E2\u0080\u00A2', good: '\u2022' },  // •
  { bad: '\u00E2\u0080\u201C', good: '\u2014' },  // —
  { bad: '\u00E2\u0080\u2122', good: '\u2019' },  // '
  { bad: '\u00E2\u0080\u0153', good: '\u201C' },  // "
  { bad: '\u00E2\u0080\u009D', good: '\u201D' },  // "
  { bad: '\u00C3\u2014', good: '\u00D7' },         // ×
];

let totalIssues = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(srcDir, file);
  
  // Find all non-ASCII characters and their positions
  const nonAscii = [];
  for (let i = 0; i < content.length; i++) {
    const code = content.charCodeAt(i);
    if (code > 127) {
      // Get surrounding context
      const lineNum = content.substring(0, i).split('\n').length;
      const lineStart = content.lastIndexOf('\n', i) + 1;
      const lineEnd = content.indexOf('\n', i);
      const line = content.substring(lineStart, lineEnd === -1 ? content.length : lineEnd).trim();
      
      // Check if it's a valid emoji or known good unicode
      const char = content[i];
      const codePoint = content.codePointAt(i);
      
      // Skip known good unicode (emojis, common symbols)
      if (codePoint >= 0x1F300 && codePoint <= 0x1FAFF) continue; // emoji ranges
      if (codePoint >= 0x2600 && codePoint <= 0x27BF) continue;   // misc symbols
      if (codePoint >= 0x2190 && codePoint <= 0x21FF) continue;   // arrows
      if (codePoint >= 0x2700 && codePoint <= 0x27BF) continue;   // dingbats
      if (codePoint >= 0x2500 && codePoint <= 0x257F) continue;   // box drawing
      if (codePoint >= 0x2580 && codePoint <= 0x259F) continue;   // block elements
      if (codePoint >= 0xFE00 && codePoint <= 0xFE0F) continue;   // variation selectors
      if (codePoint === 0x200D || codePoint === 0x200B) continue;  // ZWJ / ZWSP
      if (codePoint >= 0x2000 && codePoint <= 0x206F) continue;   // general punctuation
      if (codePoint >= 0x00A0 && codePoint <= 0x00FF) continue;   // Latin-1 supplement (accented chars, ×, etc.)
      if (codePoint >= 0x2010 && codePoint <= 0x2027) continue;   // dashes, bullets
      if (codePoint >= 0x2030 && codePoint <= 0x205E) continue;   // per mille etc
      if (codePoint >= 0x0100 && codePoint <= 0x024F) continue;   // Latin extended
      if (codePoint === 0x2032 || codePoint === 0x2033) continue;  // prime marks
      if (codePoint === 0x2264 || codePoint === 0x2265) continue;  // ≤ ≥
      if (codePoint === 0x00B2 || codePoint === 0x207F) continue;  // ² ⁿ
      
      nonAscii.push({
        line: lineNum,
        char: char,
        code: `U+${codePoint.toString(16).toUpperCase().padStart(4, '0')}`,
        context: line.substring(0, 120),
      });
    }
  }
  
  if (nonAscii.length > 0) {
    console.log(`\n=== ${relPath} ===`);
    // Dedupe by line
    const seen = new Set();
    for (const item of nonAscii) {
      const key = `${item.line}:${item.code}`;
      if (!seen.has(key)) {
        seen.add(key);
        console.log(`  L${item.line}: char=${item.char} (${item.code}) | ${item.context}`);
        totalIssues++;
      }
    }
  }
}

console.log(`\n\nTotal non-standard Unicode found: ${totalIssues}`);
