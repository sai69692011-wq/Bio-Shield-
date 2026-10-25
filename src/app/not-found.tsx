import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-narrow py-24 text-center">
      <p className="badge badge-hypothesis mb-4">404</p>
      <h1 className="mb-4">Page not found</h1>
      <p className="text-charcoal-soft mb-6">
        The page you were looking for does not exist. It may have been moved
        or you may have followed an outdated link.
      </p>
      <Link href="/" className="btn btn-primary">Back to the BIO-SHIELD overview</Link>
    </section>
  );
}
