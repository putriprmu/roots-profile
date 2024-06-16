"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-navy bg-cover bg-no-repeat text-white pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.png" width={200} height={50} alt="" />
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>
              <h4 className="font-semibold mb-5">Our Sharing Blog</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="https://www-whittard-com.translate.goog/discover/coffee-knowledge/caffeine-in-coffee.html?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc">
                    How much caffeine in your coffee?
                  </Link>
                </li>
                <li>
                  <Link href="https://www-coffeescience-org.translate.goog/science-behind-perfect-morning-cup-coffee/?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc">
                    The perfect cup of coffee
                  </Link>
                </li>
                <li>
                  <Link href="https://pratter.co.id/mengenal-7-perbedaan-kopi-arabika-dan-robusta/">
                    Arabica? Robusta?
                  </Link>
                </li>
                <li>
                  <Link href="support local farmers to create delicious coffee">
                    Support local farmers to create delicious coffee
                  </Link>
                </li>
              </ul>
            </div>
            {/* items */}
            <div className="pl-10">
              <h4 className="font-semibold mb-5">New Item</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="https://www.instagram.com/p/Bz-d7HYn88U/">
                    Costa Rica
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/p/Bz956CFH3LV/">
                    Priangan
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/p/Bz9a7QUnWp-/">
                    Uganda
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/p/B1QM0-SnBaV/">
                    Congo
                  </Link>
                </li>
              </ul>
            </div>
            {/* social */}
            <div className="pl-50">
              <h4 className="font-semibold mb-5">Socials</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="https://www.youtube.com/watch?v=Ienj1VAI6zo">
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/rsupplyid/">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright text */}
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm ">
            Copyright &copy; Roots Supply ID 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
