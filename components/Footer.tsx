export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-section py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-gray-800">Negin Boutique</span> ? Elegance in every detail
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
