import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollLink from "@/components/scrollLink";
import { Lexend_Deca } from "next/font/google";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CardPricing } from "@/components/cardPricing";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#ECF2FA]">
        <div className="mx-8 md:mx-14 pt-32">
          <div className="lg:fixed z-50">
            <ScrollLink />
          </div>

          {/* Section 1 */}
          <section className="ml-0 lg:ml-40" id="started">
            <div className="flex flex-col items-center lg:flex-row lg:gap-16">
              <div className="lg:w-[40%] md:w-full order-2 lg:order-1">
                <div className={lexendDeca.className}>
                  <h1 className="text-[24px] md:text-[34px] font-extrabold ">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1>
                </div>
                <p className="pt-6 pb-6">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
                <Link href="/">
                  <Button variant="button" className="bg-black flex gap-4 items-center ">Daftar Sekarang<ArrowRight /></Button>
                </Link>
              </div>
              <div className="lg:w-[60%] md:w-[80%] order-1 lg:order-2 md:pt-6">
                <Image src="/assets/Section-1.png" alt="Section 1" width={1000} height={1000} layout="responsive" />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="ml-0 lg:ml-40 pt-28 transition-colors duration-500 ease-in" id="broadcast">
            <div className="flex flex-col items-center lg:flex-row lg:gap-16">
              <div className="lg:w-[60%] md:w-[80%]">
                <Image src="/assets/Section-2.png" alt="Section 2" width={1000} height={1000} layout="responsive" objectFit="cover" />
              </div>
              <div className="lg:w-[40%] md:w-full">
                <div className={lexendDeca.className}>
                  <h1 className="text-[24px] md:text-[34px] font-extrabold ">Reach Further with Ease</h1>
                </div>
                <p className="pt-6 pb-6">Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.</p>
              </div>
            </div>
          </section>
        </div>
      </div>


      <div className="mx-8 md:mx-14">
        {/* Section 3 */}
        <section className=" ml-0 lg:ml-40 pt-28">
          <div className="flex flex-col items-center lg:flex-row lg:gap-16">
            <div className="lg:w-[40%] md:w-full order-2 lg:order-1">
              <div className={lexendDeca.className}>
                <h1 className="text-[24px] md:text-[34px] font-extrabold ">Right Time, Effective Messages</h1>
              </div>
              <p className="pt-6 pb-6">Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.</p>
            </div>
            <div className="lg:w-[60%] md:w-[80%] order-1 lg:order-2">
              <Image src="/assets/Section-3.png" alt="Section 3" width={1000} height={1000} layout="responsive" />
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#ECF2FA]">
        <div className="mx-8 md:mx-14">
          {/* Section 4 */}
          <section className="ml-0 lg:ml-40 pt-28" id="autoreply">
            <div className="flex flex-col items-center lg:flex-row lg:gap-16">
              <div className="lg:w-[60%] md:w-[80%]">
                <Image src="/assets/Section-4.png" alt="Section 4" width={1000} height={1000} layout="responsive" />
              </div>
              <div className="lg:w-[40%] md:w-full">
                <div className={lexendDeca.className}>
                  <h1 className="text-[24px] md:text-[34px] font-extrabold ">Respond Faster with the Convenience of Auto Reply</h1>
                </div>
                <p className="pt-6 pb-6">Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.</p>
              </div>
            </div>
          </section>
        </div>
      </div>


      <div className="mx-8 md:mx-14">
        {/* Section 5 */}
        <section className="ml-0 lg:ml-40 pt-28" id="oppurtunity">
          <div className={lexendDeca.className}>
            <h1 className="text-[#3366FF] font-bold text-center text-[34px] pb-16">"One Step Closer to More Effective and Connected Communication!"</h1>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:gap-16">
            <div className="lg:w-[30%] md:w-[50%]">
              <Image src="/assets/Section-5.png" alt="Section 4" width={1000} height={1000} layout="responsive" />
            </div>
            <div className="lg:w-[70%] md:w-full">
              <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
                <Button size="lg">Bisnis dan Pemasaran</Button>
                <Button size="lg" variant="outline">Komersial dan Penjualan</Button>
                <Button size="lg" variant="outline">Organisasi Sosial</Button>
              </div>
              <p className="pt-6 pb-6">Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="ml-0 lg:ml-40 pt-28 pb-28" id="pricing">
          <div className={lexendDeca.className}>
            <h1 className="text-black md:font-bold text-center md:text-[34px] text-[20px] font-medium pb-10">Our Pricing <br /><span className="text-[34px] font-bold text-center md:hidden block">Subscription</span></h1>
          </div>
          <div className="flex justify-center">
            <div className="shadow-xl bg-white w-auto rounded-full shadow-gray-200 px-4 py-2 inline-flex gap-6">
              <Link href="/">
                <Button variant="group">Monthly</Button>
              </Link>
              <Link href="/">
                <Button variant="group">Yearly</Button>
              </Link>
            </div>
          </div>
          <div className="md:flex justify-center mt-6 hidden">
            <p className="text-blue-500 inline-block font-medium bg-gray-200 rounded-lg p-2 ">Hemat hingga 25% dengan paket tahunan</p>
          </div>
          <div className="mt-10">
            <CardPricing />
          </div>
        </section>
      </div>
    </>
  )
}

export default LandingPage;
