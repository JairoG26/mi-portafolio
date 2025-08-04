
export const Footer = () => {
  return (
    <footer className="bg-gray-950 py-10 text-center border-t mt-20">
      <p className="text-white mb-4">This website was made with:</p>
      <div className="flex justify-center items-center gap-6 mb-4">
        <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-8 h-8" />
        <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="TailwindCSS" className="w-8 h-8" />
        <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-8 h-8" />
      </div>
    </footer>
  );
};