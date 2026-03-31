import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownSectionProps {
  content: string;
  className?: string;
}

const MarkdownSection = ({ content, className = '' }: MarkdownSectionProps) => {
  return (
    <div className={`prose-green max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownSection;
