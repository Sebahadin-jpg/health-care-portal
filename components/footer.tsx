export function Footer() {
  return (
    <footer id="contact" className="bg-sky-50 mt-20 border-t">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h5 className="font-semibold">Afran General Hospital</h5>
          <p className="text-sm text-muted-foreground mt-2">Committed to providing accessible and high-quality care across Addis Ababa and the surrounding regions.</p>
        </div>

        <div>
          <h5 className="font-semibold">Insurance & Billing</h5>
          <p className="text-sm text-muted-foreground mt-2">We accept local and private insurers. For billing inquiries call <strong className="text-sky-700">+251 11 123 4567</strong> or email billing@afran.care</p>
        </div>

        <div>
          <h5 className="font-semibold">Emergency</h5>
          <p className="text-sm text-muted-foreground mt-2">For urgent assistance call <strong className="text-destructive">+251 911 911 911</strong> available 24/7. Clinic hours: Mon–Sat 08:00–18:00</p>
          <div className="mt-4">
            <a href="tel:+251911911911" className="text-white bg-red-600 px-3 py-2 rounded-md">Call Emergency</a>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Afran General Hospital — Built with care in Africa</div>
    </footer>
  );
}
