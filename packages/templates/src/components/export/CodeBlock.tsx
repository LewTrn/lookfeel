import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";

interface CodeBlockProps {
  title?: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const success = copy(code);

    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="rounded-lg border bg-neutral-100">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <pre className="text-sm">{title}</pre>
        <Button
          Icon={copied ? CheckIcon : CopyIcon}
          variant="outline"
          onClick={handleCopy}
        >
          Copy
        </Button>
      </div>
      <pre className="select-text px-8 py-6 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
