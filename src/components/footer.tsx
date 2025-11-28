import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="Food Brothers"
                width={280}
                height={90}
                className="h-20 w-auto brightness-110"
              />
            </Link>
            <p className="text-slate-400 mb-6">
              Serving delicious handcrafted food since 2010. Made with love and
              premium ingredients.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-slate-400">
                  123 Food Street,
                  <br />
                  Tasty City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-slate-400">info@foodbrothers.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-white font-medium">Mon - Thu</p>
                  <p className="text-slate-400">10:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-white font-medium">Fri - Sat</p>
                  <p className="text-slate-400">10:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-slate-400">11:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Food Brothers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
