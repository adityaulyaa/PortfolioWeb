export function ErrorState({ message = "Profile data is temporarily unavailable." }: { message?: string }) {
  return (
    <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">
      {message}
    </div>
  );
}
