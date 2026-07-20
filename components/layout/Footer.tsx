import Link from 'next/link';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dl-darker text-white/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display font-semibold text-lg mb-3">
            <Image
              src="/favicon.png"
              priority
              alt="Davelaw Solar Installation"
              className="object-cover w-8 h-8"
              width={20}
              height={20}
            />
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            Durable and affordable solar, inverter and battery solutions —
            designed, supplied and installed for homes and businesses across
            Ilorin, Kwara State and Nigeria.
          </p>
          <div className="flex gap-4 mt-5 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-dl-green-light"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-dl-green-light"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/2348033699776"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-dl-green-light"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/products" className="hover:text-dl-green-light">
                Solar Panels
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-dl-green-light">
                Hybrid Inverters
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-dl-green-light">
                Battery Storage
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-dl-green-light">
                Installation &amp; Maintenance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/solar-estimator"
                className="hover:text-dl-green-light"
              >
                Solar Estimator
              </Link>
            </li>
            <li>
              <Link
                href="/generator-calculator"
                className="hover:text-dl-green-light"
              >
                Power Bill Calculator
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-dl-green-light">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-dl-green-light">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-dl-green-light" />{' '}
              Suite 91, Stadium Shopping Complex, Ibrahim Taiwo Road, Ilorin
              West, Kwara State
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-dl-green-light" /> +234 803 369
              9776
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-dl-green-light" />{' '}
              hello@davelawtechnologies.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-4 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="mailto:hello@davelawtechnologies.com"
            className="flex-1 w-full flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white border border-white/10 rounded-full px-4 py-2.5 transition-colors"
          >
            <HiOutlineMail /> Drop Us a Line
          </a>
          <a
            href="tel:+2348033699776"
            className="flex-1 w-full flex items-center justify-center gap-2 text-xs font-semibold text-dl-dark bg-dl-orange-gradient rounded-full px-4 py-2.5"
          >
            <HiOutlinePhone /> Call Us Now
          </a>
          <a
            href="https://wa.me/2348033699776"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white border border-white/10 rounded-full px-4 py-2.5 transition-colors"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Davelaw Technologies. All rights reserved.
      </div>
    </footer>
  );
}
