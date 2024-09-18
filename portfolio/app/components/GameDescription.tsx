import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

interface GameDescriptionProps {
  description: string | null;  // description can be a string or null
}

export default function GameDescription({ description }: GameDescriptionProps) {
  const [sanitizedDescription, setSanitizedDescription] = useState<string>('');

  useEffect(() => {
    // Only set the sanitized description on the client
    if (description) {
      setSanitizedDescription(DOMPurify.sanitize(description));
    }
  }, [description]);

  return (
    <div>
      {sanitizedDescription ? (
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
      ) : (
        <p>No description available</p> 
      )}
    </div>
  );
}
