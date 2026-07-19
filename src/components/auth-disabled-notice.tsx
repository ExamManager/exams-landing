import { AlertTriangleIcon } from "lucide-react";

export function AuthDisabledNotice() {
  return (
    <div
      role="status"
      className="mb-4 flex items-center justify-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-100"
    >
      <AlertTriangleIcon
        className="size-3.5 shrink-0 opacity-80"
        aria-hidden="true"
      />
      <p>
        Portfolio demo only — signup is unavailable. This is not an active
        product.
      </p>
    </div>
  );
}
