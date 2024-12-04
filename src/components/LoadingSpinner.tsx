import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );
}