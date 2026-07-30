import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-2xl font-bold"
            >
              <Image
                 src="/logo.png"
                 alt="Gear Up Logo"
                 width={120}
                 height={40}
                 priority
                />
            </Link>

            <p className="text-sm leading-7 text-muted-foreground">
              Rent premium sports and fitness equipment with ease. Stay active,
              save money, and enjoy high-quality gear whenever you need it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>

              <Link href="/products" className="hover:text-primary">
                Products
              </Link>

              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>

              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="#" className="hover:text-primary">
                FAQ
              </Link>

              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-primary">
                Terms & Conditions
              </Link>

              <Link href="#" className="hover:text-primary">
                Help Center
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>📍 Dhaka, Bangladesh</p>
              <p>📧 support@gearup.com</p>
              <p>📞 +880 1234-567890</p>

              <div className="flex gap-3">
                <Link href="#">
                  <FaFacebookF size={18} />
                </Link>

                <Link href="#">
                  <FaInstagram size={18} />
                </Link>

                <Link href="#">
                  <FaXTwitter size={18} />
                </Link>

                <Link href="#">
                  <FaLinkedinIn size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <strong>GearUp</strong>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
