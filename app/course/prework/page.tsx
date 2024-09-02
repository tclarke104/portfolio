import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import PreworkContent from '@/app/components/PreworkContent'; // Import the client component

// Function to fetch markdown data on the server
async function getMarkdownData(filename: string) {
    const contentDirectory = path.join(process.cwd(), 'app/course/prework/content');
    const filePath = path.join(contentDirectory, `${filename}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
  
    const matterResult = matter(fileContents);
  
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Return the parsed data along with the video URL if it exists
    return {
      title: matterResult.data.title || 'Untitled Section',
      contentHtml,
      videoUrl: matterResult.data.videoUrl || null, // Video URL from front matter
    };
  }
  
  export default async function PreworkPage() {
    const files = [
      '1-introduction',
      '2-ct_imaging_and_recon',
      '3-creating_a_vsp',
      '4-creating_cutting_guides',
      '5-3d_printing_info',
      '6-printing',
      '7-wrapup',
    ];
  
    const sections = await Promise.all(files.map(getMarkdownData));
  
    return <PreworkContent sections={sections} />;
  }
