import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Section {
  title: string;
  contentHtml: string;
  videoUrls?: string[]; // Optional field for YouTube video URL
}


const contentDirectory = path.join(process.cwd(), 'course/prework/content');

export async function getMarkdownData(filename: string): Promise<Section> {
  const filePath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the markdown metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    title: matterResult.data.title || 'Untitled Section',
    contentHtml,
  };
}
