import copy from "copy-to-clipboard";
import { CopyIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
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
    <div className="relative">
      <Button
        className="absolute right-4 top-4"
        Icon={CopyIcon}
        variant="outline"
        onClick={handleCopy}
      >
        {copied ? "Copied" : "Copy"}
      </Button>

      <pre className="rounded-lg border bg-neutral-100 p-8">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
