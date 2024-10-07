export default function Footer() {
  return (
    <footer className="mt-16 bg-black">
      <div className="container py-4">
        <p className="text-center text-sm text-white">
          &copy; Copyright {new Date().getFullYear()} by IT Team. All Rights
          Reserved
        </p>
      </div>
    </footer>
  )
}
